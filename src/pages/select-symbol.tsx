import { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/layout";
import { RootState } from "../redux/store";
import Symbol from "../components/row/symbol";
import { Page, RouteUrl } from "../models/constant.model";
import { isEmpty, isNull } from "../utils";
import useWindowDimensions  from "../hooks/useWindowDimensions";

const SelectSymbol = () => {
    const { height, width } = useWindowDimensions();
    const navigate = useNavigate();
    const listSymbol = useSelector((state: RootState) => state.system.listSymbol);
    const prePage = useSelector((state: RootState) => state.system.prePage);
    const selectedSymbol  = useSelector((state: RootState) => state.system.selectedSymbol);
    const [symbols, setSymbols] = useState<string[]>([]);
    const [addFlg, setAddFlg] = useState(true);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        if (listSymbol.length === 0)
            navigate(RouteUrl.MARKET);
        else {
            if (prePage === Page.MARKET){
                let tmpList = listSymbol.filter(sym => sym.includes(searchString.toUpperCase()));
                setSymbols(tmpList);
                setAddFlg(true);
            } else {
                let tmpList = selectedSymbol.filter(sym => sym.includes(searchString.toUpperCase()));
                setSymbols(tmpList);
                setAddFlg(false);
            } 
        } 
    }, [listSymbol,prePage,selectedSymbol])

    useEffect(() => {
        if (!isEmpty(searchString)) {
            if (addFlg) {
                let tmpList = listSymbol.filter(sym => sym.includes(searchString.toUpperCase()));
                setSymbols(tmpList);
            } else {
                let tmpList = selectedSymbol.filter(sym => sym.includes(searchString.toUpperCase()));
                setSymbols(tmpList);
            }
        }
    },[searchString])

    const changeSearchString = (e: any) => {
        let value = e.target.value;
        
        if (!isNull(value)) {
            setSearchString(value.trim());
        }
    }

    const goBack = () => {
        let backUrl = RouteUrl.MARKET;
        if (prePage === Page.CHART) backUrl = RouteUrl.CHART;
        if (prePage === Page.NEW_ORDER) backUrl = RouteUrl.NEW_ORDER;

        navigate(backUrl);
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid">
                    <div className="header-main py-2 d-flex justify-content-between align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={goBack}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <div className="input-group input-group-search flex-grow-1">
                            <div className="input-group-text ps-3 bg-white border-end-0 icon-search pe-0"><i className="fa-solid fa-magnifying-glass"></i></div>
                            <input type="text" className="form-control bg-white border-start-0 border-end-0" value={searchString} onChange={(e) => changeSearchString(e)} placeholder="" />
                            <button className="input-group-text bg-white border-start-0 small btn-remove" onClick={() => setSearchString("")}><i className="fa-sharp fa-solid fa-circle-xmark"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderSymbolList = () => {
        let mHeight = 0;
        if (height) mHeight = height - 90;

        return (
            <div className="site-main" style={{"paddingTop": "3.5rem"}}>
                <div className="table-responsive mb-3 pt-1" style={{maxHeight: mHeight}}>
                    <ul className={`list-group list-group-flush list-pair ${addFlg ? 'list-add-pair' : ''}  mb-0`}>
                        {symbols && symbols.map((sym,idx) => {
                            return (
                                <Symbol key={sym} symbol={sym} addFlg={addFlg}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            {renderHeader()}
            {renderSymbolList()}
        </Layout>
    )
}

export default memo(SelectSymbol)