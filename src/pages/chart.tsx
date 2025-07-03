import { useEffect, memo, useState, useRef } from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import TVChartContainer from "../components/TVChartContainer"
import { Page, WebsocketState, QuoteEventMode, RouteUrl } from "../models/constant.model";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useWebSocket } from "../socket/useWebsocket";
import { formatNumber, isNull, sendOrderRequest, subcribeQuotes, unsubcribeQuotes } from "../utils";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { setPrePage } from "../redux/slice/system.slice";
import { useTranslation } from "react-i18next";
import Draggable from "react-draggable";
import { ExecuteType, Order, OrderSide, OrderStatus, OrderType, TimeInforce } from "../models/proto/trading_model_pb";
import { NumericFormat } from "react-number-format";
import i18n from "../i18n";
import * as Notification from '../components/notify';

const Chart = () => {
    const { t, i18n } = useTranslation();
    const { height, width } = useWindowDimensions();
    const ws = useWebSocket();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const activeSymbol = useSelector((state: RootState) => state.system.activeSymbol);
    const symbolInfo = useSelector((state: RootState) => state.system.mapSymbol[activeSymbol]);
    const quote = useSelector((state: RootState) => state.quote[activeSymbol]);

    const [orderAmount, setOrderAmount] = useState<number>();

    useEffect(() => {
        if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
            subcribeQuotes(ws, [activeSymbol], QuoteEventMode.REALTIME);
        }
    }, [ws, activeSymbol])

    const selectSymbolChart = () => {
        dispatch(setPrePage(Page.CHART));
        navigate(RouteUrl.SELECT_SYMBOL);
    }

    const gotoNewOrder = () => {
        dispatch(setPrePage(Page.CHART));
        navigate(RouteUrl.NEW_ORDER);
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex justify-content-between align-items-center">
                        <div className="header-action me-2">
                            {/* <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(RouteUrl.MARKET)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button> */}
                        </div>
                        <h4 className="text-center flex-grow-1 text-primary mb-0" onClick={selectSymbolChart}>
                            {activeSymbol}&nbsp;<i className="fa-solid fa-chevron-down"></i>
                        </h4>
                        <div className="header-action ms-2">
                            <button className="btn btn-sm bg-white btn-outline-primary" onClick={gotoNewOrder}>{t('tradeBtn')}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const onChangeOrderAmount = () => {

    }

    const sendOrder = (side: number) => {
        if (verifyOrderInfo(side)) {
            let lotSize = Number(symbolInfo.lotSize);
            let order: Order = new Order();
            order.setSymbolCode(activeSymbol);
            let xAmount = Number(orderAmount) * lotSize;
            order.setAmount(String(xAmount));
            order.setSide(side === OrderSide.BUY ? 1 : -1);
            order.setTime(new Date().getTime());

            order.setTimeInforce(TimeInforce.FOK);
            order.setOrderType(OrderType.SINGLE);
            order.setExecuteType(ExecuteType.MARKET);

            order.setStatus(OrderStatus.PENDING)
            order.setHide(0)
            // order.setEntryType(1)

            sendOrderRequest(ws, order);
        }
    }

    const verifyOrderInfo = (side: number) => {
        if (isNull(orderAmount)) {
            Notification.error(i18n.t('orderAmountInvalid'));
            return false;
        }

        return true;
    }

    const renderBody = () => {
        let mHeight = 0;
        if (height) mHeight = height - 90;

        return (
            <div className="site-main" style={{ "paddingTop": "0rem" }}>
                <div className="mb-3 pt-0" style={{ maxHeight: mHeight }}>
                    <Draggable bounds='parent' enableUserSelectHack={false} handle=".order-panel-handle" defaultPosition={{x: 110, y: 90}}>
                        <div className={"order-panel-box"}>
                            <div className="order-panel-handle">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 20 40">
                                    <path d="M12.5 26a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    <path d="M8.5 26a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    <path d="M0 0h20v40H0z" fill="none"></path>
                                </svg>

                            </div>
                            <div className="order-panel-main">
                                <table cellSpacing={0} cellPadding="0" >
                                    <tbody>
                                        <tr>
                                            <td className="number-s">
                                                <a className="btn-order btn btn-sell" id='sell-btn' style={{ flexBasis: '30%' }} tabIndex={0} onClick={(e) => sendOrder(-1)}>
                                                    {t('sell')} <br />
                                                    <span>{formatNumber(quote?.bid, symbolInfo?.priceDigit)}</span>
                                                </a>
                                            </td>
                                            <td>
                                                <NumericFormat value={orderAmount} thousandSeparator={true} allowNegative={false} placeholder={t('lot')} decimalScale={2}
                                                    className="form-control form-control-sm d-inline-block text-right" style={{ height: 50, fontSize: 15, textAlign: 'center', color: '#111', border: 0, background: 'transparent', paddingLeft:'0px', paddingRight: '0px' }}
                                                    onValueChange={(values: any) => {
                                                        const { floatValue } = values;
                                                        setOrderAmount(floatValue);
                                                    }}
                                                />
                                            </td>
                                            <td className="number-s">
                                                <a className="btn-order btn btn-buy" id='buy-btn' style={{ flexBasis: '30%' }} tabIndex={0} onClick={(e) => sendOrder(1)}>
                                                    {t('buy')}<br />
                                                    <span>{formatNumber(quote?.ask, symbolInfo?.priceDigit)}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </Draggable>


                    <TVChartContainer symbolCode={activeSymbol} quote={quote} />
                </div >
            </div >
        )
    }

    return (
        <Layout>
            {renderHeader()}
            {renderBody()}
            <Footer page={Page.CHART} />
        </Layout>
    )
}

export default memo(Chart);