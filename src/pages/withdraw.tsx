import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AccountLevel, AccountType, AppEnv, APP_ENV, Result, RouteUrl, TwoFactorAction, WebsocketState } from "../models/constant.model";
import { RootState } from "../redux/store";
import { updateCustomerProfile, updateCcy, TwoFactorState, updatePositions, updateOpenOrders } from "../redux/slice/system.slice";
import { formatNumber, isEmpty, isNull, roundDown, getPositions, getOpenOrders, exchangeCurrencyRequest } from "../utils";
import * as AccountService from "../services/account.service";
import * as SystemService from "../services/system.service";
import { JSEncrypt } from 'jsencrypt';
import { CustomerProfileResponse, CurrencyResponse, BaseResponse } from "../models/response.model";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { NumericFormat } from "react-number-format";
import { NewWithdrawRequest } from "../models/request.model";
import * as Notification from "../components/notify";
import { updateTwoFactor } from "../redux/slice/system.slice";
import { useWebSocket } from "../socket/useWebsocket";

const Withdraw = () => {
    const { height, width } = useWindowDimensions();
    const { t, i18n } = useTranslation();
    const ws = useWebSocket();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state: RootState) => state.system.account);
    const mapCcy = useSelector((state: RootState) => state.system.mapCcy);

    const [withdrawCcy, setWithdrawCcy] = useState("USDT3");
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState<number>();
    const [balance, setBalance] = useState(0);
    const [withdrawFee, setWithdrawFee] = useState(1);
    const [minAmount, setMinAmount] = useState(1);
    const [memo, setMemo] = useState("");

    const [msgErrorAddress, setMsgErrorAddress] = useState("");
    const [msgErrorAmount, setMsgErrorAmount] = useState("");

    const positions = useSelector((state: RootState) => state.system.positions);
    const openOrders = useSelector((state: RootState) => state.system.openOrders);

    const [fromCcy, setFromCcy] = useState("USD");
    const [toCcy, setToCcy] = useState("USDT3");
    const [amountConvert, setAmountConvert] = useState<number>();
    const [balanceConvert, setBalanceConvert] = useState(0);
    const [available, setAvailable] = useState(0);
    const [msgErrorAmountConvert, setMsgErrorAmountConvert] = useState("");

    const [withdrawFlg, setWithdrawFlg] = useState(true);

    const jsencrypt = new JSEncrypt();
    const publicKey = process.env.REACT_APP_PUBLICK_KEY as string;
    jsencrypt.setPublicKey(publicKey);

    useEffect(() => {
        if (APP_ENV === AppEnv.DEMO) 
            navigate(RouteUrl.ACCOUNT);
    }, [])

    useEffect(() => {
        if (account) {
            if (account.accountLevel !== AccountLevel.MARKETING && account.withdrawFlg === 1)
                setWithdrawFlg(true);
            else setWithdrawFlg(false);
        }
    }, [account])

    useEffect(() => {
        if (!isEmpty(account.loginId)) {
            let wallet = account.wallet[withdrawCcy];
            if (wallet) {
                let availBalance = Number(wallet.balance) - wallet.reserve;
                setBalance(availBalance);
            }
            if (mapCcy) {
                const ccy = mapCcy[withdrawCcy];
                if (ccy) {
                    setMinAmount(ccy?.withdrawMinAmount);
                    setWithdrawFee(ccy?.withdrawFee);
                }
            }
        } else {
            getCustomerProfile();
            getCcys();
        }
    }, [account, mapCcy, withdrawCcy])

    const getCustomerProfile = () => {
        AccountService.getCustomerProfile().then((msg: any) => {
            let res = msg.data as CustomerProfileResponse;
            if (res.result === Result.SUCCESS) {
                dispatch(updateCustomerProfile(res.data));
            }
        })
    }

    const getCcys = () => {
        SystemService.getCurrency().then((msg: any) => {
            let res = msg.data as CurrencyResponse;
            if (res.result === Result.SUCCESS) {
                dispatch(updateCcy(res.data))
            }
        })
    }

    const changeAddress = (e: any) => {
        let value = e.target.value;
        setAddress(value);
        if (isEmpty(value)) {
            let msg = i18n.t('addressInvalid');
            setMsgErrorAddress(msg);
        } else setMsgErrorAddress("")
    }

    const changeAmount = (values: any) => {
        const { floatValue } = values;
        setAmount(floatValue);
        let msg = "";
        if (isNull(floatValue)) {
            msg = i18n.t('withdrawAmountInvalid');
        } else {
            if (floatValue > balance) msg = i18n.t('withdrawAmountGreaterAvailable');
            if (floatValue < minAmount) msg = i18n.t('withdrawMinAmountInvalid');
        }
        setMsgErrorAmount(msg);
    }

    const doWithdraw = () => {
        if (!isEmpty(address) && !isNull(amount)) {
            if (isEmpty(msgErrorAddress) && isEmpty(msgErrorAmount)) {
                let twoFaOperation = JSON.parse(account.twoFaOperation);
                if (twoFaOperation !== null && twoFaOperation.withdraw === 1) {
                    let param: TwoFactorState = {
                        preUrl: RouteUrl.WITHDRAW,
                        type: account.twoFaType,
                        action: TwoFactorAction.WITHDRAW,
                        withdrawCcy: withdrawCcy,
                        withdrawAddress: jsencrypt.encrypt(address) as string,
                        withdrawAmount: Number(amount),
                        memo: memo,
                        newPassword: ""
                    }
                    dispatch(updateTwoFactor(param));
                    navigate(RouteUrl.TWO_FACTOR);

                } else {
                    let param: NewWithdrawRequest = {
                        ccy: withdrawCcy,
                        toAddress: jsencrypt.encrypt(address) as string,
                        amount: Number(amount),
                        memo: memo
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
                    })
                }
            }
        } else {
            if (isEmpty(address)) setMsgErrorAddress(i18n.t('addressInvalid') as string);
            if (isNull(amount)) setMsgErrorAmount(i18n.t('withdrawAmountInvalid') as string)
        }
    }

    const onMax = () => {
        let maxValue = balance;
        if (maxValue < 0) maxValue = 0;
        setAmount(maxValue);
        setMsgErrorAmount("");
    }

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
                setBalanceConvert(availBalance);

                if (fromCcy === "USD") {
                    if ((positions !== null && positions.length > 0) || (openOrders !== null && openOrders.length > 0)) {
                        setAvailable(roundDown(availBalance * 0.8, 2));
                    } else setAvailable(availBalance)
                } else setAvailable(availBalance)
            }
        }
    }, [ws, account, fromCcy, positions])

    const changeAmountConvert = (values: any) => {
        const { floatValue } = values;
        setAmountConvert(floatValue);
        let msg = "";
        if (isNull(floatValue)) {
            msg = i18n.t("exchangeAmountInvalid");
        } else {
            if (floatValue > available) msg = i18n.t("202");
        }
        setMsgErrorAmountConvert(msg);
    }

    const changeFromCcy = (e: any) => {
        let value = e.target.value;
        setFromCcy(value);
        if (value === "USD") setToCcy("USDT3");
        else setToCcy("USD");

        setAmountConvert(0);
        setMsgErrorAmountConvert("");
    }

    const changeToCcy = (e: any) => {
        let value = e.target.value;
        setToCcy(value);
        if (value === "USD") setFromCcy("USDT3");
        else setFromCcy("USD");

        setAmountConvert(0);
        setMsgErrorAmountConvert("");
    }

    const onMaxConvert = () => {
        setAmountConvert(available);
        setMsgErrorAmountConvert("");
    }

    const doConvert = () => {
        if (!isNull(amountConvert)) {
            if (isEmpty(msgErrorAmountConvert)) {
                exchangeCurrencyRequest(ws, fromCcy, toCcy, String(amountConvert), 4);
            }
        } else {
            setMsgErrorAmountConvert(i18n.t("exchangeAmountInvalid") as string)
        }
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
                            {t('withdraw')}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    const renderConvert = () => {
        return (
            <div className="container-fluid" >
                <h6 className="text-primary text-uppercase mb-2">
                    <strong>{t('balanceConvert')}</strong>
                </h6>
                
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
                                            <div><span className="opacity-50">{t('available')}:</span> {formatNumber(balanceConvert, 2)} <span className="opacity-50">{fromCcy === "USD" ? "USD" : "USDT"}</span></div>
                                        </div>

                                        <div className="input-group mb-1">
                                            <NumericFormat value={amountConvert} thousandSeparator={true} allowNegative={false}
                                                className="form-control border-end-0"
                                                onValueChange={changeAmountConvert}
                                            />
                                            <button className="input-group-text bg-transparent border-start-0 pe-2" onClick={onMaxConvert}>
                                                <span className="bg-primary text-white rounded px-2 small">{t('all')}</span>
                                            </button>
                                        </div>
                                        {!isEmpty(msgErrorAmountConvert) && <span className="text-danger">{msgErrorAmountConvert}</span>}
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
        )
    }

    const renderBody = () => {
        let mHeight = 0;
        if (height) mHeight = height - 10;

        return (
            <div className="site-main" style={{ "paddingTop": "3rem" }}>
                <div className="table-responsive py-2 pt-3">
                    {renderConvert()}
                    <hr className="my-3"></hr>
                    <div className="container-fluid" >
                        <h6 className="text-primary text-uppercase mb-2">
                            <strong>{t('withdraw')}</strong>
                        </h6>
                        <div className="card mb-3">
                            <div className="card-body p-2">
                                <table className="table table-borderless table-sm mb-0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                        <tr>
                                            <td><span className="opacity-50">{t('cryptoCcy')}</span></td>
                                            <td className="text-end">USDT</td>
                                        </tr>
                                        <tr>
                                            <td className="pt-2"><span className="opacity-50">{t('network')}</span></td>
                                            <td className="text-end">
                                                <select className="form-select" value={withdrawCcy} onChange={(e) => setWithdrawCcy(e.target.value)}>
                                                    <option value="USDT3">{t('TRC20')}</option>
                                                    <option value="USDT1">{t('ERC20')}</option>
                                                    <option value="USDT2">{t('BEP20')}</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <div className="opacity-50">{t('reciverAddress')}</div>
                                                <input type="text" className="form-control mb-1" value={address} onChange={changeAddress} />
                                                {!isEmpty(msgErrorAddress) && <span className="text-danger">{msgErrorAddress}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <div className="d-flex justify-content-between mb-1 align-items-center">
                                                    <div className="opacity-50">{t('amount')}</div>
                                                    <div><span className="opacity-50">{t('available')}:</span> {formatNumber(balance, 2)} <span className="opacity-50">USDT</span></div>
                                                </div>

                                                <div className="input-group mb-1">
                                                    <NumericFormat value={amount} thousandSeparator={true} allowNegative={false}
                                                        className="form-control border-end-0"
                                                        onValueChange={changeAmount}
                                                    />
                                                    <button className="input-group-text bg-transparent border-start-0 pe-2" onClick={onMax}>
                                                        <span className="bg-primary text-white rounded px-2 small">Max</span>
                                                    </button>
                                                </div>
                                                {!isEmpty(msgErrorAmount) && <span className="text-danger">{msgErrorAmount}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <div className="opacity-50">{t('memo1')}</div>
                                                <input type="text" className="form-control mb-1" value={memo} onChange={(e) => setMemo(e.target.value)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="opacity-50">{t('withdrawFee')}</span></td>
                                            <td className="text-end">{withdrawFee} <span className="opacity-50">USDT</span></td>
                                        </tr>
                                        {/* <tr>
                                            <td colSpan={2}>
                                                <button className="btn btn-sm w-100 bg-primary-light" onClick={() => navigate(RouteUrl.CONVERT)}>{t('convertBalance')}</button>
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <td colSpan={2}>
                                                <button className="btn w-100 btn-danger mt-1" disabled={!withdrawFlg} onClick={doWithdraw}><strong>{t('withdraw')}</strong></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="alert alert-primary">
                            <p className="text-uppercase text-primary mb-0">{t('tips')}</p>
                            <ul className="list-default small mb-0">
                                <li>{t('withdrawTips3')}</li>
                                <li>{t('minWithdrawAmount', { minAmount: minAmount })}</li>
                                <li>{t('withdrawTips1')}</li>
                                <li>{t('withdrawTips2')}</li>
                            </ul>
                        </div>
                        <div className="alert alert-warning">
                            <p className="text-uppercase text-warning mb-0">{t('warning')}</p>
                            <p className="small mb-0">{t('withdrawWarning')}</p>
                            <ol className="small">
                                <li>{t('withdrawWarning1')}</li>
                                <li>{t('withdrawWarning2')}</li>
                            </ol>
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
export default memo(Withdraw);