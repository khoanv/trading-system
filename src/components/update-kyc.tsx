import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { isEmpty } from "../utils";
import * as Notification from "../components/notify";
import * as AccountService from "../services/account.service";
import { BaseResponse } from "../models/response.model";
import { Result } from "../models/constant.model";

const UpdateKYC = () => {
    const { t, i18n } = useTranslation();

    const account = useSelector((state: RootState) => state.system.account);

    const handleSubmit = (values: any) => {
        console.log(values);
        let kyc = {...account.kyc};

        kyc.firstName = values.firstName;
        kyc.middleName = values.middleName;
        kyc.lastName = values.lastName;
        kyc.country = values.country;
        kyc.address = values.address;

        let param = {
            kyc: kyc,
            loginId: account.loginId
        }

        AccountService.updateProfile(param).then((msg: any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notification.success(i18n.t("updateSettingSuccess"));
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else Notification.error(i18n.t("updateSettingFail"));
        })
    }

    const validateRequire = (value: any) => {
        let error;
        if (!value) error = i18n.t('fieldRequired');
        return error;
    }

    return (
        <div className="py-2 mt-2">
            <div className="container-fluid">
                <h6 className="text-primary text-uppercase mb-2"><strong>{t('kyc')}</strong></h6>

                {!isEmpty(account.loginId) && <Formik initialValues={{
                    firstName: account.kyc?.firstName,
                    middleName: account.kyc?.middleName,
                    lastName: account.kyc?.lastName,
                    country: account.kyc?.country,
                    address: account.kyc?.address
                }} 
                    onSubmit={(values) => handleSubmit(values)}>
                    {({ errors, touched, values }) => (
                        <Form>
                            <div className="d-flex justify-content-between mb-0 align-items-center">
                                <div className="text-secondary">{t('lastName')}</div>
                            </div>
                            <div className={`input-group ${errors.lastName && touched.lastName ? 'mb-1' : 'mb-2'} `}>
                                <Field type="text" name="lastName" className="form-control" validate={validateRequire} />
                            </div>
                            {errors.lastName && touched.lastName && (
                                <div className="text-danger mb-2">{errors.lastName}</div>
                            )}

                            <div className="d-flex justify-content-between mb-0 align-items-center">
                                <div className="text-secondary">{t('middleName')}</div>
                            </div>
                            <div className={`input-group mb-2`}>
                                <Field type="text" name="middleName" className="form-control"/>
                            </div>

                            <div className="d-flex justify-content-between mb-0 align-items-center">
                                <div className="text-secondary">{t('firstName')}</div>
                            </div>
                            <div className={`input-group ${errors.firstName && touched.firstName ? 'mb-1' : 'mb-2'} `}>
                                <Field type="text" name="firstName" className="form-control" validate={validateRequire} />
                            </div>
                            {errors.firstName && touched.firstName && (
                                <div className="text-danger mb-2">{errors.firstName}</div>
                            )}

                            <div className="d-flex justify-content-between mb-0 align-items-center">
                                <div className="text-secondary">{t('country')}</div>
                            </div>
                            <div className={`input-group ${errors.country && touched.country ? 'mb-1' : 'mb-2'} `}>
                                <Field as="select" name="country" className="form-control" validate={validateRequire} > 
                                    <option value="">{t('select')}</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="China">China</option>
                                    <option value="Korea">Korea</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="French">French</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Russian">Russian</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                </Field>
                            </div>
                            {errors.country && touched.country && (
                                <div className="text-danger mb-2">{errors.country}</div>
                            )}

                            <div className="d-flex justify-content-between mb-0 align-items-center">
                                <div className="text-secondary">{t('address')}</div>
                            </div>
                            <div className={`input-group ${errors.address && touched.address ? 'mb-1' : 'mb-3'} `}>
                                <Field type="text" name="address" className="form-control" validate={validateRequire} />
                            </div>
                            {errors.address && touched.address && (
                                <div className="text-danger mb-2">{errors.address}</div>
                            )}

                            <button className="btn btn-primary w-100 mb-0" type="submit">{t('updateBtn')}</button>
                        </Form>
                    )}
                </Formik>}

            </div>
        </div>
    )
}
export default memo(UpdateKYC);