import { useState, memo, useEffect, useRef } from "react";
import React from "react";
import Footer from "../components/footer";
import { CashflowStatus, CashflowType, LocalStorageKey, Page, Result, RouteUrl, Requesturl, APP_ENV, AppEnv } from "../models/constant.model";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout} from "../redux/slice/auth.slice";
import { updateCustomerProfile } from "../redux/slice/system.slice";
import { formatNumber, hanldeCoppyAddress, isEmpty } from "../utils";
import * as AccountService from "../services/account.service";
import { useWebSocket } from "../socket/useWebsocket";
import { DepositHistoryRequest, LogoutAPIRequest, WithdrawHistoryRequest } from "../models/request.model";
import { useNavigate } from "react-router-dom";
import { CashflowInfo, CashflowResponse,CustomerProfileResponse } from "../models/response.model";
import Deposit from "../components/row/deposit";
import Withdraw from "../components/row/withdraw";
import axios from "axios";
import { BaseResponse } from "../models/response.model";
import * as Notification from "../components/notify";

const Account = () => {
    const { t,i18n } = useTranslation();
    const navigate = useNavigate();
    const ws = useWebSocket();
    const account = useSelector((state: RootState) => state.system.account);
    const dispatch = useDispatch();
    const [balanceUSDT, setBalanceUSDT] = useState(0);
    const [deposits, setDeposits] = useState<CashflowInfo[]>([]);
    const [withdraws, setWithdraws] = useState<CashflowInfo[]>([]);
    const [cashflows, setCashflows] = useState<CashflowInfo[]>([]);

    const avatarRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [avatar, setAvatar] = useState<File>();
    const [avatarUrl, setAvatarUrl] = useState<string>();

    useEffect(() => {
        if (isEmpty(account.loginId))
            getCustomerProfile();
            
        if (account) {
            getDepositHistory();
            getWithdrawHistory();
            let listCcy = ["USDT1", "USDT2", "USDT3"];
            let totalBalanceUSDT = 0;
            for (let ccy of listCcy) {
                if (account.wallet[ccy]) {
                    let balance = Number(account.wallet[ccy].balance);
                    let reserve = Number(account.wallet[ccy].reserve);
                    totalBalanceUSDT = totalBalanceUSDT + balance - reserve;
                }
            }
            setBalanceUSDT(totalBalanceUSDT)
        }
    }, [account])

    useEffect(() => {
        let tmpList: CashflowInfo[] = [];
        tmpList = tmpList.concat(deposits);
        tmpList = tmpList.concat(withdraws);

        tmpList = tmpList.sort((a, b) => b.transactionTime - a.transactionTime);
        setCashflows(tmpList);
    }, [deposits, withdraws])

    const getCustomerProfile = () => {
        AccountService.getCustomerProfile().then((msg: any) => {
            let res = msg.data as CustomerProfileResponse;
            if (res.result === Result.SUCCESS) {
                dispatch(updateCustomerProfile(res.data));
            }
        })
    }

    const doLogout = () => {
        ws.close();
        logout();
        let logoutRequest: LogoutAPIRequest = {};
        AccountService.logout(logoutRequest);
        localStorage.removeItem(LocalStorageKey.USER);
        window.location.href = RouteUrl.LOGIN;
    }

    const getDepositHistory = () => {
        let param: DepositHistoryRequest = {
            ccy: null,
            status: null,
            fromTime: null,
            toTime: null,
            pageNo: 1,
            pageSize: 5
        }

        AccountService.getDepositHistory(param).then((msg: any) => {
            const res = msg.data as CashflowResponse;
            if (res.result === Result.SUCCESS) {
                if (res.data?.cashflows !== null && res.data?.cashflows?.length > 0) {
                    for (let cashflow of res.data.cashflows) {
                        cashflow.cashflowType = CashflowType.DEPOSIT;
                    }
                    setDeposits(res.data.cashflows);
                } else setDeposits([])
            }
        })
    }

    const getWithdrawHistory = () => {
        let param: WithdrawHistoryRequest = {
            ccy: null,
            statuses: [CashflowStatus.REQUESTING, CashflowStatus.CHECKED, CashflowStatus.CONFIRMED, CashflowStatus.SIGNED_PARTIAL, CashflowStatus.PROCESSING, CashflowStatus.REQUESTED, CashflowStatus.VERIFY_STEP1, CashflowStatus.VERIFY_STEP2, CashflowStatus.COMPLETED],
            fromTime: null,
            toTime: null,
            pageNo: 1,
            pageSize: 5
        }

        AccountService.getWithdrawHistory(param).then((msg: any) => {
            const res = msg.data as CashflowResponse;
            if (res.result === Result.SUCCESS) {
                if (res.data?.cashflows !== null && res.data?.cashflows?.length > 0) {
                    setWithdraws(res.data.cashflows);
                } else setWithdraws([])
            }
        })
    }

    const clickAvatar = () => {
        avatarRef.current.click();
    }

    const changeAvatar = (e: any) => {

        var files = e.target.files;
        if (files != null) {
            const file = files[0];
            var reader = new FileReader();
            reader.onload = (event: any) => {
                setAvatarUrl(event.target.result);
                setAvatar(file);
            }
            reader.readAsDataURL(file);

            let formData: FormData = new FormData();
            if (file) formData.append('file', file, file.name);

            axios({
                method: "post",
                url: Requesturl.UPLOAD_AVATAR,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (msg) {
                    const res = msg.data;
                    if (res.result === Result.SUCCESS) {
                        updateAvatarProfile(res.data.filePath);
                    } else {
                        if (res.msgCode) {
                            Notification.error(i18n.t(String(res.msgCode)));
                        } else Notification.error(i18n.t('uploadAvatarFail'));
                        setAvatarUrl("");
                    }
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
    }

    const updateAvatarProfile = (avatar: any) => {
        let param = {
            avatar: avatar,
            loginId: account.loginId
        }

        AccountService.updateProfile(param).then((msg: any) => {
            const res = msg.data as BaseResponse;
        })
    }

    const renderHeader = () => {
        return (
            <div className="site-header bg-primary">
                <div className="container-fluid">
                    <div className="header-main py-2 d-flex justify-content-between align-items-center">
                        <h4 className="page-title text-white mb-0">
                            <img src="logout.svg" onClick={doLogout} style={{ width: "23px", marginTop: "-6px" }} /> {account.nickName}
                        </h4>
                        <div className="header-action">
                            <button className="btn btn-icon bg-transparent text-white" onClick={() => navigate(RouteUrl.SETTING)}>
                                <i className="fa-solid fa-gear" style={{ fontSize: "20px" }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderAccountInfo = () => {
        return (
            <div className="profile-header">
                <div className="profile-image" onClick={clickAvatar}>
                    {isEmpty(avatarUrl) && <img src={account.avatar ? account.avatar : "avatar.jpg"} alt="" />}
                    {!isEmpty(avatarUrl) && <img src={avatarUrl} alt="" />}
                    <input type="file" hidden={true} ref={avatarRef} className="form-control mb-0" accept="image/*" onChange={changeAvatar} /> 
                </div>
                <h4 className="text-center mb-0">{account.loginId}</h4>
                {APP_ENV === AppEnv.LIVE && <p className="text-center text-secondary mb-0">{t('ibUrl')}: <a href={account.ibUrl} className="text-info text-decoration-none">{account.ibUrl}</a>
                    <a onClick={() => hanldeCoppyAddress(account.ibUrl)} className="text-secondary opacity-50 ms-1">
                        <i className="fa-solid fa-copy" style={{ fontSize: "18px" }}></i>
                    </a>
                </p>}
                {APP_ENV === AppEnv.LIVE &&<p className="text-center mb-1">
                    <button className="btn btn-link p-0" onClick={() => navigate(RouteUrl.AFFILIATE)}>{t('details')}</button>
                </p>}
                
            </div>
        )
    }

    const renderBalanceInfo = () => {
        return (
            <div className="py-2">
                <div className="container-fluid">
                    <div className="p-2 bg-primary-light h-100 d-flex justify-content-center align-items-center flex-column rounded border-0 w-100 mb-3">
                        <div className="text-center opacity-50 lh-1 text-uppercase">{t('balance')}</div>
                        <div className="text-center text-primary fs-4 text-uppercase">{formatNumber(account.accountBalance, 2)} USD</div>
                        <div className="text-center opacity-50 lh-1 text-uppercase">{formatNumber(balanceUSDT, 2)} USDT</div>
                    </div>
                    {APP_ENV === AppEnv.LIVE && <div className="row gx-3 align-items-stretch mb-0">
                        <div className="col-6">
                            <button className="px-3 py-2 bg-success-light h-100 d-flex align-items-center rounded border-0 w-100" onClick={() => navigate(RouteUrl.DEPOSIT)}>
                                <div className="text-center fs-1 text-success me-2"><i className="fa-regular fa-indent"></i></div>
                                <div className="text-center text-success fs-5 lh-1 text-uppercase">{t('deposit')}</div>
                            </button>
                        </div>
                        <div className="col-6">
                            <button className="px-3 py-2 bg-danger-light h-100 d-flex align-items-center rounded border-0 w-100" onClick={() => navigate(RouteUrl.WITHDRAW)}>
                                <div className="text-center fs-1 text-danger me-2"><i className="fa-regular fa-outdent"></i></div>
                                <div className="text-center text-danger fs-5 lh-1 text-uppercase">{t('withdraw')}</div>
                            </button>
                        </div>
                    </div>}
                    
                </div>
            </div>
        )
    }

    const renderCashflow = () => {
        return (
            <>
                <hr className="my-2"></hr>
                <div className="pb-2">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="text-uppercase mb-0">{t('recentHistory')}</h5>
                            <div><button className="btn btn-link" onClick={() => navigate(RouteUrl.HISTORY)}>{t('viewAll')}</button></div>
                        </div>
                        {cashflows && cashflows.map((cashflow, idx) => {
                            return (
                                <React.Fragment key={cashflow.id}>
                                    {cashflow.cashflowType === CashflowType.DEPOSIT && <Deposit cashflow={cashflow} key={cashflow.id} />}
                                    {cashflow.cashflowType === CashflowType.WITHDRAW && <Withdraw cashflow={cashflow} key={cashflow.id} reloadWithdraws={getWithdrawHistory}/>}
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="site page page-profile fixed-header has-header-bottom fixed-footer">
            {renderHeader()}

            <div className="site-main" style={{ paddingTop: "48px" }}>
                {renderAccountInfo()}
                {renderBalanceInfo()}
                {renderCashflow()}
            </div>
            <Footer page={Page.ACCOUNT} />
        </div>
    )
}

export default memo(Account);