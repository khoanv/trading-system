import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/layout";
import { Result, RouteUrl } from "../models/constant.model";
import { BaseResponse } from "../models/response.model";
import * as AccountService from "../services/account.service";
import * as Notification from "../components/notify";

const ActiveAccount = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams) {
            let code = searchParams.get("code");
            if (code) {
                activeAccount(code);
            } else navigate(RouteUrl.LOGIN);
        }
    }, [searchParams])

    const activeAccount = (code: string) => {
        AccountService.activeAccount(code).then((msg: any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t("activeAccountSuccess"));
            } else {
                if (res.msgCode && res.msgCode === 107)
                    Notification.error(i18n.t("accountActivated"));
                else Notification.error(i18n.t("activeAccountFail"));
            }
            navigate(RouteUrl.LOGIN);
        }, (error: any) => {
            Notification.error(i18n.t("activeAccountFail"));
            navigate(RouteUrl.LOGIN);
        })
    }

    return (
        <Layout>

        </Layout>
    )
}
export default memo(ActiveAccount);