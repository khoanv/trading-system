import { useEffect, useState, memo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { Md5 } from "ts-md5";
import { JSEncrypt } from 'jsencrypt';
import * as CryptoJS from 'crypto-js';
import * as AccountService from '../services/account.service';
import { LoginResponse } from '../models/response.model';
import { ApiRoute, AppEnv, APP_ENV, LIVE_URL, LocalStorageKey, Result, RouteUrl, System, TwoFactorAction } from '../models/constant.model';
import { LoginAPIRequest } from '../models/request.model';
import * as Notification from '../components/notify';
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from 'react-redux';
import { AuthState, loginSuccess } from "../redux/slice/auth.slice";
import { TwoFactorState, updateTwoFactor } from "../redux/slice/system.slice";

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height1', `${window.innerHeight}px`);
}
window.addEventListener('resize', appHeight)
appHeight()

const Login = () => {
    const { i18n, t } = useTranslation();
    const navigate = useNavigate();

    const rememberValue = localStorage.getItem(LocalStorageKey.REMEMBER_INFO);
    let rememberInfo;
    if(rememberValue != null){
        var bytes = CryptoJS.AES.decrypt(rememberValue, System.PRIVATE_KEY);
        rememberInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }

    const auth = useSelector((state: RootState) => state.auth);
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const [rememberLoginId, setRememberLoginId] = useState<string>(rememberInfo ? rememberInfo?.loginId : "");
    const [rememberPassword, setRememberPassword] = useState<string>(rememberInfo ? rememberInfo?.password : "");
    const [rememberCheck, setRememberCheck] = useState(rememberInfo ? true : false);

    const dispatch = useDispatch();

    const jsencrypt = new JSEncrypt();
    const publicKey = process.env.REACT_APP_PUBLICK_KEY as string;
    jsencrypt.setPublicKey(publicKey);

    useEffect(() => {
        if (auth.token !== null)
            navigate(RouteUrl.MARKET);
    }, [auth])

    const validateEmail = (value: any) => {
        let error;
        if (!value) {
            error = i18n.t('emailRequire');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = i18n.t('emailInvalid');
        }

        return error;
    }

    const validatePassword = (value: any) => {
        let error;
        if (!value) error = i18n.t('passwordRequire');
        return error;
    }

    const handleSubmit = (values: any) => {
        let md5Pass = Md5.hashStr(values.password);
        let encryptPass = jsencrypt.encrypt(md5Pass) as string;
        let param: LoginAPIRequest = {
            userName: values.email,
            password: encryptPass,
            route: ApiRoute.MOBILE_WEB
        }

        AccountService.login(param).then((msg: any) => {
            console.log(msg);
            let res = msg.data as LoginResponse;
            if (res.result === Result.SUCCESS) {
                let userInfo: AuthState = {
                    loginId: values.email,
                    password: md5Pass,
                    token: res.data.token,
                    factorType: res.data.factorType,
                    login2FAStatus: res.data.login2FAStatus,
                    loggedIn: true
                }
                let encriptText = CryptoJS.AES.encrypt(JSON.stringify(userInfo), System.PRIVATE_KEY).toString();
                localStorage.setItem(LocalStorageKey.USER, encriptText);

                if (values.remember) {
                    let rememberInfo = {
                        loginId: values.email,
                        password: values.password
                    }

                    let encriptInfo = CryptoJS.AES.encrypt(JSON.stringify(rememberInfo), System.PRIVATE_KEY).toString();
                    localStorage.setItem(LocalStorageKey.REMEMBER_INFO, encriptInfo);
                } else localStorage.removeItem(LocalStorageKey.REMEMBER_INFO);

                if (res.data.login2FAStatus === 0) {
                    dispatch(loginSuccess(userInfo));
                    checkWithdrawConfirm();
                } else {
                    let twoFactor: TwoFactorState = {
                        preUrl: RouteUrl.LOGIN,
                        type: res.data.factorType,
                        action: TwoFactorAction.LOGIN,
                        withdrawCcy: "",
                        withdrawAddress: "",
                        withdrawAmount: 0,
                        memo: "",
                        newPassword: ""
                    }
                    dispatch(updateTwoFactor(twoFactor));
                    navigate(RouteUrl.TWO_FACTOR);
                }
            } else {
                Notification.error(i18n.t('loginFail'));
            }
        }, error => {
            Notification.error(i18n.t('loginFail'));
        })
    }

    const checkWithdrawConfirm = () => {
        let confirmCode = localStorage.getItem(LocalStorageKey.WITHDRAW_CONFIRM_CODE);
        let confirmTime = localStorage.getItem(LocalStorageKey.WITHDRAW_CONFIRM_TIME);
        if (confirmCode) {
            let currentTime = new Date().getTime();
            if (currentTime - Number(confirmTime) < System.CHECK_TIME) {
                let url = RouteUrl.WITHDRAW_CONFIRM + "?code=" + confirmCode;
                window.location.href = url;
            }
            else {
                localStorage.removeItem(LocalStorageKey.WITHDRAW_CONFIRM_CODE);
                localStorage.removeItem(LocalStorageKey.WITHDRAW_CONFIRM_TIME);
                window.location.href = RouteUrl.MARKET;
            }
        } else window.location.href = RouteUrl.MARKET;

    }

    return (
        <div className="site page page-login">
            <div className="site-main">
                <div className="container-fluid mt-auto">
                    <div className="row justify-content-center">
                        <div className="col-10 col-xl-6 col-lg-8">
                            <div className="text-center fs-1 mb-4">
                                <img src="logo.png" style={{width: "200px"}}/>
                            </div>
                            
                            <div className="alert alert-warning border-0 small mb-3" role="alert">
                                <a href="https://m.minmaxfx.com" className="text-decoration-none"><span className="text-success"><i className="bi bi-lock-fill"></i> https://</span><span className="text-secondary">m.minmaxfx.com</span></a>
                            </div>
                            <Formik initialValues={{
                                email: rememberLoginId,
                                password: rememberPassword,
                                remember: rememberCheck
                            }}
                                onSubmit={(values) => handleSubmit(values)}>
                                {({ errors, touched }) => (
                                    <div className="form-login mb-5">
                                        <Form>
                                            <div className={`input-group ${errors.email && touched.email ? 'mb-1' : 'mb-3'} `}>
                                                <div className="form-floating">
                                                    <Field type="email" name="email" className="form-control border-end-0" placeholder={t('email')} validate={validateEmail} />
                                                    <label htmlFor="email">{t('email')}</label>
                                                </div>
                                                <span className="input-group-text bg-transparent text-secondary border-start-0"><i className="fa-regular fa-envelope"></i></span>
                                            </div>
                                            {errors.email && touched.email && (
                                                <div className="text-danger mb-3">{errors.email}</div>
                                            )}
                                            <div className={`input-group ${errors.password && touched.password ? 'mb-1' : 'mb-2'} `}>
                                                <div className="form-floating">
                                                    <Field type={hidePassword ? "password" : "text"} name="password" className="form-control border-end-0" placeholder={t('password')} validate={validatePassword} />
                                                    <label htmlFor="password">{t('password')}</label>
                                                </div>
                                                <span className="input-group-text bg-transparent text-secondary border-start-0 cursor_pointer" onClick={() => setHidePassword(!hidePassword)}>
                                                    {hidePassword && <i className="fa-regular fa-eye-slash"></i>}
                                                    {!hidePassword && <i className="fa-regular fa-eye"></i>}
                                                </span>
                                            </div>
                                            {errors.password && touched.password && (
                                                <div className="text-danger mb-3">{errors.password}</div>
                                            )}
                                            <div className="form-check mb-3">
                                                <Field type="checkbox" name="remember" className="form-check-input checkbox-form" /> 
                                                <label className="form-check-label" style={{paddingTop:"1px"}}> {t('rememberMe')} </label>
                                            </div>
                                            <button className="btn btn-primary w-100 mb-2">{t('loginBtn')}</button>
                                            <div className="d-flex justify-content-between align-items-center small">
                                                <span>{t('forgotPassword')}</span>
                                                <a className="text-primary" onClick={() => navigate(RouteUrl.RESET_PASSWORD)}>{t('clickHere')}</a>
                                            </div>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-auto">
                    {APP_ENV === AppEnv.LIVE && <p className="text-center small">{t('noAccount')} <a className="text-primary" onClick={() => navigate(RouteUrl.REGISTER)}>{t('registerNow')}</a></p>}
                    {APP_ENV === AppEnv.DEMO && <p className="text-center small">{t('noAccount')} <a className="text-primary" href={LIVE_URL + "/register"}>{t('registerNow')}</a></p>}
                </div>
            </div>
        </div>
    )
}

export default memo(Login);