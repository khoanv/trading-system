import { useState, useEffect, memo } from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import SimpleRate from "../components/row/simple-rate";
import AdvanceRate from "../components/row/advance-rate";
import { Page, MarketMode, LocalStorageKey, RouteUrl, WebsocketState, QuoteEventMode, APP_ENV, AppEnv, System, DEMO_URL, LIVE_URL } from "../models/constant.model";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setPrePage, updateActiveSymbol } from "../redux/slice/system.slice";
import { useNavigate } from "react-router-dom";
import { useWebSocket } from "../socket/useWebsocket";
import { isNull, subcribeQuotes, unsubcribeQuotes, getLastQuotes } from "../utils";
import * as CryptoJS from 'crypto-js';

const Market = () => {
    const ws = useWebSocket();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedSymbol = useSelector((state: RootState) => state.system.selectedSymbol);
    const auth = useSelector((state: RootState) => state.auth);
    const [demoUrl, setDemoUrl] = useState("");
    const [liveUrl, setLiveUrl] = useState("");

    const [mode, setMode] = useState(MarketMode.ADVANCE);

    useEffect(() => {
        if (auth) {
            try {
                let info = {
                    loginId: auth.loginId,
                    password: auth.password
                }
                let encryptText1 = CryptoJS.AES.encrypt(JSON.stringify(info), System.PRIVATE_KEY).toString();
                let encryptText = bytesToHex(stringToUTF8Bytes(encryptText1))
                let url = DEMO_URL + "?token=" + encryptText;
                setDemoUrl(url);
                setLiveUrl(LIVE_URL + "/market");
            } catch(e) {
                console.log(e)
            }
        }
    }, [auth])

    useEffect(() => {
        const currentMode = localStorage.getItem(LocalStorageKey.MARKET_MODE);
        if (currentMode !== null) {
            setMode(currentMode);
        }

        return () => {
            if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
                unsubcribeQuotes(ws, selectedSymbol);
            }
        }
    }, [])

    useEffect(() => {
        if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
            getLastQuotes(ws, selectedSymbol);
            subcribeQuotes(ws, selectedSymbol, QuoteEventMode.INTERVAL);
        }
    }, [ws,selectedSymbol])

    const bytesToHex = (bytes: any) =>{
        return Array.from(
            bytes,
            (byte: any) => byte.toString(16).padStart(2, "0")
        ).join("");
    }


    const stringToUTF8Bytes = (value: string) => {
        return new TextEncoder().encode(value);
    }

    const updateMode = (newMode: string) => {
        setMode(newMode);
        localStorage.setItem(LocalStorageKey.MARKET_MODE, newMode);
    }

    const gotoPage = (page: string) => {
        dispatch(setPrePage(Page.MARKET));
        navigate(page);
    }

    const onClickSymbol = (symbol: string) => {
        dispatch(updateActiveSymbol(symbol));
        localStorage.setItem(LocalStorageKey.ACTIVE_SYMBOL, symbol);
        navigate(RouteUrl.CHART);
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid">
                    <div className="header-main py-2 d-flex justify-content-between align-items-center">
                        <h4 className="page-title text-primary mb-0">
                            {t('market')}
                        </h4>
                        {APP_ENV === AppEnv.LIVE && <h4 className="text-center flex-grow-1 text-primary mb-0">
                            <a href={demoUrl} target="_blank" className="text-warning text-decoration-none">{t('demo')}</a>
                        </h4>}
                        {APP_ENV === AppEnv.DEMO && <h4 className="text-center flex-grow-1 text-primary mb-0">
                            <a href={liveUrl} className="text-success text-decoration-none">{t('live')}</a>
                        </h4>}
                        <div className="header-action">
                            <button className="btn btn-icon btn-outline-primary" onClick={() => gotoPage(RouteUrl.EDIT_SYMBOL)}><i className="fa-solid fa-pen"></i></button>
                            <button className="btn btn-icon btn-success text-white ms-2" onClick={() => gotoPage(RouteUrl.SELECT_SYMBOL)}><i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="header-bottom pb-2">
                        <div className="nav nav-pills nav-fill" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button type="button" id="nav-market-simple-tab" data-bs-toggle="tab" data-bs-target="#nav-market-simple"
                                    role="tab" aria-controls="nav-makert-simple" aria-selected="true" 
                                    onClick={() => updateMode(MarketMode.SIMPLE)}
                                    className={`nav-link w-100 ${mode === MarketMode.SIMPLE ? 'active' : ''} `}>
                                    {t('simple')}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" id="nav-market-advance-tab" data-bs-toggle="tab" data-bs-target="#nav-market-advance"
                                    role="tab" aria-controls="nav-makert-advance" aria-selected="true" 
                                    onClick={() => updateMode(MarketMode.ADVANCE)}
                                    className={`nav-link w-100 ${mode === MarketMode.ADVANCE ? 'active' : ''} `}>
                                    {t('advance')}
                                </button>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderSimpleMode = () => {
        return (
            <div className="table-responsive mx-n2x">
                <table className="table" cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th className="pb-1" style={{width: "33%"}}>{t('pair')}</th>
                            <th className="pb-1 text-end" style={{width: "33%"}}>{t('bid')}</th>
                            <th className="pb-1 text-end" style={{width: "33%"}}>{t('offer')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedSymbol.map((sym,idx) => {
                            return (
                                <SimpleRate symbol={sym} key={idx} onClickHandle={onClickSymbol}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    const renderAdvanceMode = () => {
        return (
            <div className="table-responsive mx-n2x">
                <table className="table" cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th className="pb-1" style={{width: "33%"}}>{t('pair')}</th>
                            <th className="pb-1 text-end" style={{width: "33%"}}>{t('bid')}</th>
                            <th className="pb-1 text-end" style={{width: "33%"}}>{t('offer')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedSymbol.map((sym,idx) => {
                            return (
                                <AdvanceRate symbol={sym} key={idx} onClickHandle={onClickSymbol}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <Layout>
            {renderHeader()}

            <div className="site-main">
                <div className="container-fluid">
                    <div className="tab-content py-0">
                        <div className={`tab-pane fade ${mode === MarketMode.SIMPLE ? 'show active' : ''} `} 
                            id="nav-market-simple" role="tabpanel" aria-labelledby="nav-market-simple-tab" tabIndex={0}>
                            {mode === MarketMode.SIMPLE && renderSimpleMode()}
                        </div>
                        <div className={`tab-pane fade ${mode === MarketMode.ADVANCE ? 'show active' : ''} `} 
                            id="nav-market-advance" role="tabpanel" aria-labelledby="nav-market-advance-tab" tabIndex={0}>
                            {mode === MarketMode.ADVANCE && renderAdvanceMode()}
                        </div>
                    </div>
                </div>
            </div>

            <Footer page={Page.MARKET} />
        </Layout>
    )
}

export default memo(Market);