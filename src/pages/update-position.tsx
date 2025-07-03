import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { OrderSide, QuoteEventMode, RouteUrl, System, WebsocketState } from "../models/constant.model";
import { RootState } from "../redux/store";
import { useWebSocket } from "../socket/useWebsocket";
import { isNull, getLastQuotes, subcribeQuotes, formatNumber, isEmpty, modifyPositionRequest, roundDown } from "../utils";
import { NumericFormat } from "react-number-format";

const UpdatePosition = () => {
    const { t } = useTranslation();
    const ws = useWebSocket();
    const navigate = useNavigate();
    const pos = useSelector((state: RootState) => state.system.uPosition);
    const symbolInfo = useSelector((state: RootState) => state.system.mapSymbol[pos?.symbol ?? ""]);
    const quote = useSelector((state: RootState) => state.quote[pos?.symbol ?? ""]);
    const store = useStore();
    const rootState = store.getState() as RootState;

    const preQuote = useRef({ quote }).current;

    const bidCssClass = useRef("");
    const askCssClass = useRef("");
    const ask1 = useRef("");
    const ask2 = useRef("");
    const bid1 = useRef("");
    const bid2 = useRef("");

    const [tp, setTp] = useState<any>(pos?.tp);
    const [sl, setSl] = useState<any>(pos?.sl);
    const [orderLot, setOrderLot] = useState<number>();
    const [enableUpdate, setEnableUpdate] = useState(true);
    const [tpValid, setTpValid] = useState(true);
    const [slValid, setSlValid] = useState(true);
    const [amountValid, setAmountValid] = useState(true);

    useEffect(() => {
        if (pos) {
            if (pos?.tp || pos?.sl) setEnableUpdate(true);
            else setEnableUpdate(false);
            if (pos?.closeAmount) setOrderLot(Math.abs((pos?.closeAmount ?? 0) / symbolInfo?.lotSize));
            else setOrderLot(Math.abs((pos?.amount ?? 0) / symbolInfo?.lotSize));
        } else navigate(RouteUrl.TRADE);
    }, [pos])

    useEffect(() => {
        if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
            getLastQuotes(ws, [pos?.symbol ?? ""]);
            subcribeQuotes(ws, [pos?.symbol ?? ""], QuoteEventMode.REALTIME);
        }
    }, [ws, pos])

    useEffect(() => {
        if (tpValid && slValid && amountValid) setEnableUpdate(true);
        else setEnableUpdate(false);
    }, [tpValid, slValid, amountValid])

    useEffect(() => {
        if (quote && preQuote.quote) {
            if (quote.bid > preQuote.quote.bid) bidCssClass.current = "up";
            else if (quote.bid < preQuote.quote.bid) bidCssClass.current = "down";
            else bidCssClass.current = "";

            if (quote.ask > preQuote.quote.ask) askCssClass.current = "up";
            else if (quote.ask < preQuote.quote.ask) askCssClass.current = "down";
            else askCssClass.current = "";
        }

        if (quote) {
            let tmp = formatNumber(quote.bid, symbolInfo?.priceDigit);
            if (tmp) {
                bid1.current = tmp.substring(0, tmp.length - 2);
                bid2.current = tmp.substring(tmp.length - 2, tmp.length);
            }

            tmp = formatNumber(quote.ask, symbolInfo?.priceDigit);
            if (tmp) {
                ask1.current = tmp.substring(0, tmp.length - 2);
                ask2.current = tmp.substring(tmp.length - 2, tmp.length);
            }
        }

        return () => {
            preQuote.quote = quote;
        }
    }, [quote])

    const getBidArrow = () => {
        let arrow = "fa-circle-left";

        switch (bidCssClass.current) {
            case "up":
                arrow = "fa-circle-up";
                break;
            case "down":
                arrow = "fa-circle-down";
                break;
            default:
                arrow = "fa-circle-left";
                break;
        }
        return arrow;
    }

    const getAskArrow = () => {
        let arrow = "fa-circle-right";

        switch (askCssClass.current) {
            case "up":
                arrow = "fa-circle-up";
                break;
            case "down":
                arrow = "fa-circle-down";
                break;
            default:
                arrow = "fa-circle-right";
                break;
        }
        return arrow;
    }

    const getConvertRate = (pipPl: number) => {
        try {
            if (symbolInfo.counterCcy === System.BASE_CCY) return 1;

            let sym = symbolInfo.counterCcy + System.BASE_CCY;
            if (rootState.quote[sym]) {
                if (pipPl >= 0) return rootState.quote[sym].bid;
                else return rootState.quote[sym].ask;
            }

            sym = System.BASE_CCY + symbolInfo.counterCcy;
            if (rootState.quote[sym]) {
                if (pipPl >= 0) return 1 / rootState.quote[sym].ask;
                else return 1 / rootState.quote[sym].bid;
            }
            return 0;
        } catch (e) {
            return 0;
        }
    }

    const calculatePl = useMemo(() => {
        let openPl = 0;
        let pipPl = 0;
        let convertRate = 0;
        if (quote) {
            let vwapPrice = pos?.vwapPrice ?? 0;
            let amount = pos?.amount ?? 0;

            if (amount >= 0) pipPl = (quote.bid - vwapPrice) / symbolInfo?.pipSize;
            else pipPl = (vwapPrice - quote.ask) / symbolInfo?.pipSize;

            convertRate = getConvertRate(pipPl);
            openPl = pipPl * Math.abs(amount) * convertRate * symbolInfo?.pipSize;
            openPl = Math.floor(openPl * 100) / 100;
        }

        return [pipPl, openPl];
    }, [quote, pos])

    const onReset = () => {
        setTp(pos?.tp ?? "");
        setSl(pos?.sl ?? "");
    }

    const updatePosition = () => {
        let amt = (orderLot ?? 0) * symbolInfo?.lotSize;
        modifyPositionRequest(ws, pos?.id as string, tp, sl, amt);
    }

    useEffect(() => {
        if (orderLot !== null && orderLot !== undefined) {
            let amount = orderLot * symbolInfo?.lotSize;
            if (amount > Math.abs(pos?.amount??0) || amount <= 0) setAmountValid(false);
            else setAmountValid(true);
        }
    }, [orderLot])

    const upAmount = () => {
        if (orderLot) {
            let amountLot = (orderLot + symbolInfo?.minPositionLot).toFixed(2);
            setOrderLot(Number(amountLot));
        } else setOrderLot(symbolInfo?.minPositionLot)
    }

    const downAmount = () => {
        if (orderLot) {
            let amountLot = (orderLot - symbolInfo?.minPositionLot).toFixed(2);
            if (Number(amountLot) < 0) amountLot = "0";
            setOrderLot(Number(amountLot));
        }
    }

    const upTPPrice = () => {
        if (tp) {
            setTp(tp + symbolInfo?.pipSize);
        } else {
            let price = (quote.ask + quote.bid) / 2 + 50 * symbolInfo?.pipSize;
            setTp(price);
        }
    }

    const downTPPrice = () => {
        if (tp) {
            let price = tp - symbolInfo?.pipSize;
            if (price < 0) price = 0;
            setTp(price);
        } else {
            let price = (quote.ask + quote.bid) / 2 + 50 * symbolInfo?.pipSize;
            setTp(price);
        }
    }

    const upSLPrice = () => {
        if (sl) {
            setSl(sl + symbolInfo?.pipSize);
        } else {
            let price = (quote.ask + quote.bid) / 2 - 50 * symbolInfo?.pipSize;
            setSl(price);
        }
    }

    const downSLPrice = () => {
        if (sl) {
            let price = sl - symbolInfo?.pipSize;
            if (price < 0) price = 0;
            setSl(price);
        } else {
            let price = (quote.ask + quote.bid) / 2 - 50 * symbolInfo?.pipSize;
            setSl(price);
        }
    }

    const renderQuoteSection = useMemo(() => {
        return (
            <div className="py-2 pt-3 mb-5">
                <div className="container-fluid">
                    <div className="d-flex position-relative">
                        <div className="flex-grow-1">
                            <div className="text-uppercase text-danger small mb-0">{t('bid')}</div>
                            <div className="text-center">
                                <span className="text-secondary opacity-50 me-1">
                                    <i className={`fa-solid ${getBidArrow()}`}></i>
                                </span>
                                <span className={`fs-3 ${bidCssClass.current}`}>{bid1.current}</span>
                                <span className={`${bidCssClass.current}`}>{bid2.current}</span>
                            </div>
                        </div>
                        <div className="flex-grow-0 my-auto">
                            <i className="fa-light fa-slash-forward opacity-25 fs-1 mt-4"></i>
                        </div>
                        <div className="flex-grow-1">
                            <div className="text-uppercase text-primary small  mb-0 text-end">{t('offer')}</div>
                            <div className="text-center">
                                <span className={`fs-3 ${askCssClass.current}`}>{ask1.current}</span>
                                <span className={`${askCssClass.current}`}>{ask2.current}</span>
                                <span className="text-secondary opacity-50 ms-1">
                                    <i className={`fa-solid ${getAskArrow()}`}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }, [quote])

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex justify-content-between align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(RouteUrl.TRADE)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="text-center flex-grow-1 text-primary mb-0">
                            {pos?.symbol}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    const renderPannelSection = () => {
        return (
            <div className="py-2 bg-white">
                <div className="container-fluid">
                    <div className="card mt-n5">
                        <div className="card-body p-2">
                            <table className="table table-sm table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                                <tbody>
                                    <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('openPL')}</td>
                                        <td className="text-end fw-bold px-0 pt-0 py-1">
                                            <span className={` ${calculatePl[1] >= 0 ? 'up' : 'down'} `}>{formatNumber(calculatePl[1], 2)}</span>
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('be')}</td>
                                        <td className="text-end fw-bold px-0 pt-0 py-1">
                                            {formatNumber(pos?.vwapPrice, symbolInfo?.priceDigit)}
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('positionSize')}</td>
                                        <td className="text-end fw-bold px-0 pt-0 py-1">
                                            <span className={`${pos?.side === OrderSide.BUY ? 'up' : 'down'} text-uppercase`}>
                                                {pos?.side === OrderSide.BUY ? t('buy') : t('sell')} {formatNumber(Math.abs((pos?.amount ?? 0) / symbolInfo?.lotSize), 2)}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('tp')}</td>
                                        <td className="fw-bold px-0 pt-0 py-1 d-flex">
                                            <button className="btn btn-icon1 btn-danger text-white me-1" onClick={downTPPrice}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <NumericFormat value={tp} defaultValue={tp} thousandSeparator={true} allowNegative={false}
                                                className="form-control text-end mb-1" decimalScale={symbolInfo?.priceDigit}
                                                onValueChange={(values: any) => {
                                                    const { floatValue } = values;
                                                    setTp(floatValue);

                                                    if (floatValue && pos) {
                                                        if (pos?.side === OrderSide.BUY) {
                                                            if (floatValue <= quote.bid) setTpValid(false);
                                                            else setTpValid(true);
                                                        } else {
                                                            if (floatValue >= quote.ask) setTpValid(false);
                                                            else setTpValid(true);
                                                        }
                                                    } else setTpValid(true);
                                                }}
                                            />
                                            <button className="btn btn-icon1 btn-success text-white ms-1" onClick={upTPPrice}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td></td>
                                        <td className="fw-bold px-0 pt-0 py-1">
                                            {!tpValid && <span className="text-danger">{t('217')}</span>}
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('sl')}</td>
                                        <td className="fw-bold px-0 pt-0 py-1 d-flex">
                                            <button className="btn btn-icon1 btn-danger text-white me-1" onClick={downSLPrice}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <NumericFormat value={sl} thousandSeparator={true} allowNegative={false}
                                                className="form-control text-end mb-1" decimalScale={symbolInfo?.priceDigit}
                                                onValueChange={(values: any) => {
                                                    const { floatValue } = values;
                                                    setSl(floatValue);

                                                    if (floatValue && pos) {
                                                        if (pos?.side === OrderSide.BUY) {
                                                            if (floatValue >= quote.bid) {
                                                                setSlValid(false);
                                                            } else setSlValid(true);
                                                        } else {
                                                            if (floatValue <= quote.ask) setSlValid(false);
                                                            else setSlValid(true);
                                                        }
                                                    } else setSlValid(true);
                                                }}
                                            />
                                            <button className="btn btn-icon1 btn-success text-white ms-1" onClick={upSLPrice}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td></td>
                                        <td className="fw-bold px-0 pt-0 py-1">
                                            {!slValid && <span className="text-danger">{t('218')}</span>}
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1">{t('closeAmount')}</td>
                                        <td className="fw-bold px-0 pt-0 py-1 d-flex">
                                            <button className="btn btn-icon1 btn-danger text-white me-1" onClick={downAmount}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <NumericFormat value={orderLot} thousandSeparator={true} allowNegative={false} decimalScale={2}
                                                className="form-control text-end mb-1" fixedDecimalScale={true}
                                                onValueChange={(values: any) => {
                                                    const { floatValue } = values;
                                                    setOrderLot(floatValue);

                                                    if (floatValue && pos) {
                                                        let amount = floatValue * symbolInfo?.lotSize;
                                                        if (amount > Math.abs(pos?.amount) || amount <= 0) setAmountValid(false);
                                                        else setAmountValid(true);
                                                    } else setAmountValid(false);
                                                }}
                                            />
                                            <button className="btn btn-icon1 btn-success text-white ms-1" onClick={upAmount}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td></td>
                                        <td className="fw-bold px-0 pt-0 py-1">
                                            {!amountValid && <span className="text-danger">{t('closeAmountInvalid')}</span>}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="card-footer p-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-secondary text-primary" onClick={() => navigate(RouteUrl.TRADE)}>{t('cancelBtn')}</button>
                                {!enableUpdate && <button className="btn btn-success text-uppercase text-white" disabled>{t('updateBtn')}</button>}
                                {enableUpdate && <button className="btn btn-success text-uppercase text-white" onClick={updatePosition}>{t('updateBtn')}</button>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            {renderHeader()}

            <div className="site-main" style={{ paddingTop: "2.5rem" }}>
                {renderQuoteSection}
                {symbolInfo && renderPannelSection()}
            </div>
        </Layout>
    )
}
export default memo(UpdatePosition);