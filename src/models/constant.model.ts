export const LocalStorageKey = {
    LANGUAGE: 'language',
    USER: "user",
    SELECTED_SYMBOL: "symbol",
    MARKET_MODE: "marketMode",
    ACTIVE_SYMBOL: "activeSymbol",
    WITHDRAW_CONFIRM_CODE: "confirmWithdrawCode",
    WITHDRAW_CONFIRM_TIME: "confirmWithdrawTime",
    REF_CODE: "refCode",
    IB_GROUP: "ibGroup",
    REMEMBER_INFO: "remember"
}

export const ApiRoute = {
    MOBILE_WEB: 1
}

export const Requesturl = {
    LOGIN: "/v1/login",
    LOGOUT: "/v1/logout",
    REGISTER: "/v1/customer/register",
    CAPTCHA: "/v1/captcha",
    VERIFY_SESSION: "/v1/verifySession",
    GET_SYMBOLS: "/v1/symbols",
    GET_CCY: "/v1/currency",
    GET_OPEN_POSITION: "/v1/positions",
    GET_PROFILE: "/v1/customer/profile",
    ORDER_HISTORY: "/v1/report/order",
    GET_CASHFLOW: "/v1/report/cashflow",
    GET_CHARTS: "/v1/charts",
    WITHDRAW_NEW: "/v1/withdraw/new",
    WITHDRAW_QUERY: "/v1/withdraw/query",
    WITHDRAW_CONFIRM: "/v1/withdraw/confirm",
    WITHDRAW_UPDATE: "/v1/withdraw/update",
    GET_OTP: "/v1/otp",
    VALIDATE_OTP: "/v1/otp/validate",
    GET_DEPOSIT_HISTORY: "/v1/report/deposit",
    GET_WITHDRAW_HISTORY: "/v1/withdraw/history",
    ACTIVE_ACCOUNT: "/v1/customer/active",
    RESET_PASSWORD: "/v1/forgotPassword",
    VALIDATE_RESET_PASS_URL: "/v1/forgotPassword/validate",
    DO_RESET_PASS: "/v1/forgotPassword/reset",
    UPDATE_PROFILE: "/v1/customer/profile/update",
    UPLOAD_DOCS: "/v1/customer/docs/uploads",
    UPLOAD_AVATAR: "/v1/customer/avatar/upload",
    GET_SELFIE_CODE: "/v1/selfieCode",
    GET_AFFILIATE: "/v1/customer/affiliate",
    WITHDRAW_EMAIL: "/v1/withdraw/confirm-email",
    GET_LIST_SIGNAL_PROVIDER: "/v1/signal/provider",
    SIGNAL_UPDATE: "/v1/signal/update",
    GET_LIST_FOLLOWER : "/v1/signal/followers"
}

export const Result = {
    SUCCESS: "SUCCESS",
    BAD_REQUEST: "BAD_REQUEST",
    ERROR: "ERROR",
    UNAUTHORIZED: "UNAUTHORIZED"
}

export const MarketMode = {
    SIMPLE: "simple",
    ADVANCE: "advance"
}

export const System = {
    PRIVATE_KEY: "hpx@mobile!@#zaq%&$!",
    BASE_CCY: "USD",
    CHECK_TIME: 6000000
}

export const Page = {
    MARKET: "market",
    CHART: "chart",
    TRADE: "trade",
    ACCOUNT: "account",
    NEW_ORDER: "new-order",
    WITHDRAW_CONFIRM: "withdraw-confirm",
    SETTING: "setting",
    AFFILIATE: "ib",
    CLOSE_POSITION: "close-position"
}

export const RouteUrl = {
    LOGIN: "/login",
    REGISTER: "/register",
    MARKET: "/market",
    CHART: "/chart",
    TRADE: "/trade",
    ACCOUNT: "/account",
    SELECT_SYMBOL: "/select-symbol",
    EDIT_SYMBOL: "/edit-symbol",
    NEW_ORDER: "/new-order",
    LOGOUT: "/v1/logout",
    DEPOSIT: "/deposit",
    WITHDRAW: "/withdraw",
    SETTING: "/setting",
    TWO_FACTOR: "/two-factor",
    WITHDRAW_CONFIRM: "/withdrawConfirm",
    CONVERT: "/convert",
    HISTORY: "/history",
    ACTIVE_ACCOUNT: "/active",
    RESET_PASSWORD: "/reset-password",
    UPDATE_PASSWORD: "/forgotPassword",
    AFFILIATE: "/ib",
    UPDATE_POSITION: "/update-position",
    CLOSE_POSITION: "/close-position",
    COPY_TRADE: "/copy-trade",
    FOLLOWERS: "/followers",
    REWARD_SETTING: "/setting-reward"
}

export const IntrumentType = {
    ALL: "all",
    FOREX: "forex",
    COMMODITY: "commodity",
    INDEX: "index",
    CRYPTO: "crypto",
    TOKEN: "token"
}

export const SymbolType = {
    ALL: 9,
    FOREX: 1,
    COMMODITY: 2,
    INDEX: 3,
    CRYPTO: 4
}

export const OrderSide = {
    BUY: 1,
    SELL: -1
}

export const TypeOrder = {
    MARKET: "Market",
    LIMIT: "Limit",
    STOP: "Stop",
    IFD: "IFD",
    IFO: "IFO",
    OCO: "OCO"
}

export enum TimeInforce { DAY = 1, GTC = 2, IOC = 3, FOK = 4 }
export enum OrderRoute { WEB = 1, MATCHING = 6, STOP_OUT = 9, NETOUT = 15, STRATEGY = 22, COPY_TRADE = 23 }
export enum AccountStatus { VERIFYING = 1, ACTIVATED = 2, SUSPEND = 4, CLOSED = 5 }
export enum CashflowType { DEPOSIT = 1, WITHDRAW = 2, EXCHANGE = 3, REALIZED_PL = 4, SWAP_PL = 5, COMMISSION = 6, TRANSACTION_FEE = 7, TRADING_FEE = 8, EXCHANGE_FEE = 9, BACK_OFFICE_BALANCE = 10, BACK_OFFICE_REWARD = 11, BACK_OFFICE_POINT = 12, SWITCHING_IN = 20, SWITCHING_OUT = 21, DIVIDEND_PL = 24, TRANSFER_IN = 30, TRANSER_OUT = 31, DIVIDEND = 13, MAM_COMMISSION = 22, MILEAGE = 40, LOGIN_BONUS = 41, RANKING_REWARD = 43, IEO = 50, MAM = 23, IB_FEE = 70, IB_MARKUP = 71, CHIP_USE = 81, CHIP_EXPIRED = 82, CASH_CHARGE = 83, JACKPOT = 44, TRADE_TOOL = 61, CHAT_POINT = 42, SIGNAL_FEE = 25, SIGNAl_REWARD = 26, MARGIN_FUND_INTEREST = 32, KYC_BONUS = 84 }
export enum CashflowStatus { REQUESTING = 0, REQUESTED = 1, CHECKED = 2, CONFIRMED = 3, SIGNED_PARTIAL = 4, PROCESSING = 5, COMPLETED = 6, REJECTED = 7, CANCEL = 8 , INVALID = 9, VERIFY_STEP1 = 10, VERIFY_STEP2 = 11}
export enum OrderStatus { INACTIVE = -1, PENDING = 0, EXECUTED = 1, EXECUTED_PARTIALLY = 2, CLOSED = 3, EXPIRED = 4, CANCELED = 5, MATCHING = 6 }
export enum ExecuteType { MARKET = 1, INSTANT = 2, LIMIT = 3, STOP = 4 }
export enum OrderType { SINGLE = 1, DIRECT_DEAL = 6, DIVIDEND = 7, ROLLOVER = 8, EXCHANGE = 9, OCO = 10, OCO1 = 11, OCO2 = 12, IFD = 20, IFD1 = 21, IFD2 = 22, IFO = 30, IFO1 = 31, IFO2 = 32, IFO3 = 33 }
export enum WebsocketState { CONNECTING = 0, OPEN = 1, CLOSING = 2, CLOSED = 3}
export enum QuoteEventMode {REALTIME = 0, INTERVAL = 1}
export enum ModifyType { UPDATE = 1, CANCEL = 2 }
export enum OrderSideEnum { BUY = 1, SELL = -1}
export enum TwoFactorType { OTP = 1, TwoFA = 2 }
export enum TwoFactorAction { LOGIN = 1, WITHDRAW = 2, UPDATE_PASSWORD}
export enum KYCStatus {NOT_VERIFY = 0, VERIFYING = 1, VERIFIED = 2, REJECTED = 3}

export const API_URL = "";
export const WSS_URL = process.env.REACT_APP_WSS_URL ? process.env.REACT_APP_WSS_URL : "";
export const DEMO_URL = process.env.REACT_APP_DEMO_URL;
export const LIVE_URL = process.env.REACT_APP_LIVE_URL;
export const APP_ENV = process.env.REACT_APP_ENV;

export const DEFAULT_LANG = "vi";

export const AppEnv = {
    LIVE: "live",
    DEMO: "demo"
}

export const TradingMode = {
    NETTING: "1",
    HEDGING: "2"
}

export const EntryType = {
    NEW: "1",
    CLOSE: "2"
}

export const RpcService = {
    SYSTEM: "system",
    PRICING: "pricing",
    TRADING: "trading",
    CUSTOMER: "customer",
    MARKET: "market"
}

export const RpcPayloadClass = {
    LOGIN_REQUEST: "LoginRequest",
    LOGIN_RESPONSE: "LoginResponse",
    PING_REQUEST: "PingRequest",
    LAST_QUOTES_REQUEST: "GetLastQuotesRequest",
    LAST_QUOTES_RESPONSE: "GetLastQuotesResponse",
    SYMBOL_REQUEST: "GetSymbolRequest",
    SYMBOL_RESPONSE: "GetSymbolResponse",
    SUBCRIBE_QUOTE_REQUEST: "SubscribeQuoteEventRequest",
    UNSUBCRIBE_QUOTE_REQUEST: "UnsubscribeQuoteEventRequest",
    QUOTE_EVENT: "QuoteEvent",
    OPEN_ORDER_REQUEST: "OpenOrderRequest",
    MODIFY_ORDER_REQUEST: "ModifyOrderRequest",
    OPEN_ORDER_RESPONSE: "OpenOrderResponse",
    ORDER_EVENT: "OrderEvent",
    ACCOUNT_EVENT: "AccountEvent",
    POSITION_EVENT: "PositionEvent",
    CUSTOMER_EVENT: "CustomerEvent",
    GET_POSITION_REQUEST: "GetPositionRequest",
    GET_POSITION_RESPONSE: "GetPositionResponse",
    GET_TRADE_HISTORY_REQUEST: "TradingHistoryRequest",
    GET_TRADE_HISTORY_RESPONSE: "TradingHistoryResponse",
    EXCHANGE_CURRENCY_REQUEST: "ExchangeCurrencyRequest",
    EXCHANGE_CURRENCY_RESPONSE: "ExchangeCurrencyResponse",
    MODIFY_POSITION_REQUEST: "ModifyPositionRequest",
    MODIFY_POSITION_RESPONSE: "ModifyPositionResponse"
}

export const AccountType  = {
    GENERAL_ACCOUNT: 1
}

export const AccountLevel = {
    TRADER: 1,
    MARKETING: 2
}

export const IBType = {
    STANDARD: 1,
    LEADER: 2
}

export const IBModel = {
    SINGLE: 1,
    MULTI: 2
}