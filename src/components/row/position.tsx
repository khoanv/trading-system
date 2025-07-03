import { memo, useEffect, useMemo, useState } from "react";
import { PositionInfo } from "../../models/object.model";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState } from "../../redux/store";
import { ExecuteType, OrderSide, OrderStatus, OrderType, RouteUrl, System, TimeInforce } from "../../models/constant.model";
import { useTranslation } from "react-i18next";
import { formatNumber, formatNumberEx, sendOrderRequest } from "../../utils";
import { Order } from "../../models/proto/trading_model_pb";
import { useWebSocket } from "../../socket/useWebsocket";
import { setPositionForUpdate } from "../../redux/slice/system.slice";
import { useNavigate } from "react-router-dom";

interface Props {
    pos: PositionInfo,
    updateOpenPl: (key: string, pl: number) => void
}
const Position = (props: Props) => {
    const { pos, updateOpenPl } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const ws = useWebSocket();
    const dispatch = useDispatch();
    const symbolInfo = useSelector((state: RootState) => state.system.mapSymbol[pos.symbol]);
    const quote = useSelector((state: RootState) => state.quote[pos.symbol]);
    const store = useStore();
    const rootState = store.getState() as RootState;
    const [positionKey, setPositionKey] = useState("");

    useEffect(() => {
        if (pos) {
            let key = (pos?.symbol) + (pos?.mamCode) + pos.side;
            setPositionKey(key)
        }
    }, [pos])

    const updatePosition = () => {
        dispatch(setPositionForUpdate(pos));
        navigate(RouteUrl.UPDATE_POSITION);
    }

    const closePosition = () => {
        dispatch(setPositionForUpdate(pos));
        navigate(RouteUrl.CLOSE_POSITION);
    }

    const getConvertRate = (pipPl: number) => {
        try {
            if (symbolInfo.counterCcy === System.BASE_CCY) return 1;

            let sym = symbolInfo.counterCcy + System.BASE_CCY;
            if (rootState.quote[sym]) {
                if (pipPl >= 0) return rootState.quote[sym].bid;
                else return rootState.quote[sym].ask;
            }

            sym = System.BASE_CCY + symbolInfo.counterCcy;
            if (rootState.quote[sym]) {
                if (pipPl >= 0) return 1 / rootState.quote[sym].ask;
                else return 1 / rootState.quote[sym].bid;
            }
            return 0;
        } catch (e) {
            return 0;
        }
    }

    const calculatePl = useMemo(() => {
        let openPl = 0;
        let pipPl = 0;
        let convertRate = 0;
        if (quote) {
            let vwapPrice = pos.vwapPrice;
            let amount = pos.amount;

            if (amount >= 0) pipPl = (quote.bid - vwapPrice) / symbolInfo?.pipSize;
            else pipPl = (vwapPrice - quote.ask) / symbolInfo?.pipSize;

            convertRate = getConvertRate(pipPl);
            openPl = pipPl * Math.abs(amount) * convertRate * symbolInfo?.pipSize;
            openPl = Math.floor(openPl * 100) / 100;
            updateOpenPl(positionKey, openPl);
        }

        return [pipPl, openPl];
    }, [quote, pos])

    const getMarketPrice = () => {
        let marketPrice = null;
        if (pos.side === OrderSide.BUY)
            marketPrice = formatNumber(quote?.bid, symbolInfo?.priceDigit);
        else marketPrice = formatNumber(quote?.ask, symbolInfo?.priceDigit);
        return marketPrice;
    }

    return (
        <div className="card card-position mb-2">
            <button className="p-2 border-0 bg-transparent w-100 text-start" data-bs-toggle="collapse" data-bs-target={`#position-${pos.id}`} role="button" aria-expanded="true" aria-controls="">
                <div className="d-flex justify-content-between">
                    <div>
                        <div>
                            <strong className="text-dark">{pos.symbol}</strong>&nbsp;
                            <span className={`${pos.side === OrderSide.BUY ? 'up' : 'down'} text-uppercase`}>
                                {pos.side === OrderSide.BUY ? t('buy') : t('sell')} {formatNumber(Math.abs(pos.amount / symbolInfo?.lotSize), 2)}
                            </span>
                        </div>
                        <div className="small"><span className="text-secondary">
                            {formatNumber(pos.vwapPrice, symbolInfo?.priceDigit)}</span>&nbsp;
                            <i className="fa-regular fa-right-long"></i>&nbsp;
                            <span className="text-dark">{getMarketPrice()}</span>
                        </div>
                    </div>
                    <div className={`fs-4 ${calculatePl[1] >= 0 ? 'up' : 'down'} `}><span>{formatNumber(calculatePl[1], 2)}</span></div>
                </div>
            </button>
            <div id={`position-${pos.id}`} className="card-body border-top bg-primary-light collapse p-2">
                <table className="table table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td className="text-secondary p-0" style={{width:"25%"}}>{t('pipPl')}</td>
                            <td className={`p-0 text-end ${calculatePl[0] >= 0 ? 'up' : 'down'} `} style={{width:"27.5%"}}>{formatNumber(calculatePl[0], 2)}</td>
                            <td style={{width:"20%"}}></td>
                            <td style={{width:"27.5%"}}></td>
                        </tr>
                        <tr>
                            <td className="text-secondary p-0">{t('tp')}</td>
                            <td className="text-end p-0">
                                {pos.tp && <span>{formatNumber(pos.tp, symbolInfo?.priceDigit)}</span>}
                            </td>
                            <td className="text-secondary p-0 ps-2">{t('sl')}</td>
                            <td className="text-end p-0">
                                {pos.sl && <span>{formatNumber(pos.sl, symbolInfo?.priceDigit)}</span>}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="p-0">
                                <button className="btn btn-sm btn-link px-0" onClick={updatePosition}><i className="fa-solid fa-pen"></i>{t('modifyBtn')}</button>
                            </td>
                            <td colSpan={2} className="text-end p-0">
                                <button className="btn btn-sm btn-danger rounded" onClick={closePosition}>{t('closeBtn')}</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default memo(Position);