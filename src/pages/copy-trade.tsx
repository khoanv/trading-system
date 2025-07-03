import { memo, useEffect, useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Router, useNavigate } from "react-router-dom";
import { Result, RouteUrl } from "../models/constant.model";
import * as AccountService from "../services/account.service";
import { CustomerProfileResponse, ListProviderResponse } from "../models/response.model";
import { ProviderInfo } from "../models/response.model";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SignalProvider from "../components/row/signal-provider";
import { NumericFormat } from "react-number-format";
import { hanldeCoppyAddress, isEmpty, isNull } from "../utils";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerProfile } from "../redux/slice/system.slice";

const PAGE_SIZE = 20;

const CopyTrade = () => {
    const { height, width } = useWindowDimensions();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [pageNo, setPageNo] = useState(1);
    const [total, setTotal] = useState(0);
    const [providers, setProviders] = useState<ProviderInfo[]>([]);
    const [virtualId, setVirtualId] = useState("");
    const account = useSelector((state: RootState) => state.system.account);
    const dispatch = useDispatch();

    useEffect(() => {
        getSignalProviders();
    }, [pageNo])

    useEffect(() => {
        if (isEmpty(account.loginId)) getCustomerProfile();
    }, [account])

    const getCustomerProfile = () => {
        AccountService.getCustomerProfile().then((msg: any) => {
            let res = msg.data as CustomerProfileResponse;
            if (res.result === Result.SUCCESS) {
                dispatch(updateCustomerProfile(res.data));
            }
        })
    }

    const getSignalProviders = () => {
        let param = {
            asc: true,
            virtualId: !isNull(virtualId) ? virtualId : null,
            pageNo: pageNo,
            pageSize: PAGE_SIZE
        }

        AccountService.getSignalProviders(param).then((msg: any) => {
            const res = msg.data as ListProviderResponse;
            if (res.result === Result.SUCCESS) {
                if (res.data?.best !== null && res.data?.best?.length > 0) {
                    let listPro = res.data.best.concat(res.data.worst);
                    setProviders(listPro);
                    setTotal(res.data.total);
                } else {
                    setProviders([]);
                    setTotal(0);
                }
            } else {
                navigate(RouteUrl.LOGIN);
            }
        })
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex align-items-center justify-content-between">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(RouteUrl.TRADE)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="page-title text-primary mb-0">
                            {t('topTrader')}
                        </h4>
                        <div className="header-action">
                            <button className="btn btn-sm bg-white btn-outline-primary mx-2" onClick={() => navigate(RouteUrl.FOLLOWERS)}>{t('myFollower')}</button>
                            {/* <button className="btn btn-sm bg-white btn-outline-primary mx-2" onClick={() => navigate(RouteUrl.REWARD_SETTING)}>{t('setting')}</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderBody = () => {
        let mHeight = 0;
        if (height) mHeight = height - 10;
        return (
            <div className="site-main" style={{ paddingTop: "3rem"}}>
                <div className="table-responsive p-2" style={{ maxHeight: mHeight, minHeight: mHeight - 30 }}>
                    <div className="d-flex px-2 mb-0">
                        <div className="col-12 py-1">{t('yourSignalId')}: <a className="text-primary text-decoration-none" onClick={() => hanldeCoppyAddress(account?.virtualId)}>{account?.virtualId}</a></div>
                        
                    </div>
                    <div className="d-flex p-2">
                        <div className="col-3 py-1">{t('signalId')}</div>
                        <div className="col-5">
                            <NumericFormat value={virtualId} thousandSeparator={false} allowNegative={false}
                                className="form-control text-end mb-1" decimalScale={0}
                                onValueChange={(values: any) => {
                                    const { floatValue } = values;
                                    setVirtualId(floatValue);
                                }}
                            />
                        </div>
                        <div className="col-4 text-end">
                            <button className="btn btn-primary" onClick={getSignalProviders}>{t('searchBtn')}</button>
                        </div>
                    </div>
                    {providers.map((provider, idx) => {
                        return (
                            <SignalProvider key={provider.id + idx} provider={provider} index={idx} />
                        )
                    })}

                    {/* {providers.length < total &&
                        <div className="text-center">
                            <i className="fa-duotone fa-angle-down" onClick={() => setPageNo(pageNo + 1)} style={{ fontSize: "30px" }}></i>
                        </div>
                    } */}
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

export default memo(CopyTrade);