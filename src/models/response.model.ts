import { TimeInforce } from "./constant.model";
export interface BaseResponse {
    msgType: string;
    result: string;
    msgCode: number;
}

export interface CaptchaInfo {
    source: string;
    captcha: string;
    time: number;
}

export interface CaptchaResponse extends BaseResponse {
    data: CaptchaInfo;
}

export interface LoginResponse extends BaseResponse {
    data: {
        token: string;
        factorType: number; //1: OTP, 2: 2FA
        login2FAStatus: number;
    };
}
export interface SymbolInfo {
    symbolId: number;
    symbolName: string;
    symbolType: number;
    baseCcy: string;
    counterCcy: string;
    priceDigit: number;
    spreadDigit: number;
    amountDigit: number;
    pipSize: number;
    lotSize: number;
    leverage: number;
    maxPositionLot: number;
    minPositionLot: number;
    longSwap: number;
    shortSwap: number;
    displayOrder: number;
    marginCcy: string;
    profitCcy: string;
    traddingType: number;
}

export interface ListSymbolResponse extends BaseResponse {
    data: SymbolInfo[];
}

export interface CurrencyInfo {
    id: number;
    ccy: string;
    symbolType: number;
    digit: number;
    digit1: number;
    exchangeable: boolean;
    exchangeFee: number;
    walletFlg: boolean;
    transferFlg: boolean;
    withdrawFlg: boolean;
    lendingFlg: boolean;
    interestRate: number;
    interestCcy: string;
    withdrawMinAmount: number;
    withdrawFee: number;
    minDeposit: number;
    digitInfo: string;
    goldIconUrl: string;
    silverIconUrl: string;
    sizeIcon: number;
    sizeIcon1: number;
    ccyName: string;
}

export interface CurrencyResponse extends BaseResponse {
    data: CurrencyInfo[];
}

export interface PositionInfo {
    id: string;
    symbol: string;
    symbolId: number;
    side: number;
    amount: number;
    marginRequired: number;
    vwapPrice: number;
    trailingPrice: number;
    mamCode: string;
}

export interface PostionResponse extends BaseResponse {
    data: {
        pageNo: number;
        pageSize: number;
        total: number;
        items: PositionInfo[];
    }
}

export interface OrderHistory {
    pageNo: number;
    pageSize: number;
    orders: OrderInfo[],
    total: number;
    limit: number;
    offset: number
}

export interface OrderInfo {
    comboId: string;
    orderId: string;
    symbol: string;
    side: number;
    orderType: number;
    status: number;
    executionPrice: number;
    vwapExecutionPrice: number;
    executionAmount: number;
    originalAmount: number;
    remainAmount: number;
    exeType: number;
    isHidden: boolean;
    time: number;
    expireTime: number;
    pl: any;
    swap: any;
    fee: any;
    memo: string;
    route: number;
    positionMode: number;
    openPrice: number;
    timeInForce: number;
    expireDate: Date;
    mamCode: string;
    entryType: number;
}

export interface OrderHistoryResponse extends BaseResponse {
    data: OrderHistory;
}

export interface CashflowInfo {
    id: string;
    ccy: string;
    cashflowType: number;
    amount: number;
    transactionTime: number;
    status: number;
    statusStr: string;
    cashflowTypestr: string;
    memo: string;
    fee: number;
    receiver: string;
    cancelFlg: boolean;
    amountStr: string;
    mamCode: string;
    ccy1: string;
    txUrl: string;
    tag: string;
    source: string;
}

export interface CashflowResponse extends BaseResponse {
    data: {
        pageNo: number;
        pageSize: number;
        cashflows: CashflowInfo[],
        total: number;
        limit: number;
        offset: number;
    }
}

export interface ChartInfo {
    id: number;
    version: number;
    productId: number;
    groupId: number;
    symbolId: number;
    type: number;
    chartTime: number;
    companyId: number;
    low: number;
    high: number;
    open: number;
    close: number;
    chartDate: string;
    volume: number
}

export interface ChartDataResponse extends BaseResponse {
    data: ChartInfo[];
}

export interface CustomerProfile {
    loginId: string; // EMAIL
    customerStatus: number; //1: VERIFYING, 2: ACTIVATED, 3: CONTACT TROUBLE, 4: SUPPEND, 5: CLOSED
    twoFaType: number; // 1: OTP, 2: 2FA (GOOGLE AUTHENTICATOR)
    twoFaOperation: string;
    ibCode: string;
    ibUrl: string;
    emailAlert: string;
    ipWhitelist: string;
    password: string;
    qrSecret: string;
    qrLink: string;
    nickName: string;
    anonymous: string;
    commonSetting: string;
    withdrawAddress: string;
    apiKey: string;
    apiSecret: string;
    apiKeySetting: string;
    ibMarkupSetting: string;
    avatar: string;
    tagId: any;
    profile: string;
    easyReserve: string;
    guiSetting: string;
    ibType: number;
    ibModel: number;
    virtualId: string;
}

export interface KYCInfo {
    address: string;
    country: string;
    countryCode: string;
    firstName: string;
    lastName: string;
    middleName: string;
    mobileNumber: string;
    mobileStatus: number;
    passportStatus: number;
    passportUrl: string;
    selfieCode: string;
    selfieStatus: number;
}

export interface CustomerAccount {
    mamCode: string;
    mamName: string;
    accountId: number;
    accountType: number;
    accountStatus: number;
    positionMode: number;
    mamStatus: number;
    wallets: Wallet[];
    closePl: number;
    accountLevel: number;
    monthlyClosePl: number;
    dailyFee: number;
    monthlyFee: number;
    ibCommission: number;
    monthlyIbCommission: number;
    withdrawFlg: number;
}

export interface Wallet {
    ccy: string;
    balance: string;
    cryptoAddress: string;
    reserve: number;
    reward: number;
    point: number;
    chip: number;
    chip2: number;
    todayWinRatio: number;
    totalWinRatio: number;
    network: number;
}
export interface CustomerProfileInfo {
    profile: CustomerProfile;
    kyc: KYCInfo;
    accounts: CustomerAccount[];
    parentIb: any;
}

export interface CustomerProfileResponse extends BaseResponse {
    data: CustomerProfileInfo;
}

export interface WithdrawInfo {
    id: string;
    ccy: string;
    amount: number;
    fee: number;
    requestDate: number;
    toAddress: string;
    memo: string;
    tag: string;
}

export interface WithdrawDetailReponse extends BaseResponse {
    data: WithdrawInfo;
}

export interface CashflowInfo {
    id: string;
    ccy: string;
    cashflowType: number;
    amount: number;
    transactionTime: number;
    status: number;
    statusStr: string;
    cashflowTypestr: string;
    memo: string;
    fee: number;
    receiver: string;
    cancelFlg: boolean;
    amountStr: string;
    mamCode: string;
    ccy1: string;
    txUrl: string;
    tag: string;
    source: string;
    network: string;
}

export interface CashflowResponse extends BaseResponse {
    data: {
        pageNo: number;
        pageSize: number;
        cashflows: CashflowInfo[],
        total: number;
        limit: number;
        offset: number;
    }
}

export interface GetAffiliateResponse extends BaseResponse {
    data: {
        affiliates: AffiliateInfo[],
        totalTradingVol: number,
        totalAvgBalance: number
    }
}

export interface AffiliateInfo {
    tier: number;
    referrals: ReferralInfo[];
    commission: number;
    total: number;
    totalVolTier: number;
}

export interface ReferralInfo {
    nickName: string;
    vol: number;
}

export interface ProviderInfo{
    copyStatus: number;
    id: string;
    nickName: string;
    payoffRatio: number;
    pipPl: number;
    profitFactor: number;
    rank: number;
    recoveryRatio: number;
    roi: number;
    tradeCount: number;
    tradeVolume: number;
    type: number;
    winRatio: number;
    copySide: any;
    copySide1: any;
    copyRatio: any;
    copyRatio1: any;
    copyStatus1: boolean;
    copySymbols: string;
    winTrades:number;
    loseTrades: number;
    evenTrades: number;
    avatar: string;
    defaultAvatar: boolean;
    profile: string;
    description: string;
    virtualId: string;
}

export interface ListProviderResponse extends BaseResponse{
    data:{
        accountType: number;
        rankings:ProviderInfo[];
        best: ProviderInfo[];
        worst: ProviderInfo[];
        limit: number;
        offset: number;
        pageNo: number;
        pageSize: number;
        total: number;
    }
}

export interface ListFollowerResponse extends BaseResponse{
    data:string[];
}