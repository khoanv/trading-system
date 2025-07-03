import { memo, useEffect, useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RouteUrl, CashflowType, Result, OrderStatus } from "../models/constant.model";
import useWindowDimensions from "../hooks/useWindowDimensions";
import * as AccountService from "../services/account.service";
import { DepositHistoryRequest, WithdrawHistoryRequest } from "../models/request.model";
import { CashflowInfo, CashflowResponse, CustomerProfileResponse, OrderHistoryResponse, OrderInfo } from "../models/response.model";
import Deposit from "../components/row/deposit";
import Withdraw from "../components/row/withdraw";
import TradeHistory from "../components/row/trade-history";

const enum Tab {
    DEPOSIT = 1,
    WITHDRAW = 2,
    TRADE = 3
}

const PAGE_SIZE = 20;

const TransactionHistory = () => {
    const { height, width } = useWindowDimensions();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [deposits, setDeposits] = useState<CashflowInfo[]>([]);
    const [withdraws, setWithdraws] = useState<CashflowInfo[]>([]);
    const [orders, setOrders] = useState<OrderInfo[]>([]);
    const [pageNo1, setPageNo1] = useState(1);
    const [pageNo2, setPageNo2] = useState(1);
    const [pageNo3, setPageNo3] = useState(1);
    const [total1, setTotal1] = useState(0);
    const [total2, setTotal2] = useState(0);
    const [total3, setTotal3] = useState(0);
    const [tab, setTab] = useState<Tab>(Tab.TRADE)
    const [orderStatus, setOrderStatus] = useState("2");

    useEffect(() => {
        if (tab === Tab.DEPOSIT)
            getDepositHistory()
    }, [pageNo1, tab])

    useEffect(() => {
        if (tab === Tab.WITHDRAW)
            getWithdrawHistory()
    }, [pageNo2, tab])

    useEffect(() => {
        if (tab === Tab.TRADE)
            getTradeHistory(false)
    }, [pageNo3, tab])

    useEffect(() => {
        setOrders([]);
        if (pageNo3 !== 1) setPageNo3(1);
        else getTradeHistory(true);
    }, [orderStatus])

    const changeOrderStatus = (e: any) => {
        let value = e.target.value;
        setOrderStatus(value);
        console.log(value)
    }

    const getDepositHistory = () => {
        let param: DepositHistoryRequest = {
            ccy: null,
            status: null,
            fromTime: null,
            toTime: null,
            pageNo: pageNo1,
            pageSize: PAGE_SIZE
        }

        AccountService.getDepositHistory(param).then((msg: any) => {
            const res = msg.data as CashflowResponse;
            if (res.result === Result.SUCCESS) {
                if (res.data?.cashflows !== null && res.data?.cashflows?.length > 0) {
                    for (let cashflow of res.data.cashflows) {
                        cashflow.cashflowType = CashflowType.DEPOSIT;
                    }
                    setDeposits([...deposits, ...res.data.cashflows]);
                    setTotal1(res.data.total);
                } else {
                    setDeposits([]);
                    setTotal1(0);
                }
            }
        })
    }

    const getWithdrawHistory = () => {
        let param: WithdrawHistoryRequest = {
            ccy: null,
            statuses: null,
            fromTime: null,
            toTime: null,
            pageNo: pageNo2,
            pageSize: PAGE_SIZE
        }

        AccountService.getWithdrawHistory(param).then((msg: any) => {
            const res = msg.data as CashflowResponse;
            if (res.result === Result.SUCCESS) {
                if (res.data?.cashflows !== null && res.data?.cashflows?.length > 0) {
                    setWithdraws([...withdraws, ...res.data.cashflows]);
                    setTotal2(res.data.total);
                } else {
                    setWithdraws([]);
                    setTotal2(0);
                }
            }
        })
    }

    const getTradeHistory = (changeStatus: boolean) => {
        let statuses = [OrderStatus.EXECUTED, OrderStatus.EXECUTED_PARTIALLY, OrderStatus.CLOSED, OrderStatus.EXPIRED, OrderStatus.CANCELED];

        if (orderStatus === "0") 
            statuses = [OrderStatus.EXECUTED, OrderStatus.EXECUTED_PARTIALLY, OrderStatus.CLOSED, OrderStatus.EXPIRED, OrderStatus.CANCELED];

        if (orderStatus === "1") 
            statuses = [OrderStatus.EXECUTED, OrderStatus.EXECUTED_PARTIALLY];

        if (orderStatus === "2") 
            statuses = [OrderStatus.CLOSED];

        let param = {
            status: statuses,
            pageNo: pageNo3,
            pageSize: PAGE_SIZE
        }

        AccountService.getOrderHistory(param).then((msg: any) => {
            const res = msg.data as OrderHistoryResponse;
            if (res.result === Result.SUCCESS) {
                if (res.data?.orders !== null && res.data?.orders?.length > 0) {
                    if (changeStatus)
                        setOrders(res.data.orders);
                    else setOrders([...orders, ...res.data.orders]);
                    setTotal3(res.data.total);
                } else {
                    setOrders([]);
                    setTotal3(0);
                }
            }
        })
    }

    const reloadWithdraws = () => {
        setPageNo2(1);
        setWithdraws([]);
        setTotal2(0);
    }

    const onDepositTab = () => {
        setTab(Tab.DEPOSIT);
        setDeposits([]);
        setPageNo1(1);
    }

    const onWithdrawTab = () => {
        setTab(Tab.WITHDRAW);
        setWithdraws([]);
        setPageNo2(1);
    }

    const onTradeTab = () => {
        setTab(Tab.TRADE);
        setOrders([]);
        setPageNo3(1);
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(-1)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="page-title text-primary mb-0">
                            {t('transactionHistory')}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    const renderTab = () => {
        return (
            <div className="tabs-line-block container-fluid mb-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="trade-tab" data-bs-toggle="tab" data-bs-target="#trade"
                            type="button" role="tab" aria-controls="contact" aria-selected="false" onClick={onTradeTab}>{t('trade')}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link " id="deposit-tab" data-bs-toggle="tab" data-bs-target="#deposit"
                            type="button" role="tab" aria-controls="home" aria-selected="true" onClick={onDepositTab}>{t('deposit')}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="withdraw-tab" data-bs-toggle="tab" data-bs-target="#withdraw"
                            type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={onWithdrawTab}>{t('withdraw')}</button>
                    </li>

                </ul>
            </div>
        )
    }

    const renderTabContent = () => {
        return (
            <div className="tab-content">
                {renderDepositTab}
                {renderWithdrawTab}
                {renderTradeTab}
            </div>
        )
    }

    const renderDepositTab = useMemo(() => {
        return (
            <div className="tab-pane fade show" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
                <div className="container-fluid">
                    {deposits.map((cashflow, index) => (
                        <Deposit cashflow={cashflow} key={cashflow.id} />
                    ))}

                    {deposits.length < total1 &&
                        <div className="text-center">
                            <i className="fa-duotone fa-angle-down" onClick={() => setPageNo1(pageNo1 + 1)} style={{ fontSize: "30px" }}></i>
                        </div>
                    }
                </div>
            </div>
        )
    }, [deposits, total1])

    const renderWithdrawTab = useMemo(() => {
        return (
            <div className="tab-pane fade show" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab">
                <div className="container-fluid">
                    {withdraws.map((cashflow, index) => (
                        <Withdraw cashflow={cashflow} key={cashflow.id} reloadWithdraws={reloadWithdraws} />
                    ))}
                    {withdraws.length < total2 &&
                        <div className="text-center">
                            <i className="fa-duotone fa-angle-down" onClick={() => setPageNo2(pageNo2 + 1)} style={{ fontSize: "30px" }}></i>
                        </div>
                    }
                </div>
            </div>
        )
    }, [withdraws, total2])

    const renderTradeTab = useMemo(() => {
        return (
            <div className="tab-pane fade show active" id="trade" role="tabpanel" aria-labelledby="trade-tab">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6">
                            <select className="form-select mb-2" value={orderStatus} onChange={changeOrderStatus}>
                                <option value="0">{t('all')}</option>
                                <option value="1">{t('open')}</option>
                                <option value="2">{t('close')}</option>
                            </select>
                        </div>
                    </div>
                    
                    {orders.map((order, index) => (
                        <TradeHistory order={order} key={order.orderId} />
                    ))}
                    {orders.length < total3 &&
                        <div className="text-center">
                            <i className="fa-duotone fa-angle-down" onClick={() => setPageNo3(pageNo3 + 1)} style={{ fontSize: "30px" }}></i>
                        </div>
                    }
                </div>
            </div>
        )
    }, [orders, total3, orderStatus])

    const renderBody = () => {
        let mHeight = 0;
        if (height) mHeight = height - 10;

        return (
            <div className="site-main" style={{ "paddingTop": "3rem" }}>
                <div className="table-responsive py-2 pt-3" style={{ maxHeight: mHeight }}>
                    {renderTab()}
                    {renderTabContent()}
                </div>
            </div>
        )
    }

    return (
        <div className="site page page-setting fixed-header">
            {renderHeader()}
            {renderBody()}
        </div>
    )
}
export default memo(TransactionHistory)