import { OrderInfo } from "./response.model";
import { OrderStatus, ExecuteType, OrderType, TimeInforce } from "./constant.model";

export const emptyOrder: OrderInfo = {
    comboId: "",
    orderId: "",
    symbol: "",
    side: 0,
    orderType: 0,
    status: 0,
    executionPrice: 0,
    vwapExecutionPrice: 0,
    executionAmount: 0,
    originalAmount: 0,
    remainAmount: 0,
    exeType: 0,
    isHidden: false,
    time: 0,
    expireTime: 0,
    pl: null,
    swap: null,
    fee: null,
    memo: "",
    route: 0, 
    positionMode: 0,
    openPrice: 0,
    timeInForce: 0,
    expireDate: new Date(),
    mamCode: "",
    entryType: 0
}

export const getOrderStatus = (value: number, i18n: any) => {
    let status = "";
    if (value == OrderStatus.PENDING)
        status = i18n.t("ORDER_STATUS_PENDING");
    if (value == OrderStatus.EXECUTED || value == OrderStatus.CLOSED)
        status = i18n.t("ORDER_STATUS_EXECUTED");
    if (value == OrderStatus.EXPIRED)
        status = i18n.t("ORDER_STATUS_EXPIRED");
    if (value == OrderStatus.CANCELED)
        status = i18n.t("ORDER_STATUS_CANCELED");
    if (value == OrderStatus.EXECUTED_PARTIALLY)
        status = i18n.t("ORDER_STATUS_PARTIAL_FILL");
    return status;
}

export const getOrderType = (exeType: number,orderType: number, i18n: any) => {
    let type = i18n.t("ORDER_MARKET");
    if (exeType == ExecuteType.MARKET || exeType == ExecuteType.INSTANT)
        type = i18n.t("ORDER_MARKET");
    if (orderType == OrderType.SINGLE && exeType == ExecuteType.LIMIT)
        type = i18n.t("ORDER_LIMIT");
    if (orderType == OrderType.SINGLE && exeType == ExecuteType.STOP)
        type = i18n.t("ORDER_STOP");
    if (orderType == OrderType.EXCHANGE)
        type = i18n.t("ORDER_EXCHANGE");
    if (orderType == OrderType.ROLLOVER)
        type = i18n.t("ROLLOVER");
    if (orderType == OrderType.DIRECT_DEAL)
        type = i18n.t("DIRECT_DEAL");
    if (orderType == OrderType.DIVIDEND)
        type = i18n.t("EX_RIGHTS");

    if (orderType == OrderType.IFD1 && exeType == ExecuteType.LIMIT)
        type = "IFD1 (" + i18n.t("ORDER_LIMIT") + ")";

    if (orderType == OrderType.IFD2 && exeType == ExecuteType.LIMIT)
        type = "IFD2 (" + i18n.t("ORDER_LIMIT") + ")";

    if (orderType == OrderType.IFD1 && exeType == ExecuteType.STOP)
        type = "IFD1 (" + i18n.t("ORDER_STOP") + ")";

    if (orderType == OrderType.IFD2 && exeType == ExecuteType.STOP)
        type = "IFD2 (" + i18n.t("ORDER_STOP") + ")";

    // IFO
    if (orderType == OrderType.IFO1 && exeType == ExecuteType.LIMIT)
        type = "IFO1 (" + i18n.t("ORDER_LIMIT") + ")";

    if (orderType == OrderType.IFO2 && exeType == ExecuteType.LIMIT)
        type = "IFO2 (" + i18n.t("ORDER_LIMIT") + ")";

    if (orderType == OrderType.IFO3 && exeType == ExecuteType.LIMIT)
        type = "IFO3 (" + i18n.t("ORDER_LIMIT") + ")";

    if (orderType == OrderType.IFO1 && exeType == ExecuteType.STOP)
        type = "IFO1 (" + i18n.t("ORDER_STOP") + ")";

    if (orderType == OrderType.IFO2 && exeType == ExecuteType.STOP)
        type = "IFO2 (" + i18n.t("ORDER_STOP") + ")";

    if (orderType == OrderType.IFO3 && exeType == ExecuteType.STOP)
        type = "IFO3 (" + i18n.t("ORDER_STOP") + ")";

    // OCO
    if (orderType == OrderType.OCO1 && exeType == ExecuteType.LIMIT)
        type = "OCO1 (" + i18n.t("ORDER_LIMIT") + ")";

    if (orderType == OrderType.OCO2 && exeType == ExecuteType.LIMIT)
        type = "OCO2 (" + i18n.t("ORDER_LIMIT") + ")";

    if (orderType == OrderType.OCO1 && exeType == ExecuteType.STOP)
        type = "OCO1 (" + i18n.t("ORDER_STOP") + ")";

    if (orderType == OrderType.OCO2 && exeType == ExecuteType.STOP)
        type = "OCO2 (" + i18n.t("ORDER_STOP") + ")";
    return type;
}

export interface QuoteInfo {
    symbolId: number | undefined,
    symbolCode: string | undefined,
    bid: number,
    ask: number,
    spread: number | undefined,
    open: number | undefined,
    high: number | undefined,
    low: number | undefined,
    feedTime: number | undefined
}

export interface PositionInfo {
    id: string | undefined,
    symbol: string,
    side: number,
    amount: number,
    closeAmount?: number,
    vwapPrice: number,
    tp?: number,
    sl?: number

    pipPl: number,
    openPl: number,
    mamCode: string
}

export interface OrderData {
    orderId: string,
    symbol: string,
    side: number,
    orderType: number,
    status: number,
    vwapExecutionPrice: number,
    originalAmount: number,
    exeType: number,
    time: number,
    expireTime: number,
    expireDate: Date | null,
    mamCode: string,
    entryType: number,
    timeInforce: TimeInforce
}