import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppEnv, APP_ENV, KYCStatus, RouteUrl } from "../models/constant.model";
import UpdatePassword from "../components/update-password";
import UpdateTwoFactor from "../components/update-two-factor";
import UpdateAlert from "../components/update-alert";
import UpdateLanguage from "../components/update-language";
import UpdateKyc from "../components/update-kyc";
import UpdateDocument from "../components/update-document";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import * as AccountService from "../services/account.service";
import { isEmpty } from "../utils";
import UpdateTradingMode from "../components/update-trading-mode";

const Setting = () => {
    const {t,i18n} = useTranslation();
    const navigate = useNavigate();
    
    const account = useSelector((state: RootState) => state.system.account);

    useEffect(() => {
        if (account) {
            if (!isEmpty(account.loginId)) {
                if (account.kyc) {
                } else {
                    getSelfieCode();
                }
            }
            
        }
    }, [account]);

    const getSelfieCode = () => {
        AccountService.getSelfieCode();
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
                            {t('setting')}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    const renderBody = () => {
        return (
            <div className="site-main" style={{ "paddingTop": "3rem" }}>
                <UpdateTradingMode />
                <hr className="my-2" />
                {APP_ENV === AppEnv.LIVE && 
                    <>
                        <UpdatePassword/>
                        <hr className="my-2" />
                        <UpdateKyc/>
                        <hr className="my-2" />
                        {account?.kyc?.firstName && <>
                            <UpdateDocument/>
                            <hr className="my-2" />
                        </>}
                        
                        <UpdateTwoFactor />
                        <hr className="my-2" />
                        <UpdateAlert/>
                        <hr className="my-2" />
                    </>
                }
                
                <UpdateLanguage/>
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
export default memo(Setting);