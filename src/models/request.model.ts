export interface LoginAPIRequest {
    userName: string;
    password: string;
    route: number;
}

export interface LogoutAPIRequest { }

export interface NewWithdrawRequest {
    ccy: string,
    toAddress: string,
    amount: number,
    memo: string
}

export interface DepositHistoryRequest {
    ccy: string | null,
    status: number | null,
    fromTime: number | null,
    toTime: number | null,
    pageNo: number,
    pageSize: number
}

export interface WithdrawHistoryRequest {
    ccy: string | null,
    statuses: number[] | null,
    fromTime: number | null,
    toTime: number | null,
    pageNo: number,
    pageSize: number
}

export interface CustomerRegisterRequest {
    loginId: string,
    password: string,
    ibRef: string | null,
    nickname: string,
    guiSetting: string
}