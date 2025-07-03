import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Result, TwoFactorType } from "../models/constant.model";
import { RootState } from "../redux/store";
import { isEmpty } from "../utils";
import * as Notification from "../components/notify";
import * as AccountService from "../services/account.service";
import { BaseResponse } from "../models/response.model";
import { NumericFormat } from "react-number-format";

const UpdateAlert = () => {
    const { t, i18n } = useTranslation();

    const [antiPhishing, setAntiPhishing] = useState("");
    const [antiPhishingError, setAntiPhishingError] = useState("");
    const [loginCheck, setLoginCheck] = useState(false);
    const [depositCheck, setDepositCheck] = useState(false);
    const [withdrawCheck, setWitdrawCheck] = useState(false);

    const account = useSelector((state: RootState) => state.system.account);

    useEffect(() => {
        if (!isEmpty(account.commonSetting)) {
            let commonSetting = JSON.parse(account.commonSetting);
            if (commonSetting.antiPhishing)
                setAntiPhishing(commonSetting.antiPhishing)
        }

        if (!isEmpty(account.emailAlert)) {
            let emailAlert = JSON.parse(account.emailAlert);
            setLoginCheck(emailAlert.login === 1 ? true : false);
            setDepositCheck(emailAlert.deposit === 1 ? true : false);
            setWitdrawCheck(emailAlert.withdraw === 1 ? true : false);
        }
    }, [account])

    const doUpdate = () => {
        if (isEmpty(antiPhishingError)) {
            let emailAlert = JSON.parse(account.emailAlert);

            let emailAlertConfig = {
                login: loginCheck ? 1 : 0,
                trading: emailAlert.trading,
                deposit: depositCheck ? 1 : 0,
                withdraw: withdrawCheck ? 1 : 0,
                ibRef: emailAlert.ibRef,
                news: emailAlert.news
            }

            let commonSetting = JSON.parse(account.commonSetting);
            if (antiPhishing) commonSetting.antiPhishing = antiPhishing;

            let param = {
                emailAlert: JSON.stringify(emailAlertConfig) + "",
                commonSetting: JSON.stringify(commonSetting) + "",
                loginId: account.loginId
            }

            AccountService.updateProfile(param).then((msg: any) => {
                const res = msg.data as BaseResponse;
                if (res.result === Result.SUCCESS)
                    Notification.success(i18n.t("updateSettingSuccess"));
                else Notification.error(i18n.t("updateSettingFail"));
            })
        }
    }

    return (
        <div className="py-2 mt-2">
            <div className="container-fluid">
                <h6 className="text-primary text-uppercase mb-2"><strong>{t('emailAlert')}</strong></h6>
                <div className="d-flex justify-content-between mb-0 align-items-center">
                    <div className="text-secondary">{t('antiPhishingCode')}</div>
                </div>
                <div className="input-group mb-1">
                    <NumericFormat value={antiPhishing} thousandSeparator={false} allowNegative={false}
                        className="form-control" name="antiPhishing"
                        onValueChange={(values: any) => {
                            const { floatValue,value } = values;
                            setAntiPhishing(floatValue);
                            if (!isEmpty(value) && value.length !== 6)
                                setAntiPhishingError(i18n.t('antiPhishingCodeError') as string);
                            else setAntiPhishingError("");
                        }}
                    />
                </div>
                {!isEmpty(antiPhishingError) && <span className="text-danger">{antiPhishingError}</span>}

                <div className="d-flex justify-content-between align-items-center mb-2 mt-3">
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
                    <div className="text-secondary">{t('deposit')}</div>
                    <div>
                        <div className="form-check form-switch size-b">
                            <input className="form-check-input ms-0" type="checkbox" role="switch" id="loginSwitch" 
                                checked={depositCheck} onChange={() => setDepositCheck(!depositCheck)}/>
                            <label className="form-check-label" htmlFor="loginSwitch"></label>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="text-secondary">{t('withdraw')}</div>
                    <div>
                        <div className="form-check form-switch size-b">
                            <input className="form-check-input ms-0" type="checkbox" role="switch" id="loginSwitch" 
                                checked={withdrawCheck} onChange={() => setWitdrawCheck(!withdrawCheck)}/>
                            <label className="form-check-label" htmlFor="loginSwitch"></label>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary w-100 mb-0" onClick={doUpdate}>{t('updateBtn')}</button>
            </div>
        </div>
    )
}
export default memo(UpdateAlert);