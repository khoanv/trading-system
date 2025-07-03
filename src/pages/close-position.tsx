import { useEffect, useRef, memo, useMemo, useState } from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { Page, WebsocketState, QuoteEventMode, RouteUrl, ExecuteType, SymbolType, OrderSide, TimeInforce, OrderType, OrderStatus, System } from "../models/constant.model";
import { RootState } from "../redux/store";
import { useWebSocket } from "../socket/useWebsocket";
import { isNull, subcribeQuotes, getLastQuotes, sendOrderRequest, roundDown } from "../utils";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch, useStore } from "react-redux";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { setPrePage } from "../redux/slice/system.slice";
import { useTranslation } from "react-i18next";
import { formatNumber } from "../utils";
import { NumericFormat } from "react-number-format";
import * as Notification from '../components/notify';
import { Order } from "../models/proto/trading_model_pb";

const ClosePosition = () => {
    const { t, i18n } = useTranslation();
    const ws = useWebSocket();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    const [step1, setStep1] = useState(0.1);
    const [step2, setStep2] = useState(0.5);
    const [step3, setStep3] = useState(1);
    const [orderLot, setOrderLot] = useState<number>();
    const [closeLot, setCloseLot] = useState<number>();

    useEffect(() => {
        if (pos) {
            let amtLot = Math.abs((pos?.amount ?? 0) / symbolInfo?.lotSize);
            setOrderLot(amtLot);
            setCloseLot(amtLot);
        } else navigate(RouteUrl.TRADE);
    }, [pos])

    useEffect(() => {
        if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
            getLastQuotes(ws, [pos?.symbol ?? ""]);
            subcribeQuotes(ws, [pos?.symbol ?? ""], QuoteEventMode.REALTIME);
        }
    }, [ws, pos])

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

    const changeAmount = (step: number, diff: number) => {
        let amount = 0;
        if (closeLot) amount = closeLot;
        let mAmount = orderLot??0;

        let changeAmount = 0;
        if (step === 1) changeAmount = step1;
        if (step === 2) changeAmount = step2;
        if (step === 3) changeAmount = step3;

        amount = (amount * 10 + diff * changeAmount * 10) / 10;

        if (amount < 0) amount = 0;
        if (amount > mAmount) amount = mAmount;
        setCloseLot(amount);
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
            let mLot = closeLot ? closeLot : 0;
            openPl = pipPl * Math.abs(mLot *symbolInfo?.lotSize) * convertRate * symbolInfo?.pipSize;
            openPl = Math.floor(openPl * 100) / 100;
        }

        return openPl;
    }, [quote, pos])

    const upAmount = () => {
        if (closeLot && orderLot) {
            let amountLot = closeLot + symbolInfo?.minPositionLot;
            if (amountLot > orderLot ) amountLot = orderLot;
            setCloseLot(amountLot)
        } else setCloseLot(symbolInfo?.minPositionLot)
    }

    const downAmount = () => {
        if (closeLot) {
            let amountLot = closeLot - symbolInfo?.minPositionLot;
            if (amountLot < 0 ) amountLot = 0;
            setCloseLot(amountLot);
        }
    }

    const squarePosition = () => {
        if (pos && closeLot) {
            if (closeLot > 0) {
                let order = new Order();
                let amount = pos.amount;
                let closeAmount = closeLot * symbolInfo?.lotSize;
                closeAmount = roundDown(Math.abs(closeAmount), symbolInfo?.amountDigit);
                order.setSymbolCode(pos?.symbol);
                order.setAmount(String(Math.abs(closeAmount)));
                order.setOrderType(OrderType.SINGLE);
                order.setExecuteType(ExecuteType.MARKET);
                order.setTimeInforce(TimeInforce.FOK);
                order.setTime(new Date().getTime());
                order.setEntryType(2);
                order.setStatus(OrderStatus.PENDING);
                order.setSide(amount >= 0 ? -1 : 1);

                sendOrderRequest(ws, order);
                navigate(RouteUrl.TRADE);
            }
        }else Notification.error(i18n.t('orderAmountInvalid'))
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
                                    <tr>
                                        <td colSpan={2}>
                                            <div className="alert alert-warning py-2" onClick={squarePosition}>
                                                <i className="fa-solid fa-circle-info text-warning me-1"></i> {t('closePosNote1')} {formatNumber(closeLot,2)} {t('closePosNote2')} <span className={` ${calculatePl >= 0 ? 'up' : 'down'} `}>{formatNumber(calculatePl, 2)}</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td className="text-secondary px-0 pt-0 py-1" width="50%">{t('positionSize')}</td>
                                        <td className="text-end fw-bold px-0 pt-0 py-1 d-flex">
                                            <button className="btn btn-icon1 btn-danger text-white me-1" onClick={downAmount}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <NumericFormat  value={closeLot} thousandSeparator={true} allowNegative={false} decimalScale={2}
                                                className="form-control text-end mb-1"
                                                onValueChange={(values: any) => {
                                                    const { floatValue } = values;
                                                    setCloseLot(floatValue);
                                                }}
                                            />
                                            <button className="btn btn-icon1 btn-success text-white ms-1" onClick={upAmount}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div className="row gx-2 mx-n2">
                                                <div className="col">
                                                    <button className="btn w-100 btn-sm btn-outline-success mb-1" onClick={() => changeAmount(1,1)}>+{step1} {t('lot')}</button>
                                                </div>
                                                <div className="col">
                                                    <button className="btn w-100 btn-sm btn-outline-success mb-1" onClick={() => changeAmount(2,1)}>+{step2} {t('lot')}</button>
                                                </div>
                                                <div className="col">
                                                    <button className="btn w-100 btn-sm btn-outline-success mb-1" onClick={() => changeAmount(3,1)}>+{step3} {t('lot')}</button>
                                                </div>
                                            </div>
                                            <div className="row gx-1 gx-2 mx-n2">
                                                <div className="col">
                                                    <button className="btn w-100 btn-sm btn-outline-danger mb-1" onClick={() => changeAmount(1,-1)}>-{step1} {t('lot')}</button>
                                                </div>
                                                <div className="col">
                                                    <button className="btn w-100 btn-sm btn-outline-danger mb-1" onClick={() => changeAmount(2,-1)}>-{step2} {t('lot')}</button>
                                                </div>
                                                <div className="col">
                                                    <button className="btn w-100 btn-sm btn-outline-danger mb-1" onClick={() => changeAmount(3,-1)}>-{step3} {t('lot')}</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

                {renderPannelSection()}
            </div>
        </Layout>
    )
}
export default memo(ClosePosition);