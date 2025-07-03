import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RouteUrl } from "../models/constant.model";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Reward from "../components/row/reward";

const RewardSetting = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const { height, width } = useWindowDimensions();

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
                            {t('setting')}
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
                    <Reward />
                    <Reward />
                    <Reward />
                    <Reward />
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
export default memo(RewardSetting);