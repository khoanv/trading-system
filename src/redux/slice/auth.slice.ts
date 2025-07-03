import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageKey,System } from "../../models/constant.model";
import { IUserInfo } from "../../models/interface.model";
import * as CryptoJS from 'crypto-js';

export interface AuthState {
    loginId: any;
    password: any;
    token: any;
    factorType: any;
    login2FAStatus: any;
    loggedIn: boolean
}

const user = localStorage.getItem(LocalStorageKey.USER);
let userInfo;
if(user != null){
    var bytes = CryptoJS.AES.decrypt(user, System.PRIVATE_KEY);
    userInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) as IUserInfo;
}
const initialState:AuthState = {
    loginId: user !== null ? userInfo?.loginId : null,
    password: user !== null ? userInfo?.password : null,
    token: user !== null ? userInfo?.token : null,
    factorType: user !== null ? userInfo?.factorType : null,
    login2FAStatus: user !== null ? userInfo?.login2FAStatus : null,
    loggedIn: user !== null ? true : false
}

const defaultState: AuthState = {
    loginId: null,
    password: null,
    token: null,
    factorType: null,
    login2FAStatus: null,
    loggedIn: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<AuthState>) => {
            const userInfo = action.payload;
            state.loginId = userInfo.loginId;
            state.password = userInfo.password;
            state.token = userInfo.token;
            state.factorType = userInfo.factorType;
            state.login2FAStatus = userInfo.login2FAStatus;
            state.loggedIn = userInfo.loggedIn;
        },
        logout: (state) => {
            state = defaultState;
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;