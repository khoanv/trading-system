import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LocalStorageKey, Result, RouteUrl, TwoFactorAction } from "../models/constant.model";
import { BaseResponse, CustomerProfileResponse } from "../models/response.model";
import * as AccountService from "../services/account.service";
import * as Notification from "../components/notify";
import { Formik, Form, Field } from "formik";
import { Md5 } from "ts-md5";
import { JSEncrypt } from 'jsencrypt';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { TwoFactorState, updateCustomerProfile, updateTwoFactor } from "../redux/slice/system.slice";
import { isEmpty } from "../utils";
import { logout} from "../redux/slice/auth.slice";
import { LogoutAPIRequest } from "../models/request.model";
import { useWebSocket } from "../socket/useWebsocket";

const UpdatePassword = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ws = useWebSocket();

    const account = useSelector((state: RootState) => state.system.account);
    const auth = useSelector((state: RootState) => state.auth);
    

    useEffect(() => {
        if (isEmpty(account.loginId)) getCustomerProfile();
    }, [account])

    const [hideCurrentPassword, setHideCurrentPassword] = useState<boolean>(true);
    const [hideNewPassword, setHideNewPassword] = useState<boolean>(true);
    const [hideNewPasswordConfirm, setHideNewPasswordConfirm] = useState<boolean>(true);

    const jsencrypt = new JSEncrypt();
    const publicKey = process.env.REACT_APP_PUBLICK_KEY as string;
    jsencrypt.setPublicKey(publicKey);

    const getCustomerProfile = () => {
        AccountService.getCustomerProfile().then((msg: any) => {
            let res = msg.data as CustomerProfileResponse;
            if (res.result === Result.SUCCESS) {
                dispatch(updateCustomerProfile(res.data));
            }
        })
    }

    const validateCurrentPassword = (value: any) => {
        let error;
        if (!value) error = i18n.t('currentPasswordRequire');
        else {
            let md5Pass = Md5.hashStr(value);
            if (auth.password !== md5Pass) error = i18n.t('currentPasswordInvalid');
        }
        return error;
    }

    const validateNewPassword = (value: any) => {
        let error;
        if (!value) error = i18n.t('newPasswordRequire');
        else if (!checkFormatPassword(value))
            error = i18n.t('passwordNote');
        else {
            let md5Pass = Md5.hashStr(value);
            if (auth.password === md5Pass) error = i18n.t('newPasswordError');
        }
        return error;
    }

    const validateNewPasswordConfirm = (confirmPass: any, pass: any) => {
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

    const doLogout = () => {
        ws.close();
        logout();
        let logoutRequest: LogoutAPIRequest = {};
        AccountService.logout(logoutRequest);
        localStorage.removeItem(LocalStorageKey.USER);
        window.location.href = RouteUrl.LOGIN;
    }

    const handleSubmit = (values: any) => {
        let twoFaOperation = JSON.parse(account.twoFaOperation);

        if (twoFaOperation !== null && twoFaOperation.updatePassword === 1) {
            let param: TwoFactorState = {
                preUrl: RouteUrl.SETTING,
                type: account.twoFaType,
                action: TwoFactorAction.UPDATE_PASSWORD,
                withdrawCcy: "",
                withdrawAddress: "",
                withdrawAmount: 0,
                memo: "",
                newPassword: jsencrypt.encrypt(values.newPassword) as string
            }
            dispatch(updateTwoFactor(param));
            navigate(RouteUrl.TWO_FACTOR);
        } else {
            let param = {
                loginId: account.loginId,
                password: jsencrypt.encrypt(values.newPassword)
            }
            AccountService.updateProfile(param).then((msg: any) => {
                const res = msg.data as BaseResponse;
                if (res.result === Result.SUCCESS) {
                    Notification.success(i18n.t('updatePasswordSuccess'));
                    doLogout();
                } else {
                    if (res.msgCode !== null && res.msgCode === 102)
                        Notification.error(i18n.t('passwordInvalid'));
                    else Notification.error(i18n.t('updatePasswordFail'));
                }
            })
        }
    }

    return (
        <div className="pt-3">
            <div className="container-fluid">
                <h6 className="text-primary text-uppercase mb-2"><strong>{t('updatePassword')}</strong></h6>
                <Formik initialValues={{
                    currentPassword: "",
                    newPassword: "",
                    confirmNewPassword: ""
                }}
                    onSubmit={(values) => handleSubmit(values)}>
                    {({ errors, touched, values }) => (
                        <div className="form-login mb-3">
                            <Form>
                                <div className={`input-group ${errors.currentPassword && touched.currentPassword ? 'mb-1' : 'mb-2'} `}>
                                    <div className="form-floating">
                                        <Field type={hideCurrentPassword ? "password" : "text"} name="currentPassword" className="form-control input_height border-end-0" placeholder={t('currentPassword')} validate={validateCurrentPassword} />
                                        <label htmlFor="currentPassword">{t('currentPassword')}</label>
                                    </div>
                                    <span className="input-group-text bg-transparent text-secondary border-start-0 cursor_pointer" onClick={() => setHideCurrentPassword(!hideCurrentPassword)}>
                                        {hideCurrentPassword && <i className="fa-regular fa-eye-slash"></i>}
                                        {!hideCurrentPassword && <i className="fa-regular fa-eye"></i>}
                                    </span>
                                </div>
                                {errors.currentPassword && touched.currentPassword && (
                                    <div className="text-danger mb-2">{errors.currentPassword}</div>
                                )}

                                <div className={`input-group ${errors.newPassword && touched.newPassword ? 'mb-1' : 'mb-2'} `}>
                                    <div className="form-floating">
                                        <Field type={hideNewPassword ? "password" : "text"} name="newPassword" className="form-control input_height border-end-0" placeholder={t('newPassword')} validate={validateNewPassword} />
                                        <label htmlFor="newPassword">{t('newPassword')}</label>
                                    </div>
                                    <span className="input-group-text bg-transparent text-secondary border-start-0 cursor_pointer" onClick={() => setHideNewPassword(!hideNewPassword)}>
                                        {hideNewPassword && <i className="fa-regular fa-eye-slash"></i>}
                                        {!hideNewPassword && <i className="fa-regular fa-eye"></i>}
                                    </span>
                                </div>
                                {errors.newPassword && touched.newPassword && (
                                    <div className="text-danger mb-2">{errors.newPassword}</div>
                                )}

                                <div className={`input-group ${errors.confirmNewPassword && touched.confirmNewPassword ? 'mb-1' : 'mb-3'} `}>
                                    <div className="form-floating">
                                        <Field type={hideNewPasswordConfirm ? "password" : "text"} name="confirmNewPassword" className="form-control input_height border-end-0" placeholder={t('confirmPassword')} validate={(value: any) => validateNewPasswordConfirm(value, values.newPassword)} />
                                        <label htmlFor="confirmNewPassword">{t('confirmPassword')}</label>
                                    </div>
                                    <span className="input-group-text bg-transparent text-secondary border-start-0 cursor_pointer" onClick={() => setHideNewPasswordConfirm(!hideNewPasswordConfirm)}>
                                        {hideNewPasswordConfirm && <i className="fa-regular fa-eye-slash"></i>}
                                        {!hideNewPasswordConfirm && <i className="fa-regular fa-eye"></i>}
                                    </span>
                                </div>
                                {errors.confirmNewPassword && touched.confirmNewPassword && (
                                    <div className="text-danger mb-2">{errors.confirmNewPassword}</div>
                                )}
                                <button className="btn btn-primary w-100 mb-0" type="submit">{t('updatePasswordBtn')}</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default memo(UpdatePassword);