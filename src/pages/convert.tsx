import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { Result, RouteUrl, WebsocketState } from "../models/constant.model";
import { RootState } from "../redux/store";
import { updateCustomerProfile, updatePositions, updateOpenOrders } from "../redux/slice/system.slice";
import { isEmpty, formatNumber, isNull, roundDown, getPositions, getOpenOrders, exchangeCurrencyRequest } from "../utils";
import { NumericFormat } from "react-number-format";
import * as AccountService from "../services/account.service";
import { CustomerProfileResponse } from "../models/response.model";
import { useWebSocket } from "../socket/useWebsocket";

const ConvertBalance = () => {
    const { t, i18n } = useTranslation();
    const ws = useWebSocket();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const account = useSelector((state: RootState) => state.system.account);
    const positions = useSelector((state: RootState) => state.system.positions);
    const openOrders = useSelector((state: RootState) => state.system.openOrders);

    const [fromCcy, setFromCcy] = useState("USD");
    const [toCcy, setToCcy] = useState("USDT3");
    const [amount, setAmount] = useState<number>();
    const [balance, setBalance] = useState(0);
    const [available, setAvailable] = useState(0);
    const [msgErrorAmount, setMsgErrorAmount] = useState("");

    useEffect(() => {
        return () => {
            dispatch(updatePositions([]));
            dispatch(updateOpenOrders([]));
        }
    }, [])

    useEffect(() => {
        if (isEmpty(account.loginId)) {
            getCustomerProfile();
            if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
                getPositions(ws);
                getOpenOrders(ws);
            }
        }
        else {
            if (positions !== null && positions.length === 0) {
                if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
                    getPositions(ws);
                    getOpenOrders(ws);
                }
            }

            let wallet = account.wallet[fromCcy];
            if (wallet) {
                let availBalance = Number(wallet.balance) - wallet.reserve;
                setBalance(availBalance);

                if (fromCcy === "USD") {
                    if((positions !== null && positions.length > 0) || (openOrders !== null && openOrders.length > 0)){
                        setAvailable(roundDown(availBalance * 0.8, 2));
                    } else setAvailable(availBalance)
                }else setAvailable(availBalance)
            }
        }
    }, [ws,account,fromCcy,positions])

    const getCustomerProfile = () => {
        AccountService.getCustomerProfile().then((msg: any) => {
            let res = msg.data as CustomerProfileResponse;
            if (res.result === Result.SUCCESS) {
                dispatch(updateCustomerProfile(res.data));
            }
        })
    }

    const changeAmount = (values: any) => {
        const { floatValue } = values;
        setAmount(floatValue);
        let msg = "";
        if (isNull(floatValue)) {
            msg = i18n.t("exchangeAmountInvalid");
        } else {
            if (floatValue > available) msg = i18n.t("202");
        }
        setMsgErrorAmount(msg);
    }

    const changeFromCcy = (e: any) => {
        let value = e.target.value;
        setFromCcy(value);
        if (value === "USD") setToCcy("USDT3");
        else setToCcy("USD");

        setAmount(0);
        setMsgErrorAmount("");
    }

    const changeToCcy = (e: any) => {
        let value = e.target.value;
        setToCcy(value);
        if (value === "USD") setFromCcy("USDT3");
        else setFromCcy("USD");

        setAmount(0);
        setMsgErrorAmount("");
    }

    const onMax = () => {
        setAmount(available);
        setMsgErrorAmount("");
    }

    const doConvert = () => {
        if (!isNull(amount)) {
            if (isEmpty(msgErrorAmount)) {
                exchangeCurrencyRequest(ws, fromCcy,toCcy,String(amount),4);
            }
        } else {
            setMsgErrorAmount(i18n.t("exchangeAmountInvalid") as string)
        }
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(RouteUrl.WITHDRAW)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="page-title text-primary mb-0">
                            {t('balanceConvert')}
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
                    <div className="container-fluid" >
                        <div className="card mb-3">
                            <div className="card-body p-2">
                                <table className="table table-borderless table-sm mb-0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                        <tr>
                                            <td className="pt-2" style={{ width: "20%" }}><span className="opacity-50">{t('from')}</span></td>
                                            <td className="text-end">
                                                <select className="form-select" value={fromCcy} onChange={changeFromCcy}>
                                                    <option value="USD">USD</option>
                                                    <option value="USDT3">USDT - {t('TRC20')}</option>
                                                    <option value="USDT1">USDT - {t('ERC20')}</option>
                                                    <option value="USDT2">USDT - {t('BEP20')}</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pt-2" style={{ width: "20%" }}><span className="opacity-50">{t('to')}</span></td>
                                            <td className="text-end">
                                                <select className="form-select" value={toCcy} onChange={changeToCcy}>
                                                    <option value="USD">USD</option>
                                                    <option value="USDT3">USDT - {t('TRC20')}</option>
                                                    <option value="USDT1">USDT - {t('ERC20')}</option>
                                                    <option value="USDT2">USDT - {t('BEP20')}</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <div className="d-flex justify-content-between mb-1 align-items-center">
                                                    <div className="opacity-50">{t('amount')}</div>
                                                    <div><span className="opacity-50">{t('available')}:</span> {formatNumber(balance, 2)} <span className="opacity-50">{fromCcy === "USD" ? "USD" : "USDT"}</span></div>
                                                </div>

                                                <div className="input-group mb-1">
                                                    <NumericFormat value={amount} thousandSeparator={true} allowNegative={false}
                                                        className="form-control border-end-0"
                                                        onValueChange={changeAmount}
                                                    />
                                                    <button className="input-group-text bg-transparent border-start-0 pe-2" onClick={onMax}>
                                                        <span className="bg-primary text-white rounded px-2 small">{t('all')}</span>
                                                    </button>
                                                </div>
                                                {!isEmpty(msgErrorAmount) && <span className="text-danger">{msgErrorAmount}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <button className="btn w-100 btn-primary mt-1" onClick={doConvert}><strong>{t('convertBtn')}</strong></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="alert alert-primary">
                            <p className="text-uppercase text-primary mb-0">{t('tips')}</p>
                            <small>{t('convertTip')}</small>
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
export default memo(ConvertBalance);