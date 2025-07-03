import { memo, useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IBModel, IBType, Result, RouteUrl } from "../models/constant.model";
import { RootState } from "../redux/store";
import * as AccountService from "../services/account.service";
import { updateCustomerProfile } from "../redux/slice/system.slice";
import { AffiliateInfo, CustomerProfileResponse, GetAffiliateResponse } from "../models/response.model";
import { formatNumber, isEmpty } from "../utils";
import ReferalLayer from "../components/row/referal-layer";

const Affiliate = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state: RootState) => state.system.account);

    const [listReferal, setListReferal] = useState<AffiliateInfo[]>([]);
    const [totalTradingVol, setTotalTradingVol] = useState(0);
    const [totalAvgBalance, setTotlAvgBalance] = useState(0);

    useEffect(() => {
        if (!isEmpty(account.loginId)) {
            getAffiliate();
        } else getCustomerProfile();
    }, [account])

    const getCustomerProfile = () => {
        AccountService.getCustomerProfile().then((msg: any) => {
            let res = msg.data as CustomerProfileResponse;
            if (res.result === Result.SUCCESS) {
                dispatch(updateCustomerProfile(res.data));
            }
        })
    }

    const getAffiliate = () => {
        AccountService.getReferals().then((msg: any) => {
            let res = msg.data as GetAffiliateResponse;
            if (res.result === Result.SUCCESS) {
                setListReferal(res.data.affiliates);
                setTotalTradingVol(res.data.totalTradingVol??0);
                setTotlAvgBalance(res.data.totalAvgBalance??0);
            }
        })
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(RouteUrl.ACCOUNT)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="page-title text-primary mb-0">
                            {t('details')}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    const renderBody = () => {
        return (
            <div className="site-main" style={{ paddingTop: "3rem" }}>
                <div className="py-2 pt-3">
                    <div className="container-fluid">
                        <div className="card mb-3">
                            <div className="card-body p-2">
                                <table className="table table-borderless table-sm mb-0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                        <tr>
                                            <td><span className="opacity-50">{t('ibModel')}</span></td>
                                            <td className="text-end">
                                                {account.ibModel === IBModel.SINGLE && <span>{t('singleTier')}</span>}
                                                {account.ibModel === IBModel.MULTI && <span>{t('multiTier')}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="opacity-50">{t('ibType')}</span></td>
                                            <td className="text-end">
                                                {account.ibType === IBType.STANDARD && <span>{t('standardIB')}</span>}
                                                {account.ibType === IBType.LEADER && <span>{t('leaderIB')}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="opacity-50">{t('sponsor1')}</span></td>
                                            <td className="text-end">{account.parentIb}</td>
                                        </tr>
                                        <tr>
                                            <td><span className="opacity-50">{t('dailyIBComm')}</span></td>
                                            <td className="text-end">
                                                {formatNumber(account.ibCommission, 2)} USD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="opacity-50">{t('monthlyIBComm')}</span></td>
                                            <td className="text-end">
                                                {formatNumber(account.monthlyIbCommission, 2)} USD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="opacity-50">{t('monthlyTradingVol')}</span></td>
                                            <td className="text-end">
                                                {formatNumber(totalTradingVol, 2)} {t('lot')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="opacity-50">{t('avgBalance')}</span></td>
                                            <td className="text-end">
                                                {formatNumber(totalAvgBalance, 2)} USD
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <h6 className="text-primary text-uppercase mb-1">
                            <strong>{t('yourReferral')}</strong>
                        </h6>
                        <div className="card bg-transparent border-0  mb-0">
                            <div className="card-body px-0 py-0">
                                <table className="table table-sm table-borderless mb-0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                        <tr>
                                            <td width="70"><span className="opacity-50">{t('layrer')}</span></td>
                                            <td width="80">
                                                <span className="opacity-50">{t('referrals')}</span>

                                            </td>
                                            <td className="text-end">
                                                <span className="opacity-50">{t('commOffer')}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {listReferal && listReferal.map((layer, idx) => {
                            return (
                                <ReferalLayer info={layer} key={idx} />
                            )
                        })}
                        <div className="alert alert-primary">
                            <p className="text-uppercase text-primary mb-0">{t('tips')}</p>
                            <ul className="list-default small mb-0">
                                <li>{t('ibTips1')}</li>
                                <li>{t('ibTips2')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="site page page-setting fixed-header has-header-bottom fixed-footer">
            {renderHeader()}
            {renderBody()}
        </div>
    )
}
export default memo(Affiliate);