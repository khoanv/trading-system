import { useState, useEffect, memo, useRef, useMemo } from "react";
import { useSelector } from 'react-redux';
import { QuoteInfo } from "../../models/object.model";
import { RootState } from "../../redux/store";
import { formatNumber } from "../../utils";

interface Props {
    symbol: string,
    onClickHandle: (sym: string) => void
}

const SimpleRate = (props: Props) => {
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

    return (
        <tr className="align-middle" onClick={() => onClickHandle(symbol)}>
            <td><strong>{symbol}</strong></td>
            <td className={`text-end rate ${getColor[0]}`}><span>{formatNumber(quote?.bid, symbolInfo?.priceDigit)}</span></td>
            <td className={`text-end rate ${getColor[1]}`}><span>{formatNumber(quote?.ask, symbolInfo?.priceDigit)}</span></td>
        </tr>
    )
}

export default memo(SimpleRate);