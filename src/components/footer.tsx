import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IconHome } from "../assets/img/icon-home.svg";
import { ReactComponent as IconHomeFill } from "../assets/img/icon-home-fill.svg";
import { ReactComponent as IconChart } from "../assets/img/icon-chart.svg";
import { ReactComponent as IconChartFill } from "../assets/img/icon-chart-fill.svg";
import { ReactComponent as IconExchange } from "../assets/img/icon-exchange.svg";
import { ReactComponent as IconExchangeFill } from "../assets/img/icon-exchange-fill.svg";
import { ReactComponent as IconProfile } from "../assets/img/icon-profile.svg";
import { ReactComponent as IconProfileFill } from "../assets/img/icon-profile-fill.svg";
import { Page,Result, RouteUrl, SymbolType, WebsocketState } from "../models/constant.model";
import { ListSymbolResponse,CurrencyResponse, CustomerProfileResponse } from "../models/response.model";
import * as SystemService from "../services/system.service";
import * as AccountService from "../services/account.service";
import { useSelector, useDispatch } from "react-redux";
import { updateCcy, updateSymbol, updateCustomerProfile, updatePositions, updateOpenOrders } from "../redux/slice/system.slice";
import { logout } from "../redux/slice/auth.slice";
import { RootState } from "../redux/store";
import { isNull, getSymbols, isEmpty } from "../utils";

interface Props {
    page: string
}

const Footer = (props: Props) => {
    const {page} = props;
    const {t} = useTranslation();
    const navigate = useNavigate();

    const listCcy = useSelector((state: RootState) => state.system.listCcy);
    const account = useSelector((state: RootState) => state.system.account);
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (listCcy.length === 0) {
            getCcys();
        }
    }, [listCcy])

    // useEffect(() => {
    //     if (isEmpty(account.loginId)) {
    //         getCustomerProfile();
    //     }
    // }, [account])

    useEffect(() => {
        if (auth.token === null) {
            dispatch(logout());
            navigate("/login");
        } else {
            if (isEmpty(account.loginId)) {
                getCustomerProfile();
            }
        }
    }, [auth, account])

    const getSymbolsRest = (type: number) => {
        SystemService.getSymbols(type).then((msg:any) => {
            let res = msg.data as ListSymbolResponse;
            if(res.result === Result.SUCCESS){
                dispatch(updateSymbol(res.data));
            }
        })
    }

    const getCcys = () => {
        SystemService.getCurrency().then((msg: any) => {
            let res = msg.data as CurrencyResponse;
            if(res.result === Result.SUCCESS){
                dispatch(updateCcy(res.data))
            }
        })
    }

    const getCustomerProfile = () => {
        try {
            AccountService.getCustomerProfile().then((msg: any) => {
                let res = msg.data as CustomerProfileResponse;
                if (res.result === Result.SUCCESS) {
                    dispatch(updateCustomerProfile(res.data));
                }
            }, (error: any) => {
                console.log(error)
            })
        } catch(e){}
        
    }

    return (
        <div className="site-footer">
            <ul className="site-main-nav nav">
                <li className="nav-item item-market">
                    <a className="nav-link cursor_pointer active" onClick={() => navigate(RouteUrl.MARKET)}>
                        <div className="icon">
                            {page === Page.MARKET && <IconHomeFill />}
                            {page !== Page.MARKET && <IconHome />}
                        </div>
                        <div className="text">{t('market')}</div>
                    </a>
                </li>
                <li className="nav-item item-chart">
                    <a className="nav-link cursor_pointer" onClick={() => navigate(RouteUrl.CHART)}>
                        <div className="icon">
                            {page === Page.CHART && <IconChartFill />}
                            {page !== Page.CHART && <IconChart />}
                        </div>
                        <div className="text">{t('chart')}</div>
                    </a>
                </li>
                <li className="nav-item item-trade">
                    <a className="nav-link cursor_pointer" onClick={() => navigate(RouteUrl.TRADE)}>
                        <div className="icon">
                            {page === Page.TRADE && <IconExchangeFill />}
                            {page !== Page.TRADE && <IconExchange />}
                        </div>
                        <div className="text">{t('trade')}</div>
                    </a>
                </li>
                <li className="nav-item item-account">
                    <a className="nav-link cursor_pointer" onClick={() => navigate(RouteUrl.ACCOUNT)}>
                        <div className="icon">
                            {page === Page.ACCOUNT && <IconProfileFill />}
                            {page !== Page.ACCOUNT && <IconProfile />}
                        </div>
                        <div className="text">{t('account')}</div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default memo(Footer);