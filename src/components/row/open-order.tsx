import { memo, useEffect, useMemo, useState } from "react";
import { OrderData } from "../../models/object.model";
import { useSelector, useStore } from "react-redux";
import { RootState } from "../../redux/store";
import { ExecuteType, ModifyType, OrderSide, OrderSideEnum, OrderStatus, OrderType, TimeInforce} from "../../models/constant.model";
import { useTranslation } from "react-i18next";
import { formatNumber, modifyOrder, getOrderType, formatDate } from "../../utils";
import { Order } from "../../models/proto/trading_model_pb";
import { useWebSocket } from "../../socket/useWebsocket";

interface Props {
    order: OrderData
}
const OpenOrder = (props: Props) => {
    const { order } = props;
    const { t, i18n } = useTranslation();
    const ws = useWebSocket();
    const symbolInfo = useSelector((state: RootState) => state.system.mapSymbol[order.symbol]);
    const quote = useSelector((state: RootState) => state.quote[order.symbol]);
    const store = useStore();
    const rootState = store.getState() as RootState;

    const getMarketPrice = () => {
        let marketPrice = null;
        if (order.side === OrderSide.BUY)
            marketPrice = formatNumber(quote?.bid, symbolInfo?.priceDigit);
        else marketPrice = formatNumber(quote?.ask, symbolInfo?.priceDigit);
        return marketPrice;
    }

    const getType = () => {
        return getOrderType(order.orderType,order.exeType);
    }

    const calculatePl = useMemo(() => {
        let distance = 0;
        if (quote) {
            let vwapExecutionPrice = order.vwapExecutionPrice;
            if (order.exeType === ExecuteType.LIMIT || order.exeType === ExecuteType.MARKET) {
                if (order.side === OrderSide.SELL) {
                    distance = (vwapExecutionPrice - quote.bid) / symbolInfo?.pipSize;
                } else {
                    distance = (quote.ask - vwapExecutionPrice) / symbolInfo?.pipSize;
                }
            }
            if (order.exeType === ExecuteType.STOP) {
                if (order.side === OrderSide.SELL) {
                    distance = (quote.bid - vwapExecutionPrice) / symbolInfo?.pipSize;
                } else {
                    distance = (vwapExecutionPrice - quote.ask) / symbolInfo?.pipSize;
                }
            }
        }
        return distance;
    }, [quote]);

    const cancelOrder = () => {
        let mOrder = new Order();
        mOrder.setSymbolCode(order.symbol);
        mOrder.setAmount(String(order.originalAmount));
        mOrder.setOrderType(order.orderType as OrderType);
        mOrder.setExecuteType(order.exeType as ExecuteType);
        mOrder.setTime(new Date().getTime());
        mOrder.setSide(order.side as OrderSideEnum);
        mOrder.setTimeInforce(order.timeInforce as TimeInforce);
        mOrder.setStatus(OrderStatus.CANCELED);
        mOrder.setOrderId(order.orderId);

        modifyOrder(ws, mOrder, ModifyType.CANCEL);
    }

    return (
        <div className="card card-position mb-2">
            <button className="p-2 border-0 bg-transparent w-100 text-start" data-bs-toggle="collapse" data-bs-target={`#order-${order.orderId}`} role="button" aria-expanded="true" aria-controls="">
                <div className="d-flex justify-content-between">
                    <div>
                        <div>
                            <strong className="text-dark">{order.symbol}</strong>&nbsp;
                            <span className={`${order.side === OrderSide.BUY ? 'up' : 'down'} text-uppercase`}>
                                {order.side === OrderSide.BUY ? t('buy') : t('sell')} {getType()} {formatNumber(order.originalAmount / symbolInfo?.lotSize, 2)}
                            </span>
                        </div>
                        <div className="small"><span className="text-secondary">
                            {formatNumber(order.vwapExecutionPrice, symbolInfo?.priceDigit)}</span>&nbsp;
                            <i className="fa-regular fa-right-long"></i>&nbsp;
                            <span className="text-dark">{getMarketPrice()}</span>
                        </div>
                    </div>
                </div>
            </button>
            <div id={`order-${order.orderId}`} className="card-body border-top bg-primary-light collapse p-2">
                <table className="table table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td className="text-secondary p-0">{t('pipDistance')}</td>
                            <td className="text-end p-0 text-primary">
                                {formatNumber(calculatePl, 2)}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">{t('orderTime')}</td>
                            <td className="text-end p-0">
                                {formatDate(order.time)}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">{t('goodTil')}</td>
                            <td className="text-end p-0">
                                {formatDate(order.expireTime)}
                            </td>
                        </tr>
                        <tr>
                            <td className="p-0">
                                {/* <button className="btn btn-sm btn-link px-0" ><i className="fa-solid fa-pen"></i>{t('modifyBtn')}</button> */}
                            </td>
                            <td className="text-end p-0">
                                <button className="btn btn-sm btn-danger rounded" onClick={cancelOrder}>{t('cancelBtn')}</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default memo(OpenOrder);