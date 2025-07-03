import { useState, useEffect, memo, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import { formatNumber, formatTime } from "../../utils";

interface Props {
    symbol: string,
    onClickHandle: (sym: string) => void
}

const AdvanceRate = (props: Props) => {
    const { t } = useTranslation();
    const { symbol, onClickHandle } = props;

    const quote = useSelector((state: RootState) => state.quote[symbol]);
    const symbolInfo = useSelector((state: RootState) => state.system.mapSymbol[symbol]);
    const preQuote = useRef({ quote }).current;

    useEffect(() => {
        preQuote.quote = quote;
    }, [quote])

    const getColor = useMemo(() => {
        let bidColor = "";
        let askColor = "";
        if (quote && preQuote.quote) {
            if (quote.bid > preQuote.quote.bid) bidColor = "up";
            else if (quote.bid < preQuote.quote.bid) bidColor =  "down";
            else bidColor = "";

            if (quote.ask > preQuote.quote.ask) askColor = "up";
            else if (quote.ask < preQuote.quote.ask) askColor = "down";
            else askColor = "";
        }
        return [bidColor, askColor];
    }, [quote])

    const formatPrice = useMemo(() => {
        let tmp = formatNumber(quote?.bid,symbolInfo?.priceDigit);
        let bid1 = "";
        let bid2 = "";
        let ask1 = "";
        let ask2 = "";
        if (tmp) {
            bid1 = tmp.substring(0, tmp.length - 2);
            bid2 = tmp.substring(tmp.length - 2, tmp.length);
        }

        tmp = formatNumber(quote?.ask,symbolInfo?.priceDigit);
        if (tmp) {
            ask1 = tmp.substring(0, tmp.length - 2);
            ask2 = tmp.substring(tmp.length - 2, tmp.length);
        }
        return [bid1,bid2,ask1,ask2]
    },[quote])

    return (
        <tr className="align-middle" onClick={() => onClickHandle(symbol)}>
            <td className="pt-1 pb-1">
                <div className="small opacity-50">{formatTime(quote?.feedTime)}</div>
                <div className="lh-1"><strong>{symbol}</strong></div>
                <div className="small">{t('spread')}: {formatNumber(quote?.spread,2)}</div>
            </td>
            <td className="pt-1 pb-1">
                <div className={`lh-1 ${getColor[0]} text-end`}><span className="fs-4">{formatPrice[0]}</span><span>{formatPrice[1]}</span></div>
                <div className="small text-end">{t('low')}: {formatNumber(quote?.low, symbolInfo?.priceDigit)}</div>
            </td>
            <td className="pt-1 pb-1">
                <div className={`lh-1 ${getColor[1]} text-end`}><span className="fs-4">{formatPrice[2]}</span><span>{formatPrice[3]}</span></div>
                <div className="small text-end">{t('high')}: {formatNumber(quote?.high, symbolInfo?.priceDigit)}</div>
            </td>
        </tr>
    )
}

export default memo(AdvanceRate);