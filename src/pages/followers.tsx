import { memo, useEffect, useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Router, useNavigate } from "react-router-dom";
import { Result, RouteUrl } from "../models/constant.model";
import * as AccountService from "../services/account.service";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ListFollowerResponse } from "../models/response.model";
import MyFollower  from "../components/row/follower";

const Followers = () => {
    const { height, width } = useWindowDimensions();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [followers, setFollowers] = useState<string[]>([]);

    useEffect(() => {
        getListFollower();
    }, [])

    const getListFollower = () => {
        AccountService.getListFollower().then((msg: any) => {
            const res = msg.data as ListFollowerResponse;
            if (res.result === Result.SUCCESS) {
                setFollowers(res.data);
            } else {
                navigate(RouteUrl.LOGIN);
            }
        })
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(RouteUrl.COPY_TRADE)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="page-title text-primary mb-0">
                            {t('myFollower')}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    const renderBody = () => {
        let mHeight = 0;
        if (height) mHeight = height - 10;
        return (
            <div className="site-main" style={{ paddingTop: "3rem" }}>
                <div className="table-responsive p-2" style={{ maxHeight: mHeight }}>
                    {followers.map((follower, idx) => {
                        return (
                            <MyFollower index={idx} key={idx} nickName={follower}/>
                        )
                    })}
                    {followers.length == 0 && <span className="fst-italic">{t('noRecord')}</span>}
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
export default memo(Followers);