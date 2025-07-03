import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { JSEncrypt } from 'jsencrypt';
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/layout";
import { Result, RouteUrl } from "../models/constant.model";
import { BaseResponse } from "../models/response.model";
import * as AccountService from "../services/account.service";
import * as Notification from "../components/notify";
import { Formik, Form, Field } from "formik";

const UpdatePassword = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const [hidePasswordConfirm, setHidePasswordConfirm] = useState<boolean>(true);
    const [code, setCode] = useState("");

    const jsencrypt = new JSEncrypt();
    const publicKey = process.env.REACT_APP_PUBLICK_KEY as string;
    jsencrypt.setPublicKey(publicKey);

    useEffect(() => {
        if (searchParams) {
            let code = searchParams.get("code");
            if (code) {
                validateUrl(code);
            } else navigate(RouteUrl.LOGIN);
        }
    }, [searchParams])

    const validateUrl = (code: string) => {
        AccountService.validateResetPasswordUrl({ token: code }).then((msg: any) => {
            let res = msg.data as BaseResponse;
            if (res.result !== Result.SUCCESS) {
                if (res.msgCode && res.msgCode === 507)
                    Notification.error(i18n.t('urlExpired'));
                else Notification.error(i18n.t('urlInvalid'));
                navigate(RouteUrl.LOGIN);
            } else setCode(code);
        })
    }

    const validatePassword = (value: any) => {
        let error;
        if (!value) error = i18n.t('passwordRequire');
        else if (!checkFormatPassword(value))
            error = i18n.t('passwordNote');
        return error;
    }

    const validateConfirmPassword = (confirmPass: any, pass: any) => {
        console.log(confirmPass + "->" + pass)
        let error;
        if (!confirmPass) error = i18n.t('confirmPasswordRequire');
        else if (confirmPass !== pass) error = i18n.t('confirmPasswordWrong');
        return error;
    }

    const checkFormatPassword = (password: string) => {
        let check = true;
        if (password != null && password != '') {
            let lowerCase = new RegExp('[a-z]'),
                upperCase = new RegExp('[A-Z]'),
                numbers = new RegExp('[0-9]'),
                specialCharacter = new RegExp('[!,%,&,@,#,$,^,*,?,_,~]');

            if (password.length < 8) check = false;
            if (!password.match(lowerCase)) check = false;
            if (!password.match(upperCase)) check = false;
            if (!password.match(numbers)) check = false;
            if (!password.match(specialCharacter)) check = false;

        } else check = false;

        return check;
    }

    const handleSubmit = (values: any) => {
        let param = {
            token: code,
            password: jsencrypt.encrypt(values.password)
        }
        AccountService.updatePassword(param).then((msg: any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t('updatePasswordSuccess'));
                navigate(RouteUrl.LOGIN);
            } else {
                if (res.msgCode !== null && res.msgCode === 102)
                    Notification.error(i18n.t('passwordInvalid'));
                else Notification.error(i18n.t('updatePasswordFail'));
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
                            {t('updatePassword')}
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
                            password: "",
                            confirmPassword: ""
                        }}
                            onSubmit={(values) => handleSubmit(values)}>
                            {({ errors, touched, values }) => (
                                <div className="form-login mb-5">
                                    <Form>
                                        <div className={`input-group ${errors.password && touched.password ? 'mb-1' : 'mb-3'} `}>
                                            <div className="form-floating">
                                                <Field type={hidePassword ? "password" : "text"} name="password" className="form-control border-end-0" placeholder={t('newPassword')} validate={validatePassword} />
                                                <label htmlFor="password">{t('newPassword')}</label>
                                            </div>
                                            <span className="input-group-text bg-transparent text-secondary border-start-0 cursor_pointer" onClick={() => setHidePassword(!hidePassword)}>
                                                {hidePassword && <i className="fa-regular fa-eye-slash"></i>}
                                                {!hidePassword && <i className="fa-regular fa-eye"></i>}
                                            </span>
                                        </div>
                                        {errors.password && touched.password && (
                                            <div className="text-danger mb-3">{errors.password}</div>
                                        )}
                                        <div className={`input-group ${errors.confirmPassword && touched.confirmPassword ? 'mb-1' : 'mb-3'} `}>
                                            <div className="form-floating">
                                                <Field type={hidePasswordConfirm ? "password" : "text"} name="confirmPassword" className="form-control border-end-0" placeholder={t('confirmPassword')} validate={(value: any) => validateConfirmPassword(value, values.password)} />
                                                <label htmlFor="confirmPassword">{t('confirmPassword')}</label>
                                            </div>
                                            <span className="input-group-text bg-transparent text-secondary border-start-0 cursor_pointer" onClick={() => setHidePasswordConfirm(!hidePasswordConfirm)}>
                                                {hidePasswordConfirm && <i className="fa-regular fa-eye-slash"></i>}
                                                {!hidePasswordConfirm && <i className="fa-regular fa-eye"></i>}
                                            </span>
                                        </div>
                                        {errors.confirmPassword && touched.confirmPassword && (
                                            <div className="text-danger mb-3">{errors.confirmPassword}</div>
                                        )}
                                        <button className="btn btn-primary w-100 mb-2" type="submit">{t('updatePasswordBtn')}</button>
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
export default memo(UpdatePassword)