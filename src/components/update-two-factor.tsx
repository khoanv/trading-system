import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Result, TwoFactorType } from "../models/constant.model";
import { RootState } from "../redux/store";
import { hanldeCoppyAddress, isEmpty } from "../utils";
import * as Notification from "../components/notify";
import * as AccountService from "../services/account.service";
import { BaseResponse } from "../models/response.model";

const UdpdateTwoFactor = () => {
    const { t,i18n } = useTranslation();

    const account = useSelector((state: RootState) => state.system.account);
    const [twoFactorType, setTwoFactorType] = useState<number>(TwoFactorType.OTP);
    const [loginCheck, setLoginCheck] = useState(false);
    const [updatePasswordCheck, setUpdatePasswordCheck] = useState(false);
    const [withdrawCheck, setWithdrawCheck] = useState(false);

    useEffect(() => {
        if (!isEmpty(account.twoFaOperation)) {
            setTwoFactorType(account.twoFaType);
            let twoFaOperation = JSON.parse(account.twoFaOperation);
            if (twoFaOperation !== null) {
                setLoginCheck(twoFaOperation.login === 1 ? true : false);
                setUpdatePasswordCheck(twoFaOperation.updatePassword === 1 ? true : false);
                setWithdrawCheck(twoFaOperation.withdraw === 1 ? true : false);
            }
        }
    }, [account])

    const changeFactorType = (e: any) => {
        setTwoFactorType(Number(e.target.value));
    }

    const doUpdate = () => {
        let twoFaOperation = JSON.parse(account.twoFaOperation);
        let twoFactorSetting = {
            login: loginCheck ? 1 : 0,
            updatePassword: updatePasswordCheck ? 1 : 0,
            withdraw: withdrawCheck ? 1 : 0,
            securityChange: twoFaOperation.securityChange
        }

        let param = {
            twoFaType: twoFactorType,
            twoFaOperation: JSON.stringify(twoFactorSetting) + "",
            loginId: account.loginId
        }

        AccountService.updateProfile(param).then((msg: any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS)
                Notification.success(i18n.t("updateSettingSuccess"));
            else Notification.error(i18n.t("updateSettingFail"));
        })
    }

    return (
        <div className="py-2 mt-2">
            <div className="container-fluid">
                <h6 className="text-primary text-uppercase mb-3"><strong>{t('twoFactor')}</strong></h6>
                <div className="row gx-3 mb-2">
                    <div className="col-5">
                        <div className="text-secondary">{t('type')}</div>
                    </div>
                    <div className="col-7 text-end" onChange={changeFactorType}>
                        <div className="form-check form-check-inline size-b me-4">
                            <input className="form-check-input" type="radio" value={TwoFactorType.TwoFA} name="type" id="type2FA"
                                checked={twoFactorType === TwoFactorType.TwoFA} onChange={() =>{}}/>
                            <label className="form-check-label" htmlFor="type2FA">
                                2FA
                            </label>
                        </div>
                        <div className="form-check form-check-inline size-b" style={{marginRight: "0.2rem"}}>
                            <input className="form-check-input" type="radio" value={TwoFactorType.OTP} name="type" id="OTP"
                                checked={twoFactorType === TwoFactorType.OTP} onChange={() =>{}}/>
                            <label className="form-check-label" htmlFor="OTP">
                                OTP
                            </label>
                        </div>
                    </div>
                </div>
                {twoFactorType === TwoFactorType.TwoFA && <div className="row gx-3">
                    <div className="col-5">
                        <p className="mt-1"><img src={account.qrLink} className="w-100 border" alt="" /></p>
                    </div>
                    <div className="col-7">
                        <p className="mb-0">{t('googleAuthenCode')} </p>
                        <strong className="word-break">{account.qrSecret}</strong>
                        <a onClick={() => hanldeCoppyAddress(account.qrSecret)} className="text-secondary ms-2 me-1"><i className="fa-solid fa-copy" style={{ fontSize: "18px" }}></i></a>
                        <p className="mb-0 mt-2">{t('backupCode')}</p>
                        <p>{t('twoFactorNote')}</p>
                    </div>
                </div>}

                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="text-secondary">{t('login')}</div>
                    <div>
                        <div className="form-check form-switch size-b">
                            <input className="form-check-input ms-0" type="checkbox" role="switch" id="loginSwitch" 
                                checked={loginCheck} onChange={() => setLoginCheck(!loginCheck)}/>
                            <label className="form-check-label" htmlFor="loginSwitch"></label>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="text-secondary">{t('passwordChange')}</div>
                    <div>
                        <div className="form-check form-switch size-b">
                            <input className="form-check-input ms-0" type="checkbox" role="switch" id="updatePasswordSwitch" 
                                checked={updatePasswordCheck} onChange={() => setUpdatePasswordCheck(!updatePasswordCheck)}/>
                            <label className="form-check-label" htmlFor="updatePasswordSwitch"></label>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="text-secondary">{t('withdrawRequest')}</div>
                    <div>
                        <div className="form-check form-switch size-b">
                            <input className="form-check-input ms-0" type="checkbox" role="switch" id="withdrawSwitch" 
                                checked={withdrawCheck} onChange={() => setWithdrawCheck(!withdrawCheck)}/>
                            <label className="form-check-label" htmlFor="withdrawSwitch"></label>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary w-100 mb-0" onClick={doUpdate}>{t('updateBtn')}</button>
            </div>

        </div>
    )
}
export default memo(UdpdateTwoFactor);