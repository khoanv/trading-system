import moment from "moment";
import { RpcMessage } from "../models/proto/rpc_pb";
import { RpcPayloadClass, RpcService, WebsocketState, QuoteEventMode, OrderType, ExecuteType, ModifyType, OrderStatus, SymbolType } from "../models/constant.model";
import { SubscribeQuoteEventRequest, UnsubscribeQuoteEventRequest, GetLastQuotesRequest } from "../models/proto/pricing_service_pb";
import { Order } from "../models/proto/trading_model_pb";
import { ExchangeCurrencyRequest, GetPositionRequest, ModifyOrderRequest, ModifyPositionRequest, OpenOrderRequest, TradingHistoryRequest } from "../models/proto/trading_service_pb";
import i18next from "i18next";
import { GetSymbolRequest } from "../models/proto/market_service_pb";
import * as Notification from '../components/notify';
import { NumericFormat } from 'react-number-format';

export const isEmpty = (value: any) => {
    return (undefined === value) || (null === value) || (0 === value.trim().length);
}

export const isNull = (value: any) => {
    return (undefined === value) || (null === value);
}

export const roundDown = (value: number, digit: number) => {
    let powVal = Math.pow(10,digit);
    return (Math.floor(value * powVal)) / powVal;
}

export const formatISODate = (date: Date) => {
    if(date !== null){
        let mDateStr = moment(date).format("YYYY-MM-DD");
        return mDateStr;
    }else return null;
}

export const formatDate = (datetime: any) =>{
    if(datetime !== null && datetime !== ""){
        let date = new Date(datetime);
        let mDateStr = moment(date).format("YYYY-MM-DD HH:mm:ss");
        return mDateStr;
    }else return null;
}

export const formatTime = (time: number | undefined) => {
    if (time) {
        let date = new Date(time);
        let mDateStr = moment(date).format("HH:mm:ss");
        return mDateStr;
    }else return null;
}

export const formatNumber = (value: any, digit: number) =>{
    if(!isNull(value) && !isNaN(value))
        return new Intl.NumberFormat('en-us', {minimumFractionDigits: digit,maximumFractionDigits: digit}).format(value);
    else return "";
}

export const formatNumberEx = (value: any, digit: number) =>{
    if(value !== null)
        return <NumericFormat value={value} displayType={'text'} thousandSeparator={true} decimalScale={digit} fixedDecimalScale={true} />
    else return null;
}

export const isEmail = (val: string) =>{
    let regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
      return false;
    }
    return true;
}

export const isNumeric = (value: string) => {
    return /^\d+$/.test(value);
}

export const getOrderType = (orderType : number, exeType: number) => {

    let type  = "";
    if (orderType === OrderType.SINGLE && exeType === ExecuteType.LIMIT)
        type = i18next.t('limitOrder');
    if (orderType === OrderType.SINGLE && exeType === ExecuteType.STOP)
        type = i18next.t('stopOrder');

    if (orderType === OrderType.IFD1 && exeType === ExecuteType.LIMIT)
        type = "IFD1 (" + i18next.t('limitOrder') + ")";

    if (orderType === OrderType.IFD2 && exeType === ExecuteType.LIMIT)
        type = "IFD2 (" + i18next.t('limitOrder') + ")";

    if (orderType === OrderType.IFD1 && exeType === ExecuteType.STOP)
        type = "IFD1 (" + i18next.t('stopOrder') + ")";

    if (orderType === OrderType.IFD2 && exeType === ExecuteType.STOP)
        type = "IFD2 (" + i18next.t('stopOrder') + ")";

    // IFO
    if (orderType === OrderType.IFO1 && exeType === ExecuteType.LIMIT)
        type = "IFO1 (" + i18next.t('limitOrder') + ")";

    if (orderType === OrderType.IFO2 && exeType === ExecuteType.LIMIT)
        type = "IFO2 (" + i18next.t('limitOrder') + ")";

    if (orderType === OrderType.IFO3 && exeType === ExecuteType.LIMIT)
        type = "IFO3 (" + i18next.t('limitOrder') + ")";

    if (orderType === OrderType.IFO1 && exeType === ExecuteType.STOP)
        type = "IFO1 (" + i18next.t('stopOrder') + ")";

    if (orderType === OrderType.IFO2 && exeType === ExecuteType.STOP)
        type = "IFO2 (" + i18next.t('stopOrder') + ")";

    if (orderType === OrderType.IFO3 && exeType === ExecuteType.STOP)
        type = "IFO3 (" + i18next.t('stopOrder') + ")";

    // OCO
    if (orderType === OrderType.OCO1 && exeType === ExecuteType.LIMIT)
        type = "OCO1 (" + i18next.t('limitOrder') + ")";

    if (orderType === OrderType.OCO2 && exeType === ExecuteType.LIMIT)
        type = "OCO2 (" + i18next.t('limitOrder') + ")";

    if (orderType === OrderType.OCO1 && exeType === ExecuteType.STOP)
        type = "OCO1 (" + i18next.t('stopOrder') + ")";

    if (orderType === OrderType.OCO2 && exeType === ExecuteType.STOP)
        type = "OCO2 (" + i18next.t('stopOrder') + ")";

    return type;
}

export const hanldeCoppyAddress = (value: string) => {
    navigator.clipboard.writeText(value);
    return Notification.success(i18next.t('copySuccess'))
}

const buildRpcMessage = () => {
    let rpcMessage: RpcMessage = new RpcMessage();
    rpcMessage.setVersion("1");
    rpcMessage.setId(new Date().getTime());
    return rpcMessage;
}

const sendRpcMessage = (ws: any,service: string, clazz: string, data: Uint8Array | string) => {
    try {
        let rpcMessage: RpcMessage = buildRpcMessage();
        rpcMessage.setService(service);
        rpcMessage.setPayloadClass(clazz);
        rpcMessage.setPayloadData(data);
        if (!isNull(ws) && ws.readyState === WebsocketState.OPEN)
            ws.send(rpcMessage.serializeBinary());
        else {
            setTimeout(() => {
                sendRpcMessage(ws,service,clazz,data)
            }, 1000);
        }
    } catch (e) {}
}

export const subcribeQuotes = (ws: any,symbols: string[], mode: number) => {
    // console.log("sub quote {}", symbols);
    let subQuoteRequest: SubscribeQuoteEventRequest = new SubscribeQuoteEventRequest();
    subQuoteRequest.setSymbolCodeList(symbols);
    subQuoteRequest.setMode(mode);

    sendRpcMessage(ws, RpcService.PRICING, RpcPayloadClass.SUBCRIBE_QUOTE_REQUEST, subQuoteRequest.serializeBinary());
}

export const unsubcribeQuotes = (ws: any, symbols: string[]) => {
    // console.log("unsub quote {}", symbols);
    let unsubQuoteRequest: UnsubscribeQuoteEventRequest = new UnsubscribeQuoteEventRequest();
    unsubQuoteRequest.setSymbolCodeList(symbols);
    sendRpcMessage(ws, RpcService.PRICING, RpcPayloadClass.UNSUBCRIBE_QUOTE_REQUEST, unsubQuoteRequest.serializeBinary());
}

export const getLastQuotes = (ws: any,listSymbol: string[]) => {
    let lastQuotesRequest = new GetLastQuotesRequest();
    lastQuotesRequest.setSymbolCodeList(listSymbol);

    sendRpcMessage(ws, RpcService.PRICING, RpcPayloadClass.LAST_QUOTES_REQUEST, lastQuotesRequest.serializeBinary());
}

export const modifyPositionRequest = (ws: any,id: string,tp: number, sl: number, amount: number) => {
    let request = new ModifyPositionRequest();
    request.setId(id);
    if(tp) request.setTp(String(tp));
    if(sl) request.setSl(String(sl));
    request.setCloseAmount(String(amount));

    sendRpcMessage(ws, RpcService.TRADING, RpcPayloadClass.MODIFY_POSITION_REQUEST, request.serializeBinary());
}

export const sendOrderRequest = (ws: any, order: Order) => {
    // console.log("send OpenOrderRequest")
    let orderRequest: OpenOrderRequest = new OpenOrderRequest();
    orderRequest.setOrder(order);

    sendRpcMessage(ws, RpcService.TRADING, RpcPayloadClass.OPEN_ORDER_REQUEST, orderRequest.serializeBinary());
}

export const getPositions = (ws: any) => {
    let positionRequest: GetPositionRequest = new GetPositionRequest();
    sendRpcMessage(ws, RpcService.TRADING, RpcPayloadClass.GET_POSITION_REQUEST, positionRequest.serializeBinary());
}

export const getOpenOrders = (ws: any) => {
    let orderRequest: TradingHistoryRequest = new TradingHistoryRequest();
    orderRequest.setOrderStatusList([OrderStatus.INACTIVE,OrderStatus.PENDING,OrderStatus.MATCHING]);
    sendRpcMessage(ws, RpcService.TRADING, RpcPayloadClass.GET_TRADE_HISTORY_REQUEST, orderRequest.serializeBinary());
}

export const modifyOrder = (ws: any, order: Order, type: ModifyType) => {
    let modifyOrderRequest = new ModifyOrderRequest();
    modifyOrderRequest.setOrder(order);
    modifyOrderRequest.setType(type);

    sendRpcMessage(ws, RpcService.TRADING, RpcPayloadClass.MODIFY_ORDER_REQUEST, modifyOrderRequest.serializeBinary());
}

export const getSymbols = (ws: any) => {
    console.log("GetSymbolRequest");
    let symbolRequest = new GetSymbolRequest();
    symbolRequest.setSymbolType(SymbolType.ALL);

    sendRpcMessage(ws, RpcService.MARKET, RpcPayloadClass.SYMBOL_REQUEST, symbolRequest.serializeBinary());
}

export const exchangeCurrencyRequest = (ws: any,fromCcy: string, toCcy: string, amount: string,source: number) =>{
    try{
        console.log("Sent Exchange fromCcy = " + fromCcy + ",toCcy = " + toCcy + ",amount = " + amount);
        var exchangeCurrencyRequest: ExchangeCurrencyRequest = new ExchangeCurrencyRequest();
        exchangeCurrencyRequest.setFromCcy(fromCcy);
        exchangeCurrencyRequest.setToCcy(toCcy);
        exchangeCurrencyRequest.setAmount(amount);
        exchangeCurrencyRequest.setSource(source);

        sendRpcMessage(ws, RpcService.TRADING, RpcPayloadClass.EXCHANGE_CURRENCY_REQUEST, exchangeCurrencyRequest.serializeBinary());
    } catch(e){}
}