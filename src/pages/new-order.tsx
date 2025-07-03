import { useEffect, useRef, memo, useMemo, useState } from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { Page, WebsocketState, QuoteEventMode, RouteUrl, ExecuteType, SymbolType, OrderSide, TimeInforce, OrderType, OrderStatus, EntryType, TradingMode } from "../models/constant.model";
import { RootState } from "../redux/store";
import { useWebSocket } from "../socket/useWebsocket";
import { isNull, subcribeQuotes, getLastQuotes, sendOrderRequest, roundDown } from "../utils";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { setPrePage } from "../redux/slice/system.slice";
import { useTranslation } from "react-i18next";
import { formatNumber } from "../utils";
import { NumericFormat } from "react-number-format";
import * as Notification from '../components/notify';
import { Order }  from "../models/proto/trading_model_pb";

const NewOrder = () => {
    const { height, width } = useWindowDimensions();
    const { t, i18n } = useTranslation();
    const ws = useWebSocket();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const activeSymbol = useSelector((state: RootState) => state.system.activeSymbol);
    const account = useSelector((state: RootState) => state.system.account);
    const prePage = useSelector((state: RootState) => state.system.prePage);
    const symbolInfo = useSelector((state: RootState) => state.system.mapSymbol[activeSymbol]);
    const quote = useSelector((state: RootState) => state.quote[activeSymbol]);
    const preQuote = useRef({ quote }).current;

    const bidCssClass = useRef("");
    const askCssClass = useRef("");
    const ask1 = useRef("");
    const ask2 = useRef("");
    const bid1 = useRef("");
    const bid2 = useRef("");

    const [orderType, setOrderType] = useState(String(ExecuteType.MARKET));
    const [entryType, setEntryType] = useState(EntryType.NEW);
    const [orderLot, setOrderLot] = useState<number>();
    const [orderPrice, setOrderPrice] = useState<number>();
    const [step1, setStep1] = useState(0.1);
    const [step2, setStep2] = useState(0.5);
    const [step3, setStep3] = useState(1);
    const [positionMode, setPositionMode] = useState(account.positionMode);

    useEffect(() => {
        setPositionMode(account.positionMode);
        console.log(account.positionMode)
    }, [account])

    useEffect(() => {
        if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
            getLastQuotes(ws, [activeSymbol]);
            subcribeQuotes(ws, [activeSymbol], QuoteEventMode.REALTIME);
        }
    }, [ws, activeSymbol])

    useEffect(() => {
        if (symbolInfo) {
            if (symbolInfo.symbolType === SymbolType.CRYPTO) {
                setStep1(0.1);
                setStep2(0.5);
                setStep3(1);
            } else {
                setStep1(0.1);
                setStep2(0.5);
                setStep3(1);
            }
        }
    }, [symbolInfo]);

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

    const selectSymbolChart = () => {
        dispatch(setPrePage(Page.NEW_ORDER));
        navigate(RouteUrl.SELECT_SYMBOL);
    }

    const goBack = () => {
        let backUrl = RouteUrl.CHART;
        if (prePage === Page.CHART) backUrl = RouteUrl.CHART;
        if (prePage === Page.TRADE) backUrl = RouteUrl.TRADE;

        navigate(backUrl);
    }

    const renderHeader = useMemo(() => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex justify-content-between align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={goBack}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="text-center flex-grow-1 text-primary mb-0" onClick={selectSymbolChart}>
                            {activeSymbol}&nbsp;<i className="fa-solid fa-chevron-down"></i>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }, [activeSymbol])

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

    const sendOrder = (side: number) => {
        if (verifyOrderInfo(side)) {
            let lotSize = Number(symbolInfo.lotSize);
            let order: Order = new Order();
            order.setSymbolCode(activeSymbol);
            let orderAmount = Number(orderLot) * lotSize;
            orderAmount = roundDown(orderAmount, symbolInfo.amountDigit);
            order.setAmount(String(orderAmount));
            order.setSide(side === OrderSide.BUY ? 1 : -1);
            order.setTime(new Date().getTime());

            if (orderType === String(ExecuteType.MARKET)) {
                order.setTimeInforce(TimeInforce.FOK);
                order.setOrderType(OrderType.SINGLE);
                order.setExecuteType(ExecuteType.MARKET);
            } else {
                order.setTimeInforce(TimeInforce.DAY);
                order.setOrderType(OrderType.SINGLE);
                order.setExecuteType(orderType === String(ExecuteType.LIMIT) ? ExecuteType.LIMIT : ExecuteType.STOP);
                order.setPrice(String(orderPrice));
            }

            order.setStatus(OrderStatus.PENDING)
            order.setHide(0)

            if (positionMode === TradingMode.HEDGING)
                order.setEntryType(+entryType)

            sendOrderRequest(ws, order);
        }
    }

    const verifyOrderInfo = (side: number) => {
        let check = true;
        if (isNull(orderLot)) {
            check = false;
            Notification.error(i18n.t('orderAmountInvalid'));
        }

        if (orderType !== String(ExecuteType.MARKET)) {
            if (isNull(orderPrice)) {
                check = false;
                Notification.error(i18n.t('orderPriceInvalid'));
            } 

            if (orderPrice !== undefined) {
                if (orderType === String(ExecuteType.LIMIT)) {
                    if (symbolInfo.symbolType !== SymbolType.CRYPTO) {
                        if (side == OrderSide.BUY) {
                            if (orderPrice > quote.ask) {
                                Notification.error(i18n.t('orderPriceInvalid'));
                                check = false;
                            }
                        }
                        if (side == OrderSide.SELL) {
                            if (orderPrice < quote.bid) {
                                Notification.error(i18n.t('orderPriceInvalid'));
                                check = false;
                            }
                        }
                    }
                }

                if (orderType === String(ExecuteType.STOP)) {
                    if (side == OrderSide.BUY) {
                        if (orderPrice < quote.ask) {
                            Notification.error(i18n.t('orderPriceInvalid'));
                            check = false;
                        }
                    }
                    if (side == OrderSide.SELL) {
                        if (orderPrice > quote.bid) {
                            Notification.error(i18n.t('orderPriceInvalid'));
                            check = false;
                        }
                    }
                }
            }
        }
        return check;
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

    const getBtnName = (side: number) => {
        let name = "";

        if (orderType === String(ExecuteType.MARKET)) {
            if (side === OrderSide.BUY) name = i18n.t('buy');
            else name = i18n.t('sell');
        }

        if (orderType === String(ExecuteType.LIMIT)) {
            if (side === OrderSide.BUY) name = i18n.t('buyLimit');
            else name = i18n.t('sellLimit');
        }

        if (orderType === String(ExecuteType.STOP)) {
            if (side === OrderSide.BUY) name = i18n.t('buyStop');
            else name = i18n.t('sellStop');
        }
        return name;
    }

    const changeAmount = (step: number, diff: number) => {
        let amount = 0;
        if (orderLot) amount = orderLot;
        // let lotSize = Number(symbolInfo.lotSize);

        let changeAmount = 0;
        if (step === 1) changeAmount = step1;
        if (step === 2) changeAmount = step2;
        if (step === 3) changeAmount = step3;

        amount = (amount * 10 + diff * changeAmount * 10) / 10;

        if (amount < 0) amount = 0;
        setOrderLot(amount);
    }

    const onChangeOrderType = (e: any) => {
        if (quote) {
            let midPrice = (quote.bid + quote.ask) / 2;
            setOrderPrice(midPrice);
        }

        setOrderType(e.target.value);
    }

    const upPrice = () => {
        if (orderPrice) {
            setOrderPrice(orderPrice + symbolInfo?.pipSize);
        }
    }

    const downPrice = () => {
        if (orderPrice) {
            let price = orderPrice - symbolInfo?.pipSize;
            if (price < 0) price = 0;
            setOrderPrice(price);
        }
    }

    const upAmount = () => {
        if (orderLot) {
            setOrderLot(orderLot + symbolInfo?.minPositionLot)
        } else setOrderLot(symbolInfo?.minPositionLot)
    }

    const downAmount = () => {
        if (orderLot) {
            let amountLot = orderLot - symbolInfo?.minPositionLot;
            if (amountLot < 0 ) amountLot = 0;
            setOrderLot(amountLot);
        }
    }

    const renderPannelSection = useMemo(() => {
        return (
            <div className="py-2 bg-white">
                <div className="container-fluid">
                    <div className="card mt-n5">
                        <div className="card-body p-2">
                            <table className="table table-sm table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                                <tbody>
                                    <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('orderType')}</td>
                                        <td className="text-end fw-bold px-0 pt-0 py-1">
                                            <select className="form-select" value={orderType} onChange={onChangeOrderType}>
                                                <option value={ExecuteType.MARKET}>{t('marketOrder')}</option>
                                                <option value={ExecuteType.LIMIT}>{t('limitOrder')}</option>
                                                <option value={ExecuteType.STOP}>{t('stopOrder')}</option>
                                            </select>
                                        </td>
                                    </tr>
                                    {positionMode === TradingMode.HEDGING && <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('tradingType')}</td>
                                        <td className="text-end fw-bold px-0 pt-0 py-1">
                                            <select className="form-select" value={entryType} onChange={(e) => setEntryType(e.target.value)}>
                                                <option value={EntryType.NEW}>{t('newType')}</option>
                                                <option value={EntryType.CLOSE}>{t('closeType')}</option>
                                            </select>
                                        </td>
                                    </tr>}
                                    <tr className="align-middle">
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
                                    <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('orderAmount')}</td>
                                        <td className="text-end fw-bold px-0 pt-0 py-1 d-flex">
                                            <button className="btn btn-icon1 btn-danger text-white me-1" onClick={downAmount}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <NumericFormat  value={orderLot} thousandSeparator={true} allowNegative={false} decimalScale={2}
                                                className="form-control text-end mb-1"
                                                onValueChange={(values: any) => {
                                                    const { floatValue } = values;
                                                    setOrderLot(floatValue);
                                                }}
                                            />
                                            <button className="btn btn-icon1 btn-success text-white ms-1" onClick={upAmount}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    {orderType !== String(ExecuteType.MARKET) && <tr className="align-middle">
                                        <td className="text-secondary small px-0 pt-0 py-1" width="50%">{t('orderPrice')}</td>
                                        <td className="text-end fw-bold px-0 pt-0 py-1 d-flex">
                                            <button className="btn btn-icon1 btn-danger text-white me-1" onClick={downPrice}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <NumericFormat  value={orderPrice} thousandSeparator={true} allowNegative={false}
                                                className="form-control text-end mb-1" decimalScale={symbolInfo?.priceDigit} fixedDecimalScale={true}
                                                onValueChange={(values: any) => {
                                                    const { floatValue } = values;
                                                    setOrderPrice(floatValue);
                                                }}
                                            />
                                            <button className="btn btn-icon1 btn-success text-white ms-1" onClick={upPrice}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </td>
                                    </tr>}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer p-2">
                            <div className="row g-2">
                                <div className="col">
                                    <button className="btn w-100 btn-danger text-uppercase text-white" onClick={() => sendOrder(OrderSide.SELL)}>{getBtnName(OrderSide.SELL)}</button>
                                </div>
                                <div className="col">
                                    <button className="btn w-100 btn-success text-uppercase text-white" onClick={() => sendOrder(OrderSide.BUY)}>{getBtnName(OrderSide.BUY)}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }, [orderType, orderLot, orderPrice, step1, step2, step3, positionMode,entryType])

    return (
        <Layout>
            {renderHeader}

            <div className="site-main" style={{ paddingTop: "2.5rem" }}>
                {renderQuoteSection}
                {renderPannelSection}
            </div>
            <Footer page={Page.NEW_ORDER} />
        </Layout>
    )
}

export default memo(NewOrder);