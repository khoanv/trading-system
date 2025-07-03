import { memo, useEffect } from "react";
import Layout from "../components/layout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ApiRoute, AppEnv, APP_ENV, LocalStorageKey, Result, RouteUrl, System } from "../models/constant.model";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { LoginResponse } from '../models/response.model';
import * as CryptoJS from 'crypto-js';
import { JSEncrypt } from 'jsencrypt';
import { LoginAPIRequest } from '../models/request.model';
import * as Notification from '../components/notify';
import { AuthState, loginSuccess } from "../redux/slice/auth.slice";
import * as AccountService from '../services/account.service';
import { useTranslation } from "react-i18next";

const Home = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const auth = useSelector((state: RootState) => state.auth);

    const jsencrypt = new JSEncrypt();
    const publicKey = process.env.REACT_APP_PUBLICK_KEY as string;
    jsencrypt.setPublicKey(publicKey);

    const hexToBytes = (hex: string) => {
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i !== bytes.length; i++) {
            bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
        }
        return bytes;
    }

    const bytesToStringUTF8 = (encriptText: string) => {
        return new TextDecoder().decode(hexToBytes(encriptText));
    }

    useEffect(() => {
        if (searchParams) {
            let code = searchParams.get("ref");
            let token = searchParams.get("token");

            if (token) {
                if (APP_ENV === AppEnv.DEMO) {
                    try {
                        var encriptText = bytesToStringUTF8(token);
                        var bytes = CryptoJS.AES.decrypt(encriptText, System.PRIVATE_KEY);
                        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                        doAutoLogin(decryptedData.loginId, decryptedData.password);
                    } catch(e) {
                        console.log(e)
                        navigate(RouteUrl.LOGIN);
                    }
                } else navigate(RouteUrl.LOGIN);
            } else {
                if (code) {
                    if (auth.loggedIn) navigate(RouteUrl.LOGIN);
                    else {
                        localStorage.setItem(LocalStorageKey.REF_CODE,code);
                        navigate(RouteUrl.REGISTER);
                    } 
                } else navigate(RouteUrl.LOGIN);
            }
        }
    }, [searchParams,auth])

    const doAutoLogin = (loginId: string, password: string) => {
        let encryptPass = jsencrypt.encrypt(password) as string;
        let param: LoginAPIRequest = {
            userName: loginId,
            password: encryptPass,
            route: ApiRoute.MOBILE_WEB
        }

        AccountService.login(param).then((msg: any) => {
            let res = msg.data as LoginResponse;
            if (res.result === Result.SUCCESS) {
                let userInfo: AuthState = {
                    loginId: loginId,
                    password: password,
                    token: res.data.token,
                    factorType: res.data.factorType,
                    login2FAStatus: res.data.login2FAStatus,
                    loggedIn: true
                }
                let encriptText = CryptoJS.AES.encrypt(JSON.stringify(userInfo), System.PRIVATE_KEY).toString();
                localStorage.setItem(LocalStorageKey.USER, encriptText);

                localStorage.removeItem(LocalStorageKey.REMEMBER_INFO);

                dispatch(loginSuccess(userInfo));
                window.location.href = RouteUrl.MARKET;
            } else {
                Notification.error(i18n.t('loginFail'));
            }
        }, (error : any) => {
            Notification.error(i18n.t('loginFail'));
        })
    }

    return (
        <Layout></Layout>
    )
}
export default memo(Home)