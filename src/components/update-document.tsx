import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { isEmpty, isNull } from "../utils";
import axios from "axios";
import { KYCStatus, Requesturl, Result } from "../models/constant.model";
import { BaseResponse } from "../models/response.model";
import * as Notification from "../components/notify";
import * as AccountService from "../services/account.service";

const DocumentType = {
    PASSPORT: "passport",
    NATIONAL_ID: "nationalID"
}

const UpdateDocument = () => {
    const { t, i18n } = useTranslation();
    const account = useSelector((state: RootState) => state.system.account);

    const [documentType, setDocumentType] = useState(DocumentType.PASSPORT);
    const [file1, setFile1] = useState<File>();
    const [file2, setFile2] = useState<File>();
    const [selfieImg, setSelfieImg] = useState<File>();
    const [docImgError, setDocImgError] = useState("");
    const [selfieImgError, setSelfieImgError] = useState("");
    const [kycStatus, setKYCStatus] = useState<number>(KYCStatus.NOT_VERIFY);

    useEffect(() => {
        console.log("kycStatus = " + account.kyc?.passportStatus)
        if (account.kyc?.passportStatus) setKYCStatus(account.kyc?.passportStatus)
    }, [account])

    const changeDocsType = (e: any) => {
        let value = e.target.value;
        setDocumentType(value);

        if (value === DocumentType.PASSPORT) {
            if (!isNull(file1)) setDocImgError("");
        }
    }

    const changeFile1 = (e: any) => {
        setFile1(e.target.files[0]);

        if (documentType === DocumentType.PASSPORT)
            setDocImgError("");
        else if (!isNull(file2))
            setDocImgError("");
    }

    const changeFile2 = (e: any) => {
        setFile2(e.target.files[0]);
        if (!isNull(file1))
            setDocImgError("");
    }

    const changeSelfieImg = (e: any) => {
        setSelfieImg(e.target.files[0]);
        setSelfieImgError("");
    }

    const validateInfo = () => {
        let check = true;
        if (documentType === DocumentType.PASSPORT) {
            if (isNull(file1)) {
                setDocImgError(i18n.t('docsImgInvalid') as string);
                check = false;
            }
        } else {
            if (isNull(file1) || isNull(file2)) {
                setDocImgError(i18n.t('docsImgInvalid') as string);
                check = false;
            }
        }

        if (isNull(selfieImg)) {
            setSelfieImgError(i18n.t('selfieImgInvalid') as string);
            check = false;
        }

        if (isEmpty(account.kyc?.firstName)) {
            Notification.error(i18n.t('updateKYCFirst'));
            check = false;
        }
        return check;
    }

    const doVerify = () => {
        if (validateInfo()) {
            let formData: FormData = new FormData();
            if (file1) formData.append('files', file1, file1.name);
            if (documentType === DocumentType.NATIONAL_ID) {
                if (file2) formData.append('files', file2, file2.name);
            }

            if (selfieImg) formData.append('files', selfieImg, selfieImg.name);


            axios({
                method: "post",
                url: Requesturl.UPLOAD_DOCS,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (msg) {
                    console.log(msg);
                    const res = msg.data;
                    if (res.result === Result.SUCCESS) {
                        updateDocumentKYC(res.data.filePaths);
                    } else {
                        if (res.msgCode) {
                            Notification.error(i18n.t(String(res.msgCode)));
                        } else Notification.error(i18n.t('uploadDocsFail'))
                    }
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
    }

    const updateDocumentKYC = (filePath: any) => {
        let param = {
            kyc: {
                passportStatus: KYCStatus.VERIFYING,
                selfieStatus: KYCStatus.VERIFYING,
                passportUrl: JSON.stringify(filePath)
            },
            loginId: account.loginId
        }

        AccountService.updateProfile(param).then((msg: any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                setKYCStatus(KYCStatus.VERIFYING);
                Notification.success(i18n.t('uploadDocsSuccess'));
            }
        })
    }

    return (
        <div className="py-2 mt-2">
            <div className="container-fluid">
                {(kycStatus === KYCStatus.NOT_VERIFY || kycStatus === KYCStatus.REJECTED) && <h6 className="text-primary text-uppercase mb-2">
                    <strong>{t('verifyID')}</strong>
                </h6>}

                {(kycStatus === KYCStatus.VERIFYING || kycStatus === KYCStatus.VERIFIED) && 
                    <div className="d-flex justify-content-between align-items-center mb-0">
                        <h6 className="text-primary text-uppercase mb-2">
                            <strong>{t('verifyID')}</strong>
                        </h6>
                        <div>
                            {kycStatus === KYCStatus.VERIFYING && <strong className="text-yellow">{t('kycVerifying')}</strong>}
                            {kycStatus === KYCStatus.VERIFIED && <strong className="text-success">{t('kycVerified')}</strong>}
                        </div>
                    </div>}


                {(kycStatus === KYCStatus.NOT_VERIFY || kycStatus === KYCStatus.REJECTED) && <>
                    <div className="mb-2" onChange={changeDocsType}>
                        <div className="form-check form-check-inline size-b me-4">
                            <input type="radio" name="documentType" value={DocumentType.PASSPORT} className="form-check-input" id="typePassport"
                                checked={documentType === DocumentType.PASSPORT} onChange={() => { }} />
                            <label className="form-check-label" htmlFor="typePassport">
                                {t('passport')}
                            </label>
                        </div>
                        <div className="form-check form-check-inline size-b me-4">
                            <input type="radio" name="documentType" value={DocumentType.NATIONAL_ID} className="form-check-input" id="typeNationalID"
                                checked={documentType === DocumentType.NATIONAL_ID} onChange={() => { }} />
                            <label className="form-check-label" htmlFor="typeNationalID">
                                {t('nationID')}
                            </label>
                        </div>
                    </div>

                    <input type="file" className="form-control mb-0" accept="image/*" onChange={changeFile1} />
                    {documentType === DocumentType.NATIONAL_ID && <input type="file" className="form-control mb-0 mt-2" accept="image/*" onChange={changeFile2} />}
                    {!isEmpty(docImgError) && <span className="text-danger">{docImgError}</span>}

                    <h6 className="text-primary text-uppercase mb-2 mt-3"><strong>{t('selfieImage')}</strong></h6>
                    <input type="file" className="form-control mb-0" accept="image/*" onChange={changeSelfieImg} />
                    {!isEmpty(selfieImgError) && <span className="text-danger">{selfieImgError}</span>}

                    <p className="mt-2">{t('selfieCode')}<label className="mx-2 down">{account.kyc?.selfieCode}</label></p>
                    <img src="selfie.png" />
                    <div className="alert alert-primary mt-3">
                        <p className="text-uppercase text-primary mb-0">{t('tips')}</p>
                        <ul className="list-default small mb-0">
                            <li>{t('scanNote')}</li>
                            <li>{t('selfieNote')}</li>
                        </ul>
                    </div>

                    <button className="btn btn-primary w-100 mb-0" onClick={doVerify}>{t('verifyBtn')}</button>
                </>}

            </div>
        </div>
    )
}
export default memo(UpdateDocument);