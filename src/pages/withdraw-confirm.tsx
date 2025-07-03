import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { CashflowStatus, LocalStorageKey, Page, Result, RouteUrl } from "../models/constant.model";
import { formatDate, formatNumber, isNull, hanldeCoppyAddress } from "../utils";
import * as AccountService from "../services/account.service";
import { BaseResponse, WithdrawDetailReponse, WithdrawInfo } from "../models/response.model";
import * as Notification from "../components/notify";

const WithdrawConfirmation = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [withdrawInfo, setWithdrawInfo] = useState<WithdrawInfo>();
    const [code, setCode] = useState("");

    useEffect(() => {
        // localStorage.removeItem(LocalStorageKey.WITHDRAW_CONFIRM_CODE);
        // localStorage.removeItem(LocalStorageKey.WITHDRAW_CONFIRM_TIME);
        // let user = localStorage.getItem(LocalStorageKey.USER);
        // if (searchParams) {
        //     let code = searchParams.get("code");
        //     if (code) {
        //         let confirmTime = new Date().getTime();
        //         localStorage.setItem(LocalStorageKey.WITHDRAW_CONFIRM_CODE, code);
        //         localStorage.setItem(LocalStorageKey.WITHDRAW_CONFIRM_TIME, String(confirmTime));

        //         if (isNull(user)) navigate(RouteUrl.LOGIN);
        //         else {
        //             setCode(code);
        //             getWithdrawInfo(code);
        //         } 
        //     } else {
        //         if (isNull(user)) navigate(RouteUrl.LOGIN);
        //         else navigate(RouteUrl.ACCOUNT);
        //     }
        // }

        if (searchParams) {
            let code = searchParams.get("code");
            if (code) {
                setCode(code);
                doWithdraw(code);
            }
        }
    }, [searchParams])

    const doWithdraw = (code: string) => {
        AccountService.withdrawEmail(code).then((msg:any) => {
            let res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t('withdrawConfirmSuccess'));
                navigate(RouteUrl.LOGIN);
            } else {
                if (res.msgCode) Notification.error(i18n.t(String(res.msgCode)));
                else Notification.error(i18n.t("withdrawConfirmFail"));

                navigate(RouteUrl.LOGIN);
            }
        })
    }

    const getWithdrawInfo = (code: string) => {
        AccountService.getWithdrawInfo({ token: code }).then((msg: any) => {
            let res = msg.data as WithdrawDetailReponse;
            if (res.result === Result.SUCCESS) {
                setWithdrawInfo(res.data);
            } else {
                if (res.msgCode) Notification.error(i18n.t(String(res.msgCode)));
                else Notification.error(i18n.t("withdrawConfirmFail"));

                navigate(RouteUrl.ACCOUNT);
            }
        })
    }

    const getNetwork = (ccy: string) => {
        let network = "";
        if (ccy === "USDT1") network = i18n.t("ERC20");
        if (ccy === "USDT2") network = i18n.t("BEP20");
        if (ccy === "USDT3") network = i18n.t("TRC20");
        return network;
    }

    const confirmWithdraw = () => {
        let param = {
            token: code,
            status: CashflowStatus.VERIFY_STEP1
        }

        AccountService.confirmWithdraw(param).then((msg: any) => {
            let res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t('withdrawConfirmSuccess'))
                localStorage.removeItem(LocalStorageKey.WITHDRAW_CONFIRM_CODE);
                localStorage.removeItem(LocalStorageKey.WITHDRAW_CONFIRM_TIME);

                navigate(RouteUrl.ACCOUNT);
            } else Notification.error(i18n.t('withdrawConfirmFail'));
        })
    }

    const cancelWithdraw = () => {
        let param = {
            token: code,
            status: CashflowStatus.CANCEL
        }

        AccountService.confirmWithdraw(param).then((msg: any) => {
            let res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t('withdrawCancelSuccess'))
                localStorage.removeItem(LocalStorageKey.WITHDRAW_CONFIRM_CODE);
                localStorage.removeItem(LocalStorageKey.WITHDRAW_CONFIRM_TIME);

                navigate(RouteUrl.ACCOUNT);
            } else Notification.error(i18n.t('withdrawCancelFail'));
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
                            {t('withdrawConfirm')}
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
                        {/* <p className="mb-1">{t('withdrawConfirmNote')}</p>
                        {withdrawInfo &&
                            <>
                                <div className="card mb-3">
                                    <div className="card-body p-2">
                                        <table className="table table-borderless table-sm mb-0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td className="px-0"><span className="opacity-50">{t('serialNo')}</span></td>
                                                    <td className="text-end">{withdrawInfo.id}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-0"><span className="opacity-50">CCY</span></td>
                                                    <td className="text-end">USDT</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-0"><span className="opacity-50">{t('network')}</span></td>
                                                    <td className="text-end">{getNetwork(withdrawInfo.ccy)}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-0"><span className="opacity-50">{t('amount')}</span></td>
                                                    <td className="text-end">{formatNumber(withdrawInfo.amount, 2)}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-0"><span className="opacity-50">{t('estimateFee')}</span></td>
                                                    <td className="text-end">{formatNumber(withdrawInfo.fee, 2)}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-0"><span className="opacity-50">{t('memo')}</span></td>
                                                    <td className="text-end">{withdrawInfo.memo}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-0" style={{ minWidth: "110px" }}><span className="opacity-50">{t('receiver')}</span></td>
                                                    <td>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="word-break">{withdrawInfo.toAddress}</div>
                                                            <a onClick={() => hanldeCoppyAddress(withdrawInfo.toAddress)} className="text-secondary ms-2 me-1"><i className="fa-solid fa-copy" style={{ fontSize: "18px" }}></i></a>
                                                        </div>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-0"><span className="opacity-50">{t('requestDate')}</span></td>
                                                    <td className="text-end">{formatDate(withdrawInfo.requestDate)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn bg-white btn-outline-primary mx-2" style={{width:"100px"}} onClick={cancelWithdraw}>{t('cancelBtn')}</button>
                                    <button className="btn btn-primary mx-2" style={{width:"100px"}} onClick={confirmWithdraw}>{t('confirmBtn')}</button>
                                </div>
                            </>
                        } */}

                    </div>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            {renderHeader()}
            {renderBody()}

            <Footer page={Page.WITHDRAW_CONFIRM} />
        </Layout>
    )
}
export default memo(WithdrawConfirmation)