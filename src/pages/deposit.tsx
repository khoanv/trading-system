import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppEnv, APP_ENV, Result, RouteUrl } from "../models/constant.model";
import { RootState } from "../redux/store";
import { updateCustomerProfile } from "../redux/slice/system.slice";
import QRCode from 'qrcode.react';
import { formatNumber, isEmpty, hanldeCoppyAddress } from "../utils";
import * as AccountService from "../services/account.service";
import { CustomerProfileResponse } from "../models/response.model";
import Layout from "../components/layout";

const Deposit = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state: RootState) => state.system.account);

    const [depositCcy, setDepositCcy] = useState("USDT3");
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (APP_ENV === AppEnv.DEMO) 
            navigate(RouteUrl.ACCOUNT);
    }, [])

    useEffect(() => {
        if (!isEmpty(account.loginId)){
            let wallet = account.wallet[depositCcy];
            if (wallet) {
                setAddress(wallet.cryptoAddress);
                let availBalance = Number(wallet.balance) - wallet.reserve;
                setBalance(availBalance);
            }
            
        } else {
            getCustomerProfile();
        }
    }, [account, depositCcy])

    const getCustomerProfile = () => {
        AccountService.getCustomerProfile().then((msg: any) => {
            let res = msg.data as CustomerProfileResponse;
            if (res.result === Result.SUCCESS) {
                dispatch(updateCustomerProfile(res.data));
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
                            {t('deposit')}
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
                                <div className="row gx-3 mb-1">
                                    <div className="col-4">
                                        <p className="mt-1 mb-0">
                                            <QRCode
                                                id='qrcode'
                                                value={address}
                                                size={120}
                                                level={'H'}
                                                includeMargin={true}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-8">
                                        <p className="opacity-50 mb-0 mt-2">{t('depositAddress')}</p>
                                        <div className="d-flex justify-content-between">
                                            <div className="word-break fw-bold">{address}</div>
                                            <a onClick={() => hanldeCoppyAddress(address)} className="text-secondary ms-2 me-1"><i className="fa-solid fa-copy" style={{fontSize:"18px"}}></i></a>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-borderless table-sm mb-0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                        <tr>
                                            <td><span className="opacity-50">{t('cryptoCcy')}</span></td>
                                            <td className="text-end">USDT</td>
                                        </tr>
                                        <tr>
                                            <td className="pt-2"><span className="opacity-50">{t('network')}</span></td>
                                            <td className="text-end">
                                                <select className="form-select" value={depositCcy} onChange={(e) => setDepositCcy(e.target.value)}>
                                                    <option value="USDT3">{t('TRC20')}</option>
                                                    <option value="USDT1">{t('ERC20')}</option>
                                                    <option value="USDT2">{t('BEP20')}</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="opacity-50">{t('balance')}</span></td>
                                            <td className="text-end">{formatNumber(balance,2)} <span className="opacity-50">USDT</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="alert alert-primary">
                            <p className="text-uppercase text-primary mb-0">{t('tips')}</p>
                            <ul className="list-default small mb-0">
                                <li>{t('depositTips1')}</li>
                                <li>{t('depositTips2')}</li>
                            </ul>
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
export default memo(Deposit);