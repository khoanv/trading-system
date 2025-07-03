import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { DEFAULT_LANG, LocalStorageKey } from "../models/constant.model";
import { RootState } from "../redux/store";
import * as AccountService from "../services/account.service";

const UpdateLanguage = () => {
    const { t, i18n } = useTranslation();

    const account = useSelector((state: RootState) => state.system.account);

    let currentLanguage = DEFAULT_LANG;
    if (localStorage.getItem(LocalStorageKey.LANGUAGE))
        currentLanguage = localStorage.getItem(LocalStorageKey.LANGUAGE) as string;

    const [language, setLanguage] = useState(currentLanguage);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])

    const changeLanguage = (e: any) => {
        const value = e.target.value;
        if (value === "en" || value === "ja" || value === "vi") {
            setLanguage(value);
            localStorage.setItem(LocalStorageKey.LANGUAGE, value);

            let lang = value.toUpperCase();
            if (lang == "JA") lang = "JP";

            updateProfile(lang);
        } else {
            setLanguage("en");
            localStorage.setItem(LocalStorageKey.LANGUAGE, "en");
            updateProfile("EN");
        }
    }

    const updateProfile = (lang: string) => {
        let guiSetting = JSON.parse(account.guiSetting);
        guiSetting.lang = lang;

        let param = {
            guiSetting: JSON.stringify(guiSetting) + "",
            loginId: account.loginId
        }

        AccountService.updateProfile(param).then((msg: any) => {

        })
    }

    return (
        <div className="py-2 mt-2">
            <div className="container-fluid">
                <h6 className="text-primary text-uppercase mb-2"><strong>{t('language')}</strong></h6>
                <div className="mb-3">
                    <select className="form-select" value={language} onChange={changeLanguage}>
                        <option value="en">{t('english')}</option>
                        <option value="ja">{t('japanese')}</option>
                        <option value="vi">{t('vietnamese')}</option>
                        <option value="cn">{t('chinese')}</option>
                        <option value="kr">{t('korean')}</option>
                        <option value="in">{t('indonesian')}</option>
                        <option value="de">{t('german')}</option>
                        <option value="fr">{t('french')}</option>
                        <option value="it">{t('italian')}</option>
                        <option value="es">{t('spanish')}</option>
                        <option value="pt">{t('portuguese')}</option>
                        <option value="ru">{t('russian')}</option>
                        <option value="ar">{t('arabic')}</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default memo(UpdateLanguage)