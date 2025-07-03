import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SymbolInfo, CurrencyInfo, CustomerProfileInfo, Wallet, KYCInfo} from "../../models/response.model";
import { PositionInfo, OrderData } from "../../models/object.model";
import { AccountLevel, AccountType, IBModel, IBType, LocalStorageKey, TradingMode, TwoFactorAction, TwoFactorType } from '../../models/constant.model';
import { CustomerAccount, CustomerProfile } from "../../models/proto/customer_model_pb";

export interface SymbolState {
    [symbol: string]: SymbolInfo
}

export interface CurrencyState {
    [ccy: string]: CurrencyInfo
}

export interface WalletState {
    [ccy: string]: Wallet;
}

export interface AccountState {
    loginId: string;
    nickName: string;
    avatar: string;
    qrLink: string;
    qrSecret: string;
    twoFaOperation: string;
    twoFaType: number;
    emailAlert: string;
    guiSetting: string;
    commonSetting: string;
    accountBalance: number;
    ibUrl: string;
    wallet:  WalletState,
    kyc: KYCInfo | null,
    accountType: number,
    accountLevel: number,
    withdrawFlg: number,
    ibCommission: number,
    monthlyIbCommission: number,
    ibModel: number,
    ibType: number,
    positionMode: string;
    parentIb: string;
    virtualId: string;
}

export interface TwoFactorState {
    preUrl: string;
    type: TwoFactorType,
    action: TwoFactorAction,
    withdrawCcy: string,
    withdrawAddress: string,
    withdrawAmount: number,
    memo: string,
    newPassword: string
}

export interface SystemState {
    listSymbol: string[],
    mapSymbol: SymbolState,
    listCcy: string[],
    mapCcy: CurrencyState,
    selectedSymbol: string[],
    prePage: string,
    activeSymbol: string,
    account: AccountState,
    positions: PositionInfo[],
    openOrders: OrderData[],
    twoFactor: TwoFactorState,
    uPosition: PositionInfo | null
}

const selectedSymbol = localStorage.getItem(LocalStorageKey.SELECTED_SYMBOL);
const activeSymbol = localStorage.getItem(LocalStorageKey.ACTIVE_SYMBOL);
let lSymbol = selectedSymbol !== null ? JSON.parse(selectedSymbol) : ["USDJPY","EURUSD","XAUUSD","BTCUSD","ETHUSD"];

const defaultSymbolState : SymbolState = {}
const defaultCurrencyState : CurrencyState = {}
const defaultWalletState: WalletState = {};
const defaultAccountState: AccountState = {
    loginId: "",
    nickName: "",
    avatar: "",
    qrLink: "",
    qrSecret: "",
    emailAlert: "",
    commonSetting: "",
    guiSetting: "",
    accountBalance: 0,
    twoFaType: 1,
    twoFaOperation: "",
    ibUrl: "",
    wallet: defaultWalletState,
    kyc: null,
    accountType: AccountType.GENERAL_ACCOUNT,
    accountLevel: AccountLevel.TRADER,
    withdrawFlg: 1,
    ibCommission: 0,
    monthlyIbCommission: 0,
    ibModel: IBModel.SINGLE,
    ibType: IBType.STANDARD,
    positionMode: TradingMode.NETTING,
    parentIb: "N.A",
    virtualId: ""
}

const defaultTwoFactorState: TwoFactorState = {
    preUrl: "",
    type: TwoFactorType.OTP,
    action: TwoFactorAction.LOGIN,
    withdrawCcy: "",
    withdrawAddress: "",
    withdrawAmount: 0,
    memo: "",
    newPassword: ""
}

const initialState: SystemState = {
    listSymbol: [],
    mapSymbol: defaultSymbolState,
    listCcy: [],
    mapCcy: defaultCurrencyState,
    selectedSymbol: lSymbol,
    prePage: "",
    activeSymbol: activeSymbol !== null ? activeSymbol : lSymbol[0],
    account: defaultAccountState,
    positions: [],
    openOrders: [],
    twoFactor: defaultTwoFactorState,
    uPosition: null
}

export const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        updateSymbol: (state, action : PayloadAction<Array<SymbolInfo>>) => {
            const symbols = action.payload as Array<SymbolInfo>;
            let symbolCodes = [];
            for (let sym of symbols) {
                symbolCodes.push(sym.symbolName);
                state.mapSymbol = {
                    ... state.mapSymbol,
                    [sym.symbolName]: sym
                };
            }
            state.listSymbol = symbolCodes;
        },
        updateCcy: (state, action) => {
            const ccys = action.payload as Array<CurrencyInfo>;
            let listCcy = [];
            for (let ccy of ccys) {
                listCcy.push(ccy.ccy);
                state.mapCcy = {
                    ... state.mapCcy,
                    [ccy.ccy]: ccy
                }
            }
            state.listCcy = listCcy;
        },
        setPrePage: (state, action: PayloadAction<string>) => {
            state.prePage = action.payload;
        },
        updateSelectedSymbol: (state, action: PayloadAction<string[]>) => {
            state.selectedSymbol = action.payload;
            localStorage.setItem(LocalStorageKey.SELECTED_SYMBOL, JSON.stringify(action.payload));
        },
        updateActiveSymbol: (state, action: PayloadAction<string>) => {
            state.activeSymbol = action.payload;
            localStorage.setItem(LocalStorageKey.ACTIVE_SYMBOL, action.payload);
        },
        updateCustomerProfile: (state, action: PayloadAction<CustomerProfileInfo>) => {
            let profile = action.payload;
            state.account.loginId = profile.profile.loginId;
            state.account.nickName = profile.profile.nickName;
            state.account.avatar = profile.profile.avatar;
            state.account.qrLink = profile.profile.qrLink;
            state.account.qrSecret = profile.profile.qrSecret;
            state.account.emailAlert = profile.profile.emailAlert;
            state.account.guiSetting = profile.profile.guiSetting;
            state.account.commonSetting = profile.profile.commonSetting;
            state.account.ibUrl = profile.profile.ibUrl;
            state.account.ibType = profile.profile.ibType;
            state.account.ibModel = profile.profile.ibModel;
            state.account.twoFaOperation = profile.profile.twoFaOperation;
            state.account.twoFaType = profile.profile.twoFaType;
            state.account.kyc = profile.kyc;
            state.account.virtualId = profile.profile.virtualId;
            if (profile.parentIb) state.account.parentIb = profile.parentIb;
            if (profile.accounts !== null && profile.accounts.length > 0) {
                for (let account of profile.accounts){
                    state.account.accountType = account.accountType;
                    state.account.withdrawFlg = account.withdrawFlg;
                    state.account.accountLevel = account.accountLevel;
                    state.account.ibCommission = account.ibCommission;
                    state.account.monthlyIbCommission = account.monthlyIbCommission;
                    state.account.positionMode = String(account.positionMode);
                    if (account.accountType === AccountType.GENERAL_ACCOUNT) {
                        if (account.wallets !== null && account.wallets.length > 0) {
                            for (let walelt of account.wallets){
                                if (walelt.ccy === "USD") state.account.accountBalance = Number(walelt.balance) - walelt.reserve;
                                state.account.wallet[walelt.ccy] = walelt;
                            }
                        }
                    }
                }
            }
        },
        processAccountEvent: (state, action: PayloadAction<CustomerAccount>) => {
            let account = action.payload;
            if (account.getWalletsList() !== null && account.getWalletsList().length > 0) {
                for (let walelt of account.getWalletsList()) {
                    let walletBalance = 0;
                    let walletReserve = 0;
                    let ccy = walelt.getCcy() as string;
                    if (walelt.getBalance()) walletBalance = Number(walelt.getBalance());
                    if (walelt.getReserve()) walletReserve = Number(walelt.getReserve());
                    if (ccy === "USD") state.account.accountBalance = walletBalance - walletReserve;
                    if (state.account.wallet[ccy]) {
                        state.account.wallet[ccy].balance = String(walletBalance);
                        state.account.wallet[ccy].reserve = walletReserve;
                    }
                }
            }
            if (account.getAccountLevel() !== null)
                state.account.accountLevel = Number(account.getAccountLevel());
            if (account.getWithdrawFlg() !== null)
                state.account.withdrawFlg = Number(account.getWithdrawFlg());
            state.account.positionMode = String(account.getPositionMode());
        },
        processCustomerEvent: (state, action: PayloadAction<CustomerProfile>) => {
            let profile = action.payload;

            if (profile.getAvatar())
                state.account.avatar = profile.getAvatar() as string;
            if (profile.getEmailAlert())
                state.account.emailAlert = profile.getEmailAlert() as string;
            if (profile.getGuiSetting())
                state.account.guiSetting = profile.getGuiSetting() as string;
            if (profile.getCommonSetting())
                state.account.commonSetting = profile.getCommonSetting() as string;
            if (profile.getQrLink())
                state.account.qrLink = profile.getQrLink() as string;
            if (profile.getQrSecret())
                state.account.qrSecret = profile.getQrSecret() as string;
            if (profile.getTwoFaOperation())
                state.account.twoFaOperation = profile.getTwoFaOperation() as string;
            if (profile.getTwoFaType())
                state.account.twoFaType = profile.getTwoFaType() as number;
        },
        updatePositions: (state, action: PayloadAction<Array<PositionInfo>>) => {
            if (action.payload !== null) {
                state.positions = action.payload;
            }
        },
        updateOpenOrders: (state, action: PayloadAction<Array<OrderData>>) => {
            if (action.payload !== null) {
                state.openOrders = action.payload;
            }
        },
        updateTwoFactor: (state, action: PayloadAction<TwoFactorState>) => {
            if (action.payload !== null) {
                state.twoFactor = action.payload;
            }
        },
        setPositionForUpdate: (state, action: PayloadAction<PositionInfo>) => {
            if (action.payload) {
                state.uPosition = action.payload;
            }
        }
    }
})

export const { 
    updateSymbol, 
    updateCcy, 
    setPrePage, 
    updateSelectedSymbol, 
    updateActiveSymbol, 
    updateCustomerProfile, 
    processAccountEvent,
    processCustomerEvent,
    updatePositions,
    updateOpenOrders,
    updateTwoFactor,
    setPositionForUpdate
} = systemSlice.actions;
export default systemSlice.reducer;