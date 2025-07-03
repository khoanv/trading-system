import { useState, memo, useMemo, useEffect, useRef, useCallback } from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { RouteUrl, Page, Result, WebsocketState, QuoteEventMode, OrderType, System } from "../models/constant.model";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch, useStore } from "react-redux";
import { RootState } from "../redux/store";
import { formatNumber, formatNumberEx, isNull, getPositions, subcribeQuotes, getLastQuotes, getOpenOrders, unsubcribeQuotes, isEmpty } from "../utils";
import { useNavigate } from "react-router-dom";
import { setPrePage } from "../redux/slice/system.slice";
import { useWebSocket } from "../socket/useWebsocket";
import Position from "../components/row/position";
import OpenOrder from "../components/row/open-order";

const Trade = () => {
    const ws = useWebSocket();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const store = useStore();
    const rootState = store.getState() as RootState;

    const account = useSelector((state: RootState) => state.system.account);
    const positions = useSelector((state: RootState) => state.system.positions);
    const openOrders = useSelector((state: RootState) => state.system.openOrders);
    const activeSymbol = useSelector((state: RootState) => state.system.activeSymbol);

    const [accountBalance, setAccountBalance] = useState(0);
    const [accountEquity, setAccountEquity] = useState(0);
    const [availableMargin, setAvailableMargin] = useState(0);
    const [marginRequire, setMarginRequire] = useState(0);
    const [marginLevel, setMarginLevel] = useState(0);
    const [openPl, setOpenPl] = useState(0);
    const listSubRate = useRef<string[]>([]);
    const listPositionSymbol = useRef<string[]>([]);
    const listOpenOrderSymbol = useRef<string[]>([]);

    const mapPl = useRef<Map<string,number>>(new Map<string,number>());

    useEffect(() => {
        if (ws && ws.readyState === WebsocketState.OPEN) {
            getPositions(ws);
            getOpenOrders(ws);
        }

        return () => {
            if (!isNull(ws) && ws.readyState === WebsocketState.OPEN) {
                unsubcribeQuotes(ws, listSubRate.current);
            }
        }
    }, [ws,activeSymbol])

    useEffect(() => {
        if (!isEmpty(account.loginId)) {
            setAccountBalance(account.accountBalance);
        }
    }, [account])

    useEffect(() => {
        calculateMarginRequire();
        setAccountEquity(accountBalance + openPl);
    }, [accountBalance, openPl])

    useEffect(() => {
        if (positions !== null && positions.length > 0) {
            listSubRate.current = [];
            listPositionSymbol.current = [];
            for (let pos of positions) {
                const sym = pos.symbol;
                if (!listSubRate.current.includes(sym)) {
                    listSubRate.current.push(sym);
                }
                if (!listPositionSymbol.current.includes(sym)) {
                    listPositionSymbol.current.push(sym);
                }
                
                // let key = sym + pos.mamCode + pos.side;
                // actions.set(key, preMap.map.get(key) ? preMap.map.get(key) as number : 0);
            } 
            getLastQuotes(ws,listSubRate.current);
            subcribeQuotes(ws,listSubRate.current,QuoteEventMode.INTERVAL);
        } else {
            setOpenPl(0)
        } 
        calculateMarginRequire();
    }, [positions])

    useEffect(() => {
        if (openOrders !== null && openOrders.length > 0) {
            const listSymbol: string[] = [];
            listOpenOrderSymbol.current = [];
            for (let order of openOrders) {
                const sym = order.symbol;
                if (!listSubRate.current.includes(sym)) {
                    listSymbol.push(sym);
                    listSubRate.current.push(sym);
                }
                if (!listOpenOrderSymbol.current.includes(sym)) {
                    listOpenOrderSymbol.current.push(sym);
                }
            }
            if (listSymbol.length > 0)
                subcribeQuotes(ws,listSymbol,QuoteEventMode.INTERVAL);
        }
        calculateMarginRequire();
    }, [openOrders])

    useEffect(() => {
        if (marginRequire > 0) {
            let availMargin = (accountEquity * 100) / 105 - marginRequire;
            const mLevel = (accountEquity * 100) / marginRequire;
            setAvailableMargin(availMargin);
            setMarginLevel(mLevel);
        } else {
            setAvailableMargin(accountBalance);
            setMarginLevel(0)
        }
    }, [marginRequire,accountEquity])

    const calculateMarginRequire = () => {
        try {
            let totalMarginRequired = 0;
            if (positions) {
                for (let symbol of listPositionSymbol.current) {
                    const listPos = positions.filter(pos => pos.symbol === symbol);
                    let netAmount = 0;
                    let mAmount = 0;
                    for (let pos of listPos) {
                        netAmount = netAmount + pos.amount;
                        mAmount = pos.amount;
                    }
                    if (netAmount === 0) {
                        netAmount = Math.abs(mAmount);
                    }
                    const positionAmount = Math.abs(netAmount);

                    const listOpenOrder = openOrders.filter(order => order.symbol === symbol);
                    for (let order of listOpenOrder) {
                        if (order.orderType !== OrderType.IFD2 && order.orderType !== OrderType.IFO2 && order.orderType !== OrderType.IFO3)
                            netAmount = netAmount + Number(order.originalAmount) * order.side;
                    }

                    let remainAmount = Math.abs(netAmount);
                    if (positionAmount > remainAmount) remainAmount = positionAmount;

                    const symbolInfo = rootState.system.mapSymbol[symbol];
                    const marginRequired = (remainAmount / symbolInfo.leverage) * getConvertRate(symbol);
                    totalMarginRequired = totalMarginRequired + marginRequired;
                }
            }

            if (openOrders) {
                for (let symbol of listOpenOrderSymbol.current) {
                    const tmpPos = positions.filter(pos => pos.symbol === symbol);
                    if (tmpPos.length === 0) {
                        let netAmount = 0;
                        const listOrder = openOrders.filter(order => order.symbol === symbol);
                        for (let order of listOrder) {
                            if (order.orderType != OrderType.IFD2 && order.orderType != OrderType.IFO2 && order.orderType != OrderType.IFO3)
                                netAmount = netAmount + Math.abs(order.originalAmount);
                        }
                        let remainAmount = Math.abs(netAmount);
                        const symbolInfo = rootState.system.mapSymbol[symbol];
                        const marginRequired = (remainAmount / symbolInfo.leverage) * getConvertRate(symbol);
                        totalMarginRequired = totalMarginRequired + marginRequired;
                    }
                }
            }
            setMarginRequire(totalMarginRequired);
        } catch(e) {}
        
    }

    const getConvertRate = (symbol : string) => {
        try {
            const symbolInfo = rootState.system.mapSymbol[symbol];
            const quoteSymbol = rootState.quote[symbol];
            const baseCcy = symbolInfo.baseCcy;
            const counterCcy = symbolInfo.counterCcy;

            if (baseCcy === System.BASE_CCY) return 1;

            let sym = baseCcy + System.BASE_CCY;
            let quote = rootState.quote[sym];
            if (!isNull(quote)) return quote.bid;

            sym = System.BASE_CCY + baseCcy;
            quote = rootState.quote[sym];
            if (!isNull(quote)) return 1 / quote.ask;

            sym = counterCcy + System.BASE_CCY;
            quote = rootState.quote[sym];
            if (!isNull(quote) && !isNull(quoteSymbol)) return quote.bid * quoteSymbol.bid;

            sym = System.BASE_CCY + counterCcy;
            quote = rootState.quote[sym];
            if (!isNull(quote) && !isNull(quoteSymbol)) return quoteSymbol.bid / quote.ask;
        }catch(e) {}

        return 1;
    }

    const updateOpenPl = (key: string, pl: number) => {
        if (!isEmpty(key) && !isNaN(pl)) {
            mapPl.current?.set(key,pl);
            sumOpenPl();
        }
        
    }

    const sumOpenPl = () => {
        let pl = 0;
        Array.from( mapPl.current?.entries()).map(([key, value]) => {
            pl = pl + value;
        })
        setOpenPl(pl);
    }

    const gotoNewOrder = () => {
        dispatch(setPrePage(Page.TRADE));
        navigate(RouteUrl.NEW_ORDER);
    }

    const renderHeader = useMemo(() => {
        return (
            <div className="site-header">
                <div className="container-fluid border-solid-bottom">
                    <div className="header-main py-2 d-flex justify-content-between align-items-center">
                        <div style={{width:"5%"}}>
                            <h5 className="fw-normal mb-0" onClick={() => navigate(RouteUrl.HISTORY)}>
                                <span className="text-primary"><i className="fa-sharp fa-solid fa-square-list me-2" style={{fontSize:"27px"}}></i></span>
                            </h5>
                        </div>
                        <div className="text-center" style={{width:"60%"}}>
                            <h5 className="fw-normal mb-0">
                                <span className={`${openPl >= 0 ? 'up' : 'down'}`}>{formatNumber(openPl, 2)}</span> USD
                            </h5>
                        </div>
                        
                        <div className="header-action">
                            <button className="btn btn-sm bg-white btn-outline-primary mx-2" onClick={() => navigate(RouteUrl.COPY_TRADE)}>{t('copyBtn')}</button>
                            <button className="btn btn-icon btn-success text-white" onClick={gotoNewOrder}><i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }, [openPl])

    const renderPositions = useMemo(() => {

        return (
            <div className="pt-2 pb-0">
                <div className="container-fluid">
                    <h6 className="text-uppercase">{t('position')}</h6>
                    {positions && positions.map((pos,idx) => {
                        return (
                            <Position key={pos.id} pos={pos} updateOpenPl={updateOpenPl}/>
                        )
                    })}
                </div>
            </div>
        )
    }, [positions]);

    const renderOpenOrders = useMemo(() => {
        return (
            <div className="pt-1">
                <div className="container-fluid">
                    <h6 className="text-uppercase">{t('openOrder')}</h6>
                    {openOrders && openOrders.map((o,idx) => {
                        return (
                            <OpenOrder order={o} key={o.orderId}/>
                        )
                    })}
                </div>
            </div>
        )
    }, [openOrders])

    const renderBalanceSummary = useMemo(() => {
        return (
            <div className="py-2 border-solid-bottom">
                <div className="container-fluid mb-1">
                    <div className="bg-white-opacity-75 rounded p-2 mt-1 border-solid">
                        <table className="table table-sm table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td className="text-secondary px-0 pt-0 py-1">{t('accountBalance')}</td>
                                    <td className="text-end fw-bold px-0 pt-0 py-1"><span>{formatNumber(accountBalance, 2)}</span></td>
                                </tr>
                                <tr>
                                    <td className="text-secondary px-0 pt-0 py-1">{t('accountEquity')}</td>
                                    <td className="text-end fw-bold px-0 pt-0 py-1"><span>{formatNumber(accountEquity, 2)}</span></td>
                                </tr>
                                <tr>
                                    <td className="text-secondary px-0 pt-0 py-1">{t('availableMargin')}</td>
                                    <td className="text-end fw-bold px-0 pt-0 py-1">
                                        <span className={`${availableMargin < 0 ? 'down': ''}`}>{formatNumber(availableMargin, 2)}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-secondary px-0 pt-0 py-1">{t('marginLevel')} (%)</td>
                                    <td className="text-end fw-bold px-0 pt-0 py-1">
                                        <span className={`${marginLevel < 100 && marginRequire > 0 ? 'down': ''}`}>{formatNumber(marginLevel, 2)}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }, [accountBalance, accountEquity, availableMargin, marginLevel])

    return (
        <Layout>
            {renderHeader}

            <div className="site-main" style={{ paddingTop: "3rem" }}>
                <div className="table-responsive">
                    {renderBalanceSummary}
                    {positions.length > 0 && renderPositions}
                    {openOrders.length > 0 && renderOpenOrders}
                </div>
                
            </div>
            <Footer page={Page.TRADE} />
        </Layout>
    )
}

export default memo(Trade);