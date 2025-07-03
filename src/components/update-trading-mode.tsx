import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Result, TradingMode } from "../models/constant.model";
import { RootState } from "../redux/store";
import * as Notification from "../components/notify";
import * as AccountService from "../services/account.service";
import { BaseResponse } from "../models/response.model";

const UpdateTradingMode = () => {
    const { t, i18n } = useTranslation();
    const [mode, setMode] = useState(TradingMode.NETTING);
    const account = useSelector((state: RootState) => state.system.account);

    useEffect(() => {
        console.log(account)
        if (account) {
            setMode(account.positionMode);
        }
    }, [account])

    const changeMode = (e: any) => {
        setMode(e.target.value);
    }

    const doUpdate = () => {
        let param = {
            positionMode: +mode,
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
                <h6 className="text-primary text-uppercase mb-2"><strong>{t('tradingMode')}</strong></h6>
                <div className="mb-3">
                    <select className="form-select" value={mode} onChange={changeMode}>
                        <option value={TradingMode.NETTING}>{t('netting')}</option>
                        <option value={TradingMode.HEDGING}>{t('hedging')}</option>
                    </select>
                </div>

                <button className="btn btn-primary w-100 mb-0" onClick={doUpdate}>{t('updateBtn')}</button>
            </div>
        </div>
    )
}

export default memo(UpdateTradingMode);