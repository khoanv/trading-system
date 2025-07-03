import { memo, useState, useEffect } from "react";
import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RouteUrl } from "../models/constant.model";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedSymbol, updateActiveSymbol } from "../redux/slice/system.slice";
import { RootState } from "../redux/store";
import SortableSymbol from "../components/row/sortable-symbol";
import { ReactSortable } from "react-sortablejs";
import useWindowDimensions  from "../hooks/useWindowDimensions";

interface ItemType {
    id: string;
    name: string;
}

const EditSymbol = () => {
    const { height, width } = useWindowDimensions();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const listSymbol = useSelector((state: RootState) => state.system.listSymbol);
    const selectedSymbol = useSelector((state: RootState) => state.system.selectedSymbol);
    const [symbols, setSymbols] = useState<ItemType[]>([]);
    const [removedSymbols, setRemovedSymbol] = useState<string[]>([]);

    useEffect(() => {
        if (listSymbol.length === 0) navigate(RouteUrl.MARKET);
        else {
            if (symbols.length === 0) {
                let itemList: ItemType[] = [];
                for (let sym of selectedSymbol) {
                    itemList.push({
                        id: sym,
                        name: sym
                    })
                }
                setSymbols(itemList);
            }

        }
    }, [listSymbol, selectedSymbol])

    useEffect(() => {
        if (symbols && symbols.length > 0) {
            let tmpList: string[] = [];
            for (let item of symbols) {
                tmpList.push(item.name);
            }
            dispatch(updateSelectedSymbol(tmpList))
        }
    }, [symbols]);

    const updateRemovedSymbol = (symbol: string, status: boolean) => {
        let tmp = [...removedSymbols];
        if (status) {
            if (removedSymbols.indexOf(symbol) < 0) tmp.push(symbol);
        } else tmp = tmp.filter(sym => sym !== symbol);
        setRemovedSymbol(tmp);
    }

    const removeSymbol = () => {
        if (removedSymbols.length > 0) {
            let listSym = selectedSymbol.filter(sym => !removedSymbols.includes(sym));
            dispatch(updateSelectedSymbol(listSym));

            let itemList: ItemType[] = [];
            for (let sym of listSym) {
                itemList.push({
                    id: sym,
                    name: sym
                })
            }
            setSymbols(itemList);
        }
    }

    const renderHeader = () => {
        return (
            <div className="site-header">
                <div className="container-fluid">
                    <div className="header-main py-2 d-flex justify-content-between align-items-center">
                        <div className="header-action me-2">
                            <button className="btn btn-icon bg-transparent text-primary" onClick={() => navigate(RouteUrl.MARKET)}>
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        <h4 className="page-title text-primary flex-grow-1 mb-0">
                            {t('editPair')}
                        </h4>
                        <div className="header-action">
                            <button className="btn btn-icon btn-danger text-white" onClick={removeSymbol}>
                                <i className="fa-sharp fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderBody = () => {
        let mHeight = 0;
        if (height) mHeight = height - 60;

        return (
            <div className="site-main" style={{ paddingTop: '3rem' }}>
                <div className="tab-content table-responsive py-2 pt-3" style={{maxHeight: mHeight}}>
                    <div className="d-flex container-fluid justify-content-between align-items-center">
                        <div className="text-uppercase small opacity-50">{t('pair')}</div>
                        <div className="text-uppercase small opacity-50">{t('order')}</div>
                    </div>
                    <ul className="list-group list-group-flush list-pair list-sortable">
                        <ReactSortable list={symbols} setList={setSymbols} handle=".sort-icon" animation={150}>
                            {symbols && symbols.map((sym, idx) => {
                                return (
                                    <SortableSymbol key={sym.id} symbol={sym.name} chooseSymbol={updateRemovedSymbol} />
                                )
                            })}
                        </ReactSortable>

                    </ul>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            {renderHeader()}
            {renderBody()}
        </Layout>
    )
}

export default memo(EditSymbol)