import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { Formik, Form, Field } from "formik";
import { Result, RouteUrl } from "../models/constant.model";
import * as AccountService from "../services/account.service";
import * as Notification from "../components/notify";
import { BaseResponse } from "../models/response.model";

const ForgotPassword = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const validateEmail = (value: any) => {
        let error;
        if (!value) {
            error = i18n.t('emailRequire');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = i18n.t('emailInvalid');
        }

        return error;
    }

    const handleSubmit = (values: any) => {
        AccountService.resetPassword({loginId: values.email}).then((msg:any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t('sentResetPassLinkSuccess'));
                navigate(RouteUrl.LOGIN);
            }else {
                if (res.msgCode && res.msgCode === 101) {
                    Notification.error(i18n.t('emailNotExist'))
                } else Notification.error(i18n.t('resetPassFail'))
            }
        })
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(RouteUrl.LOGIN)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="page-title text-primary mb-0">
                            {t('resetPassword')}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    const renderBody = () => {
        return (
            <div className="site-main" style={{ paddingTop: "3rem" }}>
                <div className="py-2 pt-3">
                    <div className="container-fluid">
                        <Formik initialValues={{
                            email: ""
                        }}
                            onSubmit={(values) => handleSubmit(values)}>
                            {({ errors, touched }) => (
                                <div className="form-login mb-5">
                                    <Form>
                                        <div className={`input-group ${errors.email && touched.email ? 'mb-1' : 'mb-3'} `}>
                                            <div className="form-floating">
                                                <Field type="email" name="email" className="form-control border-end-0" placeholder={t('email')} validate={validateEmail} />
                                                <label htmlFor="email">{t('email')}</label>
                                            </div>
                                            <span className="input-group-text bg-transparent text-secondary border-start-0"><i className="fa-regular fa-envelope"></i></span>
                                        </div>
                                        {errors.email && touched.email && (
                                            <div className="text-danger mb-3">{errors.email}</div>
                                        )}
                                        <button className="btn btn-primary w-100 mb-2">{t('resetBtn')}</button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
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
export default memo(ForgotPassword);
