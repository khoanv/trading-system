import { useEffect, useState, memo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { Md5 } from "ts-md5";
import { JSEncrypt } from 'jsencrypt';
import * as CryptoJS from 'crypto-js';
import * as AccountService from '../services/account.service';
import { BaseResponse, CaptchaResponse, LoginResponse } from '../models/response.model';
import { ApiRoute, LocalStorageKey, Result, RouteUrl, System, TwoFactorAction } from '../models/constant.model';
import { CustomerRegisterRequest, LoginAPIRequest } from '../models/request.model';
import { IUserInfo } from '../models/interface.model';
import * as Notification from '../components/notify';
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from 'react-redux';
import { AuthState, loginSuccess } from "../redux/slice/auth.slice";
import { TwoFactorState, updateTwoFactor } from "../redux/slice/system.slice";
import { isEmpty, isNull } from "../utils";

const Register = () => {
    const { i18n, t } = useTranslation();
    const navigate = useNavigate();

    const auth = useSelector((state: RootState) => state.auth);
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const dispatch = useDispatch();

    const jsencrypt = new JSEncrypt();
    const publicKey = process.env.REACT_APP_PUBLICK_KEY as string;
    jsencrypt.setPublicKey(publicKey);

    useEffect(() => {
        if (auth.token !== null)
            navigate("/market");
    }, [auth])

    const validateEmail = (value: any) => {
        let error;
        if (!value) {
            error = i18n.t('emailRequire');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = i18n.t('emailInvalid');
        }

        return error;
    }

    const validateNickname = (value: any) => {
        let error;
        if (!value) {
            error = i18n.t('nicknameRequire');
        }
        return error;
    }
    const validateSponsor = (value: any) => {
        let error;
        return error;
    }

    const validatePassword = (value: any) => {
        let error;
        if (!value) error = i18n.t('passwordRequire');
        else if (!checkFormatPassword(value))
            error = i18n.t('passwordNote');
        return error;
    }

    const handleSubmit = (values: any) => {
        let refCode = localStorage.getItem(LocalStorageKey.REF_CODE);
        let encryptPass = jsencrypt.encrypt(values.password) as string;
        let guiSetting = {
            products: [],
            accounts: [],
            lang: "VI"
        };
        let param: CustomerRegisterRequest = {
            loginId: values.email,
            password: encryptPass,
            ibRef: !isEmpty(values.sponsor) ? values.sponsor : null,
            nickname: values.nickname,
            guiSetting: JSON.stringify(guiSetting)
        }

        AccountService.register(param).then((msg: any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t('registerSuccess'));

                navigate(RouteUrl.LOGIN)
            }else {
                if (res.msgCode) {
                    if (res.msgCode === 102) Notification.error(i18n.t('passwordNote'));
                    else Notification.error(i18n.t(String(res.msgCode)));
                } else Notification.error(i18n.t('registerFail'));
            }
        }, error => {
            Notification.error(i18n.t('registerFail'));
        })
    }


    const checkFormatPassword = (password: string) => {
        let check =true;
        if (password != null && password != '') {
            let lowerCase   		= new RegExp('[a-z]'),
			upperCase   		= new RegExp('[A-Z]'),
			numbers     		= new RegExp('[0-9]'),
			specialCharacter     = new RegExp('[!,%,&,@,#,$,^,*,?,_,~]');

            if(password.length < 8) check = false;
            if (!password.match(lowerCase)) check = false;
            if (!password.match(upperCase)) check = false;
            if (!password.match(numbers)) check = false;
            if (!password.match(specialCharacter)) check = false;

        }else check = false;

        return check;
    }

    return (
        <div className="site page page-login">
            <div className="site-main" style={{paddingTop:"2rem"}}>
                <div className="container-fluid mt-auto table-responsive">
                    <div className="row justify-content-center">
                        <div className="col-10 col-xl-6 col-lg-8">
                            <div className="text-center fs-1 mb-4">
                                <img src="logo.png" style={{width: "200px"}}/>
                            </div>
                            
                            <div className="alert alert-warning border-0 small mb-3" role="alert">
                                <a href="https://m.minmaxfx.com" className="text-decoration-none"><span className="text-success"><i className="bi bi-lock-fill"></i> https://</span><span className="text-secondary">m.minmaxfx.com</span></a>
                            </div>
                            <Formik initialValues={{
                                nickname: "",
                                email: "",
                                password: "",
                                sponsor: localStorage.getItem(LocalStorageKey.REF_CODE) ? localStorage.getItem(LocalStorageKey.REF_CODE) : ""
                            }}
                                onSubmit={(values) => handleSubmit(values)}>
                                {({ errors, touched }) => (
                                    <div className="form-login mb-3">
                                        <Form>
                                            <div className={`input-group ${errors.nickname && touched.nickname ? 'mb-1' : 'mb-3'} `}>
                                                <div className="form-floating">
                                                    <Field type="text" name="nickname" className="form-control border-end-0" placeholder={t('nickname')} validate={validateNickname} />
                                                    <label htmlFor="nickname">{t('nickname')}</label>
                                                </div>
                                                <span className="input-group-text bg-transparent text-secondary border-start-0"><i className="fa-regular fa-user"></i></span>
                                            </div>
                                            {errors.nickname && touched.nickname && (
                                                <div className="text-danger mb-2">{errors.nickname}</div>
                                            )}
                                            <div className={`input-group ${errors.email && touched.email ? 'mb-1' : 'mb-3'} `}>
                                                <div className="form-floating">
                                                    <Field type="email" name="email" className="form-control border-end-0" placeholder={t('email')} validate={validateEmail} />
                                                    <label htmlFor="email">{t('email')}</label>
                                                </div>
                                                <span className="input-group-text bg-transparent text-secondary border-start-0"><i className="fa-regular fa-envelope"></i></span>
                                            </div>
                                            {errors.email && touched.email && (
                                                <div className="text-danger mb-2">{errors.email}</div>
                                            )}
                                            <div className={`input-group ${errors.password && touched.password ? 'mb-1' : 'mb-3'} `}>
                                                <div className="form-floating">
                                                    <Field type={hidePassword ? "password" : "text"} name="password" className="form-control border-end-0" placeholder={t('password')} validate={validatePassword} />
                                                    <label htmlFor="password">{t('password')}</label>
                                                </div>
                                                <span className="input-group-text bg-transparent text-secondary border-start-0 cursor_pointer" onClick={() => setHidePassword(!hidePassword)}>
                                                    {hidePassword && <i className="fa-regular fa-eye-slash"></i>}
                                                    {!hidePassword && <i className="fa-regular fa-eye"></i>}
                                                </span>
                                            </div>
                                            {errors.password && touched.password && (
                                                <div className="text-danger mb-2">{errors.password}</div>
                                            )}
                                            <div className={`input-group mb-3`}>
                                                <div className="form-floating">
                                                    <Field type="text" name="sponsor" className="form-control border-end-0" placeholder={t('sponsor')} validate={validateSponsor} />
                                                    <label htmlFor="sponsor">{t('sponsor')}</label>
                                                </div>
                                                <span className="input-group-text bg-transparent text-secondary border-start-0"><i className="fa-regular fa-user"></i></span>
                                            </div>
                                            <button className="btn btn-primary w-100 mb-2">{t('registerBtn')}</button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-auto">
                    <p className="text-center small">{t('haveAccount')} <a className="text-primary" onClick={() => navigate(RouteUrl.LOGIN)}>{t('loginNow')}</a></p>
                </div>
            </div>
        </div>
    )
}

export default memo(Register);