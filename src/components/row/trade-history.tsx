import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { OrderSide, OrderStatus } from "../../models/constant.model";
import { OrderInfo } from "../../models/response.model";
import { RootState } from "../../redux/store";
import { formatDate, formatNumber, getOrderType } from "../../utils";

interface Props {
    order: OrderInfo
}
const TradeHistory = (props: Props) => {
    const {t,i18n} = useTranslation();
    const {order} = props;
    const symbolInfo = useSelector((state: RootState) => state.system.mapSymbol[order.symbol]);

    const getType = () => {
        return getOrderType(order.orderType,order.exeType);
    }

    const getStatus = () => {
        let statusCss = "";
        let statusValue = "";

        if (order.status === OrderStatus.EXECUTED || order.status === OrderStatus.CLOSED) {
            statusCss = "text-success";
            statusValue = i18n.t("statusExecuted");
        }

        if (order.status === OrderStatus.EXECUTED_PARTIALLY) {
            statusCss = "text-success";
            statusValue = i18n.t("statusPartialFill");
        }

        if (order.status === OrderStatus.EXPIRED) {
            statusCss = "text-danger";
            statusValue = i18n.t("statusExpired");
        }

        if (order.status === OrderStatus.CANCELED) {
            statusCss = "text-danger";
            statusValue = i18n.t("statusCancelled");
        }

        return [statusCss, statusValue];
    }

    return (
        <div className="card card-position mb-2">
            <button className="p-2 border-0 bg-transparent w-100 text-start" data-bs-toggle="collapse" data-bs-target={`#order-${order.orderId}`} role="button" aria-expanded="true" aria-controls="">
                <div className="d-flex justify-content-between">
                    <div style={{width:"23%"}}>
                        <span className={`${getStatus()[0]}`}>{getStatus()[1]}</span>
                    </div>
                    <div style={{width:"55%"}}>
                        <div>
                            <span className="text-dark">{order.symbol},</span>&nbsp;
                            <span className={`${order.side === OrderSide.BUY ? 'up' : 'down'} text-uppercase`}>
                                {order.side === OrderSide.BUY ? t('buy') : t('sell')} {getType()} {formatNumber(order.originalAmount / symbolInfo?.lotSize , 2)}
                            </span>
                        </div>
                        <div className="small">
                            {/* <span className="text-secondary">
                            {formatNumber(order.openPrice, symbolInfo?.priceDigit)}</span>&nbsp;
                            <i className="fa-regular fa-right-long"></i>&nbsp; */}
                            <span className="text-secondary">{formatNumber(order.vwapExecutionPrice, symbolInfo?.priceDigit)}</span>
                        </div>
                        <div>
                            <span className="text-secondary small">{formatDate(order.time)}</span>
                        </div>
                    </div>
                    <div style={{width:"22%"}} className={`text-end ${order.pl !== null && order.pl > 0 ? 'up' : 'down'}  `}>
                        {formatNumber(order.pl, 2)}
                    </div>
                </div>
            </button>
            <div id={`order-${order.orderId}`} className="card-body border-top bg-primary-light collapse p-2">
                <table className="table table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td className="text-secondary p-0">ID</td>
                            <td className="text-end p-0 text-dark">
                                {order.orderId}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">{t('fee')}</td>
                            <td className={`text-end p-0 ${order.fee !== null && order.fee > 0 ? 'down' : 'up'}  `}>
                                {formatNumber(order.fee, 2)}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">{t('memo')}</td>
                            <td className="text-end p-0 text-dark">
                                {order.memo}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default memo(TradeHistory);