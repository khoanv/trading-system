import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { updateSelectedSymbol, updateActiveSymbol } from "../../redux/slice/system.slice";
import { useNavigate } from "react-router-dom";
import { Page, RouteUrl } from "../../models/constant.model";

interface Props {
    symbol: string,
    addFlg: boolean
}

const Symbol = (props: Props) => {
    const { symbol,addFlg } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [ checkFlg, setCheckFlg] = useState(false);

    const selectedSymbol = useSelector((state: RootState) => state.system.selectedSymbol);
    const activeSymbol = useSelector((state: RootState) => state.system.activeSymbol);
    const prePage = useSelector((state: RootState) => state.system.prePage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (addFlg) {
            if (selectedSymbol.includes(symbol)) setCheckFlg(true);
            else setCheckFlg(false);
        } else {
            if (activeSymbol === symbol) setCheckFlg(true);
            else setCheckFlg(false);
        }
    }, [selectedSymbol,activeSymbol])

    const handleSymbolClick = () => {
        if (addFlg) {
            let tmpSymbol = [...selectedSymbol];
            if (activeSymbol !== symbol){
                if (checkFlg) tmpSymbol = tmpSymbol.filter(sym => sym !== symbol); 
                else  tmpSymbol.push(symbol); 
                dispatch(updateSelectedSymbol(tmpSymbol));

                setCheckFlg(!checkFlg);
            }
        } else {
            dispatch(updateActiveSymbol(symbol));
            setCheckFlg(!checkFlg);
            let page = Page.CHART;
            if (prePage === Page.CHART) page = RouteUrl.CHART;
            if (prePage === Page.NEW_ORDER) page = RouteUrl.NEW_ORDER;
            navigate(page);
        }
    }

    return (
        <li className="list-group-item bg-transparent" onChange={handleSymbolClick}>
            <input className="form-check-input me-1 mt-2"  type="checkbox" value="" id={`pair_${symbol}`} checked={checkFlg} onChange={()=>{}}/>
            
            <label className="form-check-label" htmlFor={`pair_${symbol}`} >
                <span className="fw-bold d-block">{symbol}</span>
                <span className="d-block lh-1">{t(symbol)}</span>
            </label>
        </li>
    )
}

export default memo(Symbol);