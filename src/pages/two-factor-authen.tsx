import { memo, useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { LocalStorageKey, Result, RouteUrl, System, TwoFactorAction, TwoFactorType } from "../models/constant.model";
import { RootState } from "../redux/store";
import { isEmpty } from "../utils";
import OtpInput from 'react18-input-otp';
import * as AccountService from "../services/account.service";
import { BaseResponse } from "../models/response.model";
import * as Notification from "../components/notify";
import { LogoutAPIRequest, NewWithdrawRequest } from "../models/request.model";
import { useWebSocket } from "../socket/useWebsocket";

const INTERVAL_TIME = 60;

const TwoFactorAuthen = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const ws = useWebSocket();

    const [code, setCode] = useState("");
    const [intervalTime, setIntervalTime] = useState(INTERVAL_TIME);

    const twoFactor = useSelector((state: RootState) => state.system.twoFactor);
    const account = useSelector((state: RootState) => state.system.account);

    useEffect(() => {
        if (isEmpty(twoFactor.preUrl)) navigate(RouteUrl.MARKET);
        else {
            if (twoFactor.type === TwoFactorType.OTP) {
                getOTP();
            }
        }
    }, [twoFactor])

    useEffect(() => {
        if (twoFactor.type === TwoFactorType.OTP) {
            setTimeout(() => {
                let timeVal = intervalTime - 1;
                if (timeVal >= 0)
                    setIntervalTime(timeVal);
            }, 1000)
        }
        
    }, [intervalTime])

    useEffect(() => {
        return () => {
            if (twoFactor.action === TwoFactorAction.LOGIN) logout();
        }
    }, [])

    const logout = () => {
        let logoutRequest: LogoutAPIRequest = {};
        AccountService.logout(logoutRequest);
        localStorage.removeItem(LocalStorageKey.USER);
        localStorage.removeItem(LocalStorageKey.REMEMBER_INFO);
        window.location.href = RouteUrl.LOGIN;
    }

    const handleChange = (code: string) => {
        setCode(code);
    }

    useEffect(() => {
        if (code.length >= 6) {
            validateCode();
        }
    }, [code])

    const getOTP = () => {
        let param = {
            type: 1
        }
        AccountService.getOTP(param).then((msg: any) => {
            let res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS)
                Notification.success(i18n.t('otpAlert'));
        })
    }

    const resendOTP = () => {
        getOTP();
        setIntervalTime(INTERVAL_TIME);
    }

    const validateCode = () => {
        let param = {
            type: twoFactor.type,
            token: code
        }

        AccountService.validateOTP(param).then((msg: any) => {
            let res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                switch(twoFactor.action) {
                    case TwoFactorAction.LOGIN: 
                        doLogin();
                        break;
                    case TwoFactorAction.WITHDRAW:
                        doWithdraw();
                        break;
                    case TwoFactorAction.UPDATE_PASSWORD:
                        doUpdatePassword();
                        break;
                }
            } else {
                let msg = i18n.t("optInvalid");
                if (twoFactor.type === TwoFactorType.TwoFA)
                    msg = i18n.t("2faInvalid");

                Notification.error(msg);
            }
        })
    }

    const doUpdatePassword = () => {
        let param = {
            loginId: account.loginId,
            password: twoFactor.newPassword
        }
        AccountService.updateProfile(param).then((msg: any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t('updatePasswordSuccess'));
                doLogout();
            } else {
                if (res.msgCode !== null && res.msgCode === 102)
                    Notification.error(i18n.t('passwordInvalid'));
                else Notification.error(i18n.t('updatePasswordFail'));
                navigate(RouteUrl.SETTING);
            }
        })
    }

    const doLogout = () => {
        ws.close();
        let logoutRequest: LogoutAPIRequest = {};
        AccountService.logout(logoutRequest);
        localStorage.removeItem(LocalStorageKey.USER);
        localStorage.removeItem(LocalStorageKey.REMEMBER_INFO);
        window.location.href = RouteUrl.LOGIN;
    }

    const doLogin = () => {
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

    const doWithdraw = () => {
        let param: NewWithdrawRequest = {
            ccy: twoFactor.withdrawCcy,
            toAddress: twoFactor.withdrawAddress,
            amount: twoFactor.withdrawAmount,
            memo: twoFactor.memo
        }
        AccountService.newWithdraw(param).then((msg: any) => {
            let res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t('withdrawRequestSuccess'));
            } else {
                if (res.msgCode)
                    Notification.error(i18n.t(String(res.msgCode)));
                else Notification.error(i18n.t('withdrawRequestFail'));
            }
            navigate(RouteUrl.ACCOUNT);
        })
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(twoFactor.preUrl)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="page-title text-primary mb-0">
                            {twoFactor.type === TwoFactorType.OTP ? t('optAuthen') : t('twoFactorAuthen')}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    const renderBody = () => {
        return (
            <div className="site-main" style={{ "paddingTop": "3rem" }}>
                <div className="py-2 pt-3">
                    <div className="container-fluid text-center" >
                        <span>{twoFactor.type === TwoFactorType.OTP ? t('otpToken') : t('2faToken')}</span>
                        <OtpInput
                            value={code}
                            onChange={handleChange}
                            numInputs={6}
                            separator={<span style={{ width: "8px" }}></span>}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            inputStyle={{
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                borderRadius: "6px",
                                width: "45px",
                                height: "45px",
                                fontSize: "16px",
                                color: "#000",
                                fontWeight: "400",
                                caretColor: "blue",
                                marginTop: "10px"
                            }}
                            focusStyle={{
                                border: "1px solid #CFD3DB",
                                outline: "none"
                            }}
                            containerStyle={{
                                justifyContent: "center"
                            }}
                        />
                        {twoFactor.type === TwoFactorType.OTP && 
                            <div className="alert alert-primary text-start pt-2 pb-2 mt-3">
                                <ul className="list-default small mb-0">
                                    <li><span>{t('otpNote1')}</span><span className="text-danger"> {intervalTime} </span><span>{t('otpNote3')}</span></li>
                                    <li>{t('otpNote2')}</li>
                                </ul>
                            </div>
                        }
                        <div className="d-flex justify-content-center mt-3">
                            {twoFactor.type === TwoFactorType.OTP && <button className="btn bg-white btn-outline-primary btn-hover-none" style={{width:"110px"}} onClick={resendOTP}>{t('resendOTP')}</button>}
                            <button className="btn bg-white btn-outline-primary btn-hover-none mx-2" style={{width:"110px"}} onClick={() => setCode("")}>{t('clearBtn')}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            {renderHeader()}
            {renderBody()}
        </Layout>
    )
}

export default memo(TwoFactorAuthen)