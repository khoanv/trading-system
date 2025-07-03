import { memo, useState } from "react";
import { useSelector} from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
    symbol: string,
    chooseSymbol: (sym: string, status: boolean) => void
}

const SortableSymbol = (props: Props) => {
    const { symbol, chooseSymbol } = props;
    const [checkFlg, setCheckFlg] = useState(false);

    const activeSymbol = useSelector((state: RootState) => state.system.activeSymbol);


    const handleOnChange = () => {
        if (activeSymbol !== symbol) {
            if (!checkFlg) chooseSymbol(symbol,true);
            else chooseSymbol(symbol,false);
            setCheckFlg(!checkFlg);
        }
    }

    return (
        <li className="list-group-item bg-transparent border-rl-none" onChange={handleOnChange}>
            {activeSymbol !== symbol && <input className="form-check-input me-1" type="checkbox" value="" id={`pair_${symbol}`} checked={checkFlg} onChange={() => {}} /> }
            <label style={{width:"70%"}} className={`form-check-label fw-bold ${activeSymbol === symbol ? 'ml-2' : ''}`} htmlFor={`pair_${symbol}`}>{symbol}</label>
            <label className="sort-icon text-end px-1"><i className=" fa-light fa-bars " style={{fontSize: "16px"}}></i></label>
        </li>
    )
}
export default memo(SortableSymbol);