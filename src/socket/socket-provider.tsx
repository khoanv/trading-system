import { useEffect, useState, createContext, useRef } from "react";
import { WSS_URL, RpcService, RpcPayloadClass, ApiRoute, WebsocketState, QuoteEventMode, ExecuteType, SymbolType, OrderSide, OrderStatus, OrderType, RouteUrl, LocalStorageKey } from "../models/constant.model";
import { RpcMessage } from "../models/proto/rpc_pb";
import { LoginRequest, LoginResponse, PingRequest } from "../models/proto/system_service_pb";
import { GetLastQuotesRequest, GetLastQuotesResponse, QuoteEvent, SubscribeQuoteEventRequest, UnsubscribeQuoteEventRequest } from "../models/proto/pricing_service_pb";
import { Quote } from "../models/proto/pricing_model_pb";
import { QuoteInfo, PositionInfo, OrderData } from "../models/object.model";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../redux/store";
import { updateQuote } from "../redux/slice/quote.slice";
import { processAccountEvent, processCustomerEvent, updatePositions, updateOpenOrders, updateSymbol } from "../redux/slice/system.slice";
import { formatNumber, isNull } from "../utils";
import * as Notification from '../components/notify';
import { ExchangeCurrencyResponse, GetPositionRequest, GetPositionResponse, ModifyPositionResponse, OpenOrderResponse, OrderEvent, PositionEvent, TradingHistoryRequest, TradingHistoryResponse } from "../models/proto/trading_service_pb";
import { SymbolState } from "../redux/slice/system.slice";
import { AccountEvent, CustomerEvent } from "../models/proto/customer_service_pb";
import { Order, Position } from "../models/proto/trading_model_pb";
import { GetSymbolRequest, GetSymbolResponse } from "../models/proto/market_service_pb";
import { SymbolInfo } from "../models/response.model";
import { Symbol } from "../models/proto/market_model_pb";
import { toast } from 'react-toastify';

const webSocket = new WebSocket(WSS_URL);

export const SocketContext = createContext(webSocket);

interface ISocketProvider {
    children: React.ReactNode;
}

const SOCKET_RECONNECTION_TIMEOUT = 3000;
const NUMBER_RECONNECT = 10;
let timer: any = null;
let socketTimer: any = null;

export const SocketProvider = (props: ISocketProvider) => {
    const { i18n } = useTranslation();
    const [ws, setWs] = useState<WebSocket>(webSocket);
    const mapSym = useRef<SymbolState>();

    const auth = useSelector((state: RootState) => state.auth);
    const mapSymbol = useSelector((state: RootState) => state.system.mapSymbol);
    const listSymbol = useSelector((state: RootState) => state.system.listSymbol);
    const selectedSymbol = useSelector((state: RootState) => state.system.selectedSymbol);
    const dispatch = useDispatch();

    const tabActive = useRef<boolean>(true);
    const numberReconnect = useRef<number>(0);

    const onFocus = () => {
        toast.dismiss();
        tabActive.current = true;

        console.log("ws readyState = " + ws.readyState);
        if (ws.readyState !== WebsocketState.OPEN && auth.loggedIn) {
        } else ping();
    };

    const onBlur = () => {
        tabActive.current = false;
    }

    useEffect(() => {
        window.addEventListener("focus", onFocus);
        window.addEventListener("blur", onBlur);
    }, [])

    useEffect(() => {
        ws.binaryType = "arraybuffer";
        ws.onopen = onOpen;
        ws.onclose = onClose;
        ws.onmessage = handleReceiveMessage;

        return () => {
            ws.close();
        };
    }, [ws]);

    useEffect(() => {
        if (mapSymbol)
            mapSym.current = mapSymbol;
    }, [mapSymbol])

    const onOpen = () => {
        console.log("Websocket opened");
        clearInterval(socketTimer);
        numberReconnect.current = 0;
        if (auth.loggedIn) {
            console.log("Sent login request")
            login(auth.loginId, auth.password);

            timer = setInterval(() => {
                ping();
            }, 30000);
        }
    }

    const onClose = () => {
        console.log("Websocket closed");
        clearInterval(timer);

        socketTimer = setInterval(() => {
            if (auth.loggedIn) {
                numberReconnect.current = numberReconnect.current + 1;

                if (numberReconnect.current <= NUMBER_RECONNECT) {
                    setWs(new WebSocket(WSS_URL));
                } else {
                    localStorage.removeItem(LocalStorageKey.USER);
                    window.location.href = RouteUrl.LOGIN;
                }
            } else clearInterval(socketTimer)
        }, SOCKET_RECONNECTION_TIMEOUT);
    }

    const login = (loginId: string, password: string) => {
        let loginRequest: LoginRequest = new LoginRequest();
        loginRequest.setLoginId(loginId);
        loginRequest.setPassword(password);
        loginRequest.setRoute(ApiRoute.MOBILE_WEB);

        sendRpcMessage(RpcService.SYSTEM, RpcPayloadClass.LOGIN_REQUEST, loginRequest.serializeBinary());
    }

    const ping = () => {
        let pingRequest = new PingRequest();
        pingRequest.setSendingTime(new Date().getTime());

        sendRpcMessage(RpcService.SYSTEM, RpcPayloadClass.PING_REQUEST, pingRequest.serializeBinary());
    }

    const sendLastQuotes = (listSymbol: string[]) => {
        if (listSymbol) {
            let numberSymbol = 15;
            if (listSymbol.length > numberSymbol) {
                let diff = Math.floor(listSymbol.length / numberSymbol);
                for (let i = 0; i < diff; i++) {
                    if (i < diff - 1) {
                        let xList = listSymbol.slice(i * numberSymbol, (i + 1) * numberSymbol);
                        getLastQuotes(xList);
                    } else {
                        let xList = listSymbol.slice(i * numberSymbol);
                        getLastQuotes(xList);
                    }
                }
            } else getLastQuotes(listSymbol);
        }
    }

    const getSymbols = () => {
        console.log("GetSymbolRequest");
        let symbolRequest = new GetSymbolRequest();
        symbolRequest.setSymbolType(SymbolType.ALL);

        sendRpcMessage(RpcService.MARKET, RpcPayloadClass.SYMBOL_REQUEST, symbolRequest.serializeBinary());
    }

    const getLastQuotes = (listSymbol: string[]) => {
        let lastQuotesRequest = new GetLastQuotesRequest();
        lastQuotesRequest.setSymbolCodeList(listSymbol);

        sendRpcMessage(RpcService.PRICING, RpcPayloadClass.LAST_QUOTES_REQUEST, lastQuotesRequest.serializeBinary());
    }

    const subcribeQuotes = (symbols: string[]) => {
        // console.log("sub quote {}", symbols);
        let subQuoteRequest: SubscribeQuoteEventRequest = new SubscribeQuoteEventRequest();
        subQuoteRequest.setSymbolCodeList(symbols);
        subQuoteRequest.setMode(QuoteEventMode.INTERVAL);

        sendRpcMessage(RpcService.PRICING, RpcPayloadClass.SUBCRIBE_QUOTE_REQUEST, subQuoteRequest.serializeBinary());
    }

    const getPositions = () => {
        let positionRequest: GetPositionRequest = new GetPositionRequest();
        sendRpcMessage(RpcService.TRADING, RpcPayloadClass.GET_POSITION_REQUEST, positionRequest.serializeBinary());
    }

    const getOpenOrders = () => {
        let orderRequest: TradingHistoryRequest = new TradingHistoryRequest();
        orderRequest.setOrderStatusList([OrderStatus.INACTIVE, OrderStatus.PENDING, OrderStatus.MATCHING]);
        sendRpcMessage(RpcService.TRADING, RpcPayloadClass.GET_TRADE_HISTORY_REQUEST, orderRequest.serializeBinary());
    }

    const buildRpcMessage = () => {
        let rpcMessage: RpcMessage = new RpcMessage();
        rpcMessage.setVersion("1");
        rpcMessage.setId(new Date().getTime());
        return rpcMessage;
    }

    const sendRpcMessage = (service: string, clazz: string, data: Uint8Array | string) => {
        try {
            let rpcMessage: RpcMessage = buildRpcMessage();
            rpcMessage.setService(service);
            rpcMessage.setPayloadClass(clazz);
            rpcMessage.setPayloadData(data);
            if (!isNull(ws) && ws.readyState === WebsocketState.OPEN)
                ws.send(rpcMessage.serializeBinary());
            else {
                setTimeout(() => {
                    sendRpcMessage(service, clazz, data)
                }, 1000);
            }
        } catch (e) { }
    }

    const handleReceiveMessage = (msg: any) => {
        const rpc = RpcMessage.deserializeBinary(msg.data);
        const clazz = rpc.getPayloadClass();
        var response: Uint8Array = rpc.getPayloadData() as Uint8Array;
        // if (clazz !== RpcPayloadClass.QUOTE_EVENT)
        //     console.log(clazz);
        switch (clazz) {
            case RpcPayloadClass.LAST_QUOTES_RESPONSE:
                handleLastQuotesResponse(GetLastQuotesResponse.deserializeBinary(response));
                break;
            case RpcPayloadClass.LOGIN_RESPONSE:
                handleLoginResponse(LoginResponse.deserializeBinary(response));
                break;
            case RpcPayloadClass.QUOTE_EVENT:
                handleQuoteEvent(QuoteEvent.deserializeBinary(response));
                break;
            case RpcPayloadClass.OPEN_ORDER_RESPONSE:
                handleOrderResponse(OpenOrderResponse.deserializeBinary(response));
                break;
            case RpcPayloadClass.ORDER_EVENT:
                handleOrderEvent(OrderEvent.deserializeBinary(response));
                break;
            case RpcPayloadClass.ACCOUNT_EVENT:
                handleAccountEvent(AccountEvent.deserializeBinary(response));
                break;
            case RpcPayloadClass.CUSTOMER_EVENT:
                handleCustomerEvent(CustomerEvent.deserializeBinary(response));
                break;
            case RpcPayloadClass.GET_POSITION_RESPONSE:
                handlePositionResponse(GetPositionResponse.deserializeBinary(response));
                break;
            case RpcPayloadClass.POSITION_EVENT:
                handlePositionEvent(PositionEvent.deserializeBinary(response));
                break;
            case RpcPayloadClass.GET_TRADE_HISTORY_RESPONSE:
                handleTradingHistoryResponse(TradingHistoryResponse.deserializeBinary(response));
                break;
            case RpcPayloadClass.SYMBOL_RESPONSE:
                handleSymbolResponse(GetSymbolResponse.deserializeBinary(response));
                break;
            case RpcPayloadClass.EXCHANGE_CURRENCY_RESPONSE:
                handleExchaneCurrencyResponse(ExchangeCurrencyResponse.deserializeBinary(response));
                break;
            case RpcPayloadClass.MODIFY_POSITION_RESPONSE:
                handleModifyPositionResponse(ModifyPositionResponse.deserializeBinary(response));
                break;
        }
    };

    const handleModifyPositionResponse = (res: ModifyPositionResponse) => {
        if (res.getResult() === 1) {
            Notification.success(i18n.t('updatePositionSuccess'));
        } else Notification.error(i18n.t('updatePositionFail'));
    }

    const handleLastQuotesResponse = (res: GetLastQuotesResponse) => {
        for (let quote of res.getQuotesList()) {
            let q: QuoteInfo = convertQuote(quote);
            dispatch(updateQuote(q));
        }
    }

    const handleLoginResponse = (res: LoginResponse) => {
        if (res.getResult() === 1) {
            getPositions();
            getOpenOrders();
            subcribeQuotes(selectedSymbol)
            sendLastQuotes(selectedSymbol)
            getSymbols();
        }
    }

    const convertQuote = (quote: Quote) => {
        let symbolInfo = mapSym.current ? mapSym.current[quote.getSymbolCode() as string] : null;
        const ask = Number(quote.getAsksList()[0].getPrice() as string);
        const bid = Number(quote.getBidsList()[0].getPrice() as string);
        const pipSize = symbolInfo?.pipSize as number;
        const spread = ((ask - bid) / pipSize).toFixed(symbolInfo?.spreadDigit);

        let q: QuoteInfo = {
            symbolId: quote.getSymbolId(),
            symbolCode: quote.getSymbolCode(),
            ask: ask,
            bid: bid,
            spread: Number(spread),
            open: Number(quote.getOpen()),
            high: Number(quote.getHigh()),
            low: Number(quote.getLow()),
            feedTime: quote.getQuoteTime()
        }
        return q;
    }

    const convertPosition = (pos: Position) => {
        let position: PositionInfo = {
            id: pos.getId(),
            symbol: pos.getSymbolCode() as string,
            side: pos.getSide() as number,
            amount: Number(pos.getAmount()),
            vwapPrice: Number(pos.getVwapPrice()),
            mamCode: pos.getMamCode() as string,
            pipPl: 0,
            openPl: 0,
            tp: pos.getTp() ? Number(pos.getTp()) : undefined,
            sl: pos.getSl() ? Number(pos.getSl()) : undefined,
            closeAmount: pos.getCloseAmount() ? Number(pos.getCloseAmount()) : undefined
        }

        return position;
    }

    const convertOrder = (o: Order) => {
        let order: OrderData = {
            orderId: o.getOrderId() as string,
            symbol: o.getSymbolCode() as string,
            side: o.getSide() as number,
            orderType: o.getOrderType() as number,
            status: o.getStatus() as number,
            vwapExecutionPrice: Number(o.getPrice()),
            originalAmount: Number(o.getAmount()),
            exeType: o.getExecuteType() as number,
            time: o.getTime() as number,
            expireTime: o.getExpireTime() as number,
            expireDate: new Date(o.getExpireTime() as number),
            mamCode: o.getMamCode() as string,
            entryType: o.getEntryType() as number,
            timeInforce: o.getTimeInforce() as number
        }
        return order;
    }

    const convertSymbol = (sym: Symbol) => {
        let symbol: SymbolInfo = {
            symbolId: sym.getSymbolId() as number,
            symbolName: sym.getSymbolCode() as string,
            symbolType: sym.getType() as number,
            baseCcy: sym.getBaseCcy() as string,
            counterCcy: sym.getCounterCcy() as string,
            priceDigit: sym.getPriceDigit() as number,
            spreadDigit: sym.getSpeadDigit() as number,
            amountDigit: sym.getAmountDigit() as number,
            pipSize: Number(sym.getPipSize() as string),
            lotSize: Number(sym.getLotSize() as string),
            leverage: sym.getLeverage() as number,
            maxPositionLot: Number(sym.getMaxOrderLot() as string),
            minPositionLot: Number(sym.getMinOrderLot() as string),
            longSwap: Number(sym.getLongSwap() as string),
            shortSwap: Number(sym.getShortSwap() as string),
            displayOrder: sym.getDisplayOrder() as number,
            marginCcy: "",
            profitCcy: "",
            traddingType: sym.getTradingType() as number
        }
        return symbol;
    }

    const handleQuoteEvent = (event: QuoteEvent) => {
        let q: QuoteInfo = convertQuote(event.getQuoteList()[0]);
        dispatch(updateQuote(q));
    }

    const handleOrderResponse = (res: OpenOrderResponse) => {
        if (res.getResult() === 1) {
            let symbolCode = res.getOrder()?.getSymbolCode() as string;
            let symbolInfo = mapSym.current ? mapSym.current[symbolCode] : null;
            let orderType = "";
            let exeType = res.getOrder()?.getExecuteType();
            if (exeType === ExecuteType.LIMIT) orderType = i18n.t('limitOrder');
            if (exeType === ExecuteType.STOP) orderType = i18n.t('stopOrder');

            let orderSide = i18n.t("buy");
            if (res.getOrder()?.getSide() === OrderSide.SELL) orderSide = i18n.t("sell");

            let orderLot = Number(res.getOrder()?.getAmount()) / Number(symbolInfo?.lotSize);
            let amountStr = formatNumber(orderLot, 2);
            let priceStr = formatNumber(res.getOrder()?.getPrice(), symbolInfo?.priceDigit as number);

            if (exeType === ExecuteType.LIMIT || exeType === ExecuteType.STOP) { // || (exeType === ExecuteType.MARKET && symbolInfo?.symbolType === SymbolType.CRYPTO)
                let msg = i18n.t("orderAcceptedSuccess", {
                    orderType: orderType,
                    orderSide: orderSide,
                    symbol: symbolCode,
                    amount: amountStr,
                    price: priceStr
                })

                Notification.success(msg);
            }
        } else {
            if (!isNull(res.getMsgCode())) {
                let msgCode = res.getMsgCode() as string;
                Notification.error(i18n.t(msgCode));
            } else Notification.error(i18n.t('requestOrderFail'));
        }
    }

    const handleOrderEvent = (event: OrderEvent) => {
        for (let order of event.getOrderList()) {
            let symbolCode = order.getSymbolCode() as string;
            let symbolInfo = mapSym.current ? mapSym.current[symbolCode] : null;
            let orderType = "";
            let exeType = order.getExecuteType();
            if (exeType === ExecuteType.LIMIT) orderType = i18n.t('limitOrder');
            if (exeType === ExecuteType.STOP) orderType = i18n.t('stopOrder');
            if (exeType === ExecuteType.MARKET || exeType === ExecuteType.INSTANT) orderType = i18n.t('marketOrder');

            let orderSide = i18n.t("buy");
            if (order.getSide() === OrderSide.SELL) orderSide = i18n.t("sell");

            let orderLot = Number(order.getAmount()) / Number(symbolInfo?.lotSize);
            let amountStr = formatNumber(orderLot, 2);
            let priceStr = formatNumber(order.getPrice(), symbolInfo?.priceDigit as number);

            let executeTypeStr = i18n.t("executedFully");
            let orderStatus = order.getStatus();
            if (orderStatus === OrderStatus.EXECUTED)
                executeTypeStr = i18n.t("executedFully");
            if (orderStatus === OrderStatus.EXECUTED_PARTIALLY)
                executeTypeStr = i18n.t("executePartialy");

            if (!symbolCode.includes("USDT")) {
                if (orderStatus === OrderStatus.EXECUTED || orderStatus === OrderStatus.CLOSED || orderStatus === OrderStatus.EXECUTED_PARTIALLY) {
                    if (order.getOrderType() !== OrderType.ROLLOVER) {
                        let msgText = "orderFilledSuccess";
                        if (order.getMamCode() === "MAIN") msgText = "orderFilledSuccess";
                        else msgText = "copyOrderFilledSuccess";

                        let msg = i18n.t(msgText, {
                            orderType: orderType,
                            orderSide: orderSide,
                            symbol: symbolCode,
                            amount: amountStr,
                            executeType: executeTypeStr,
                            price: priceStr
                        })

                        if (tabActive.current)
                            Notification.success(msg);
                    } else {
                        let msg = i18n.t("rolloverOrderSuccess", {
                            symbol: symbolCode
                        })
                        if (tabActive.current)
                            Notification.success(msg);
                    }
                }
            }

            if (orderStatus === OrderStatus.CANCELED) {
                if (tabActive.current)
                    Notification.success(i18n.t("cancelOrderSuccess"));
                getOpenOrders();
            }

            if (orderStatus === OrderStatus.EXPIRED) {
                if (tabActive.current)
                    Notification.success(i18n.t("orderExpired"));
            }

            if (orderStatus === OrderStatus.PENDING) {
                getOpenOrders();
            }
        }

    }

    const handleAccountEvent = (event: AccountEvent) => {
        dispatch(processAccountEvent(event.getAccount()));
    }

    const handleCustomerEvent = (event: CustomerEvent) => {
        dispatch(processCustomerEvent(event.getProfile()));
    }

    const handlePositionEvent = (event: PositionEvent) => {
        getPositions();
    }

    const handlePositionResponse = (msg: GetPositionResponse) => {
        const listPos: PositionInfo[] = [];
        if (msg.getPositionList()) {
            for (let pos of msg.getPositionList()) {
                const mPos = convertPosition(pos);
                listPos.push(mPos);
            }
        }
        dispatch(updatePositions(listPos));
    }

    const handleTradingHistoryResponse = (msg: TradingHistoryResponse) => {
        if (msg.getResult() === 1) {
            const listOrder: OrderData[] = [];
            if (msg.getOrdersList()) {
                for (let order of msg.getOrdersList()) {
                    const mOrder = convertOrder(order);
                    listOrder.push(mOrder);
                }
            }
            dispatch(updateOpenOrders(listOrder))
        }
    }

    const handleSymbolResponse = (msg: GetSymbolResponse) => {
        const listSymbol: SymbolInfo[] = [];
        const lSymbol: string[] = [];
        if (msg.getSymbolList()) {
            for (let sym of msg.getSymbolList()) {
                const mSymbol = convertSymbol(sym);
                listSymbol.push(mSymbol);
                lSymbol.push(sym.getSymbolCode() as string);
            }
            sendLastQuotes(lSymbol);
        }
        dispatch(updateSymbol(listSymbol));
    }

    const handleExchaneCurrencyResponse = (msg: ExchangeCurrencyResponse) => {
        if (msg.getResult() === 1){
            if (tabActive.current)
                Notification.success(i18n.t("exchangeSuccess"));
        } else {
            if (msg.getMsgCode()) {
                if (tabActive.current)
                    Notification.error(i18n.t("exchangeAmountInvalid"));
            } else Notification.error(i18n.t("exchangeFail"));
        }
    }

    return (
        <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
    );
}