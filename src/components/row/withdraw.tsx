import { memo, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { CashflowStatus, Result } from "../../models/constant.model";
import { BaseResponse, CashflowInfo } from "../../models/response.model";
import { formatDate, formatNumber, isNull } from "../../utils";
import * as AccountService from "../../services/account.service";
import * as Notification from "../../components/notify";

interface Props {
    cashflow: CashflowInfo,
    reloadWithdraws: () => void
}
const Withdraw = (props: Props) => {
    const { t,i18n } = useTranslation();
    const { cashflow, reloadWithdraws } = props;

    const [status, setStatus] = useState(cashflow.status);

    const getNetwork = (ccy: string) => {
        let network = "";
        if (ccy === "USDT1") network = i18n.t("ERC20");
        if (ccy === "USDT2") network = i18n.t("BEP20");
        if (ccy === "USDT3") network = i18n.t("TRC20");
        return network;
    }

    const processStatus1 = useMemo(() => {
        let statusCss = "text-success";
        let statusValue = i18n.t("completed");
        if (cashflow) {
            let status = cashflow.status;
            if (status === CashflowStatus.REQUESTING) {
                statusCss = "text-dark";
                statusValue = i18n.t("requesting");
            }

            if (status === CashflowStatus.REQUESTED || status === CashflowStatus.VERIFY_STEP1 || status === CashflowStatus.VERIFY_STEP2) {
                statusValue = i18n.t("requested");
                statusCss = "text-primary";
            }

            if (status === CashflowStatus.CHECKED || status === CashflowStatus.CONFIRMED || status === CashflowStatus.SIGNED_PARTIAL || status === CashflowStatus.PROCESSING) {
                statusValue = i18n.t("processing");
                statusCss = "text-warning";
            }

            if (status === CashflowStatus.COMPLETED) {
                statusCss = "text-success";
                statusValue = i18n.t("completed");
            }

            if (status === CashflowStatus.CANCEL) {
                statusCss = "text-danger";
                statusValue = i18n.t("cancel");
            }

            if (status === CashflowStatus.REJECTED) {
                statusCss = "text-danger";
                statusValue = i18n.t("rejected");
            }
        }
        return [statusCss,statusValue]
    }, [cashflow])

    const processStatus = useMemo(() => {
        let statusCss = "text-success";
        let statusValue = i18n.t("completed");
        if (status === CashflowStatus.REQUESTING) {
            statusCss = "text-dark";
            statusValue = i18n.t("requesting");
        }

        if (status === CashflowStatus.REQUESTED || status === CashflowStatus.VERIFY_STEP1 || status === CashflowStatus.VERIFY_STEP2) {
            statusValue = i18n.t("requested");
            statusCss = "text-primary";
        }

        if (status === CashflowStatus.CHECKED || status === CashflowStatus.CONFIRMED || status === CashflowStatus.SIGNED_PARTIAL || status === CashflowStatus.PROCESSING) {
            statusValue = i18n.t("processing");
            statusCss = "text-warning";
        }

        if (status === CashflowStatus.COMPLETED) {
            statusCss = "text-success";
            statusValue = i18n.t("completed");
        }

        if (status === CashflowStatus.CANCEL) {
            statusCss = "text-danger";
            statusValue = i18n.t("cancel");
        }

        if (status === CashflowStatus.REJECTED) {
            statusCss = "text-danger";
            statusValue = i18n.t("rejected");
        }
        return [statusCss,statusValue]
    }, [status])

    const cancelWithdraw = () => {
        let param = {
            withdrawId: cashflow.id,
            status: CashflowStatus.CANCEL
        }

        AccountService.updateWithdraw(param).then((msg: any) => {
            let res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t("withdrawCancelSuccess"));
                setStatus(CashflowStatus.CANCEL);
            } else Notification.error(i18n.t("withdrawCancelFail"));
        })
    }

    return (
        <div className="card card-position mb-2">
            <button className="p-2 border-0 bg-transparent w-100 text-start" data-bs-toggle="collapse" data-bs-target={`#deposit-${cashflow.id}`} role="button" aria-expanded="true" aria-controls="">
                <div className="d-flex justify-content-between">
                    <div style={{width:"28%"}}>
                        <span className="text-uppercase text-danger">{t('withdraw')}</span>
                    </div>
                    <div style={{width:"47%"}}>
                        <div>
                            <span className="text-dark">{formatNumber(cashflow.amount,2)}</span><span className="text-secondary"> USDT</span>
                        </div>
                        <div>
                            <span className="text-secondary">{formatDate(cashflow.transactionTime)}</span>
                        </div>
                    </div>
                    <div style={{width:"25%"}} className={`text-end ${processStatus[0]}`}>
                        {processStatus[1]}
                    </div>
                </div>
            </button>
            <div id={`deposit-${cashflow.id}`} className="card-body border-top bg-primary-light collapse p-2">
                <table className="table table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                    <tbody>
                    <tr>
                            <td className="text-secondary p-0">{t('fee')}</td>
                            <td className="text-end p-0 text-dark">
                                {formatNumber(cashflow.fee,2)}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">{t('network')}</td>
                            <td className="text-end p-0 text-dark">
                                {getNetwork(cashflow.ccy)}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">{t('receiver')}</td>
                            <td className="text-end p-0 text-dark word-break">
                                {cashflow.receiver}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">ID</td>
                            <td className="text-end p-0 text-dark">
                                {isNull(cashflow.txUrl) && <span>{cashflow.id}</span>}
                                {!isNull(cashflow.txUrl) && <a className="text-decoration-none" target={"_blank"} href={cashflow.txUrl}>{cashflow.id}</a>}
                            </td>
                        </tr>
                        {status === CashflowStatus.REQUESTING && <tr>
                            <td className="p-0">
                            </td>
                            <td className="text-end p-0">
                                <button className="btn btn-sm btn-danger rounded" onClick={cancelWithdraw}>{t('cancelBtn')}</button>
                            </td>
                        </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default memo(Withdraw);