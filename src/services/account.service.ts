import axios from "axios";
import './interceptor';
import { Requesturl, API_URL } from '../models/constant.model';
import { CustomerRegisterRequest, DepositHistoryRequest, LoginAPIRequest, LogoutAPIRequest, NewWithdrawRequest, WithdrawHistoryRequest } from "../models/request.model";

export const getCaptcha = () => {
    return axios({
        method: "GET",
        url: API_URL + Requesturl.CAPTCHA
    })
}

export const getReferals = () => {
    return axios({
        method: "GET",
        url: API_URL + Requesturl.GET_AFFILIATE
    })
}

export const getSelfieCode = () => {
    return axios({
        method: "GET",
        url: API_URL + Requesturl.GET_SELFIE_CODE
    })
}

export const login = (request: LoginAPIRequest) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.LOGIN,
        data: request
    })
}

export const register = (request: CustomerRegisterRequest) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.REGISTER,
        data: request
    })
}

export const activeAccount = (code: string) => {
    return axios({
        method: "GET",
        url: API_URL + Requesturl.ACTIVE_ACCOUNT + "/" + code
    })
}

export const resetPassword = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.RESET_PASSWORD,
        data: params
    })
}

export const validateResetPasswordUrl = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.VALIDATE_RESET_PASS_URL,
        data: params
    })
}

export const updatePassword = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.DO_RESET_PASS,
        data: params
    })
}

export const updateProfile = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.UPDATE_PROFILE,
        data: params
    })
}

export const logout = (request: LogoutAPIRequest) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.LOGOUT,
        data: request
    })
}

export const verifySession = (token: string) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.VERIFY_SESSION,
        data: {
            token: token
        }
    })
}

export const getOpenPostions = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.GET_OPEN_POSITION,
        data: params
    })
}

export const getOrderHistory = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.ORDER_HISTORY,
        data: params
    })
}

export const getCashflows = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.GET_CASHFLOW,
        data: params
    })
}

export const getCustomerProfile = () => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.GET_PROFILE,
        data: null
    })
}

export const newWithdraw = (request: NewWithdrawRequest) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.WITHDRAW_NEW,
        data: request
    })
}

export const getOTP = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.GET_OTP,
        data: params
    })
}

export const validateOTP = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.VALIDATE_OTP,
        data: params
    })
}

export const getWithdrawInfo = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.WITHDRAW_QUERY,
        data: params
    })
}

export const confirmWithdraw = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.WITHDRAW_CONFIRM,
        data: params
    })
}

export const updateWithdraw = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.WITHDRAW_UPDATE,
        data: params
    })
}

export const getDepositHistory = (params: DepositHistoryRequest) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.GET_DEPOSIT_HISTORY,
        data: params
    })
}

export const getWithdrawHistory = (params: WithdrawHistoryRequest) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.GET_WITHDRAW_HISTORY,
        data: params
    })
}

export const getSignalProviders = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.GET_LIST_SIGNAL_PROVIDER,
        data: params
    })
}

export const updateSignalProvider = (params: any) => {
    return axios({
        method: "POST",
        url: API_URL + Requesturl.SIGNAL_UPDATE,
        data: params
    })
}

export const withdrawEmail = (code: string) => {
    return axios({
        method: "GET",
        url: API_URL + Requesturl.WITHDRAW_EMAIL + "?token=" + code
    })
}

export const getListFollower = () => {
    return axios({
        method: "GET",
        url: API_URL + Requesturl.GET_LIST_FOLLOWER
    })
}