import { memo, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { CashflowStatus } from "../../models/constant.model";
import { CashflowInfo } from "../../models/response.model";
import { formatNumber,formatDate, isNull } from "../../utils";

interface Props {
    cashflow: CashflowInfo
}
const Deposit = (props: Props) => {
    const { t,i18n } = useTranslation();
    const { cashflow } = props;

    const getNetwork = (ccy: string) => {
        let network = "";
        if (ccy === "USDT1") network = i18n.t("ERC20");
        if (ccy === "USDT2") network = i18n.t("BEP20");
        if (ccy === "USDT3") network = i18n.t("TRC20");
        return network;
    }

    return (
        <div className="card card-position mb-2">
            <button className="p-2 border-0 bg-transparent w-100 text-start" data-bs-toggle="collapse" data-bs-target={`#deposit-${cashflow.id}`} role="button" aria-expanded="true" aria-controls="">
                <div className="d-flex justify-content-between">
                    <div style={{width:"28%"}}>
                        <span className="text-uppercase text-success">{t('deposit')}</span>
                    </div>
                    <div style={{width:"47%"}}>
                        <div>
                            <span className="text-dark">{formatNumber(cashflow.amount,2)}</span><span className="text-secondary"> USDT</span>
                        </div>
                        <div>
                            <span className="text-secondary">{formatDate(cashflow.transactionTime)}</span>
                        </div>
                    </div>
                    <div style={{width:"25%"}} className={`text-end ${cashflow.status === CashflowStatus.PROCESSING ? 'text-warning' : 'text-success'}  `}>
                        {cashflow.status === CashflowStatus.PROCESSING ? t('processing') : t('completed')}
                    </div>
                </div>
            </button>
            <div id={`deposit-${cashflow.id}`} className="card-body border-top bg-primary-light collapse p-2">
                <table className="table table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td className="text-secondary p-0">{t('network')}</td>
                            <td className="text-end p-0 text-dark">
                                {getNetwork(cashflow.ccy)}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">ID</td>
                            <td className="text-end p-0 text-dark">
                                {isNull(cashflow.txUrl) && <span>{cashflow.id}</span>}
                                {!isNull(cashflow.txUrl) && <a className="text-decoration-none" target={"_blank"} href={cashflow.txUrl}>{cashflow.id}</a>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default memo(Deposit);