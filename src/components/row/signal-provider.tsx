import { memo, useEffect, useState } from "react";
import { BaseResponse, ProviderInfo } from "../../models/response.model";
import { useTranslation } from "react-i18next";
import { formatNumber, isEmpty } from "../../utils";
import Select, { GroupBase } from 'react-select';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as AccountService from "../../services/account.service";
import { Result, SymbolType } from "../../models/constant.model";
import * as Notify from "../../components/notify";
import MultiSelect from "../common/multi-select";

interface Props {
    provider: ProviderInfo,
    index: number
}

interface IOption {
    value: string;
    label: string;
}

const SignalProvider = (props: Props) => {
    const { t, i18n } = useTranslation();
    const { provider, index } = props;

    const listSymbol = useSelector((state: RootState) => state.system.listSymbol);
    const mapSymbol = useSelector((state: RootState) => state.system.mapSymbol);

    const [copyStatus, setCopyStatus] = useState(false);
    const [copyStatus1, setCopyStatus1] = useState(false);
    const [copySide, setCopySide] = useState(1);
    const [copyRatio, setCopyRatio] = useState(100);

    const [multiValue, setMultiValue] = useState<IOption[]>([]);
    const [filterOptions, setFilterOptions] = useState<IOption[]>([]);

    const [selected, setSelected] = useState<IOption[]>([]);

    const [options, setOptions] = useState<IOption[]>([]);

    useEffect(() => {
        console.log(selected)
    }, [selected])

    useEffect(() => {
        if (listSymbol && mapSymbol) {
            let filters = [];
            for (let sym of listSymbol) {
                let symInfo = mapSymbol[sym];
                if (symInfo.symbolType === SymbolType.FOREX || symInfo.symbolType === SymbolType.COMMODITY )
                    filters.push({ value: sym, label: sym });
            } 

            // setFilterOptions(filters as any);
            setOptions(filters as any)
        }
    }, [listSymbol,mapSymbol])

    const handleMultiChange = (option: any) => {

        setMultiValue(option);
    }

    useEffect(() => {
        if (provider) {
            setCopyStatus(provider.copyStatus === 1 ? true : false);
            setCopyStatus1(provider.copyStatus === 1 ? true : false);
            setCopySide(provider.copySide);
            setCopyRatio(provider.copyRatio);

            let copySymbols: any[] = [];
            if (!isEmpty(provider.copySymbols)) {
                let tmp = JSON.parse(provider.copySymbols);
                for (let sym of tmp) {
                    copySymbols.push({ value: sym, label: sym })
                }
            }

            // setMultiValue(copySymbols as any);
            setSelected(copySymbols as any)
        }
    }, [provider])

    const getColor = () => {
        let colorCss = "";
        if (provider?.pipPl > 0) colorCss = "text-success";
        if (provider?.pipPl < 0) colorCss = "text-danger";
        return colorCss;
    }

    const updateSignal = () => {
        let tmpSymbols = [];
        if (selected.length > 0) {
            for (let item of selected) {
                tmpSymbols.push(item.value);
            }
        }
        let param = {
            rankId: provider.id,
            copySide: copySide,
            copyRatio: copyRatio,
            status: copyStatus ? 1 : 0,
            symbols: JSON.stringify(tmpSymbols)
        }
        AccountService.updateSignalProvider(param).then((msg: any) => {
            const res = msg.data as BaseResponse;
            if (res.result === Result.SUCCESS) {
                Notify.success(i18n.t('updateSignalSuccess'));
                setCopyStatus1(copyStatus);
            } else {
                Notify.success(i18n.t('updateSignalFail'))
            }
        })
    }

    return (
        <div className="card card-position mb-2">
            <button className="p-2 border-0 bg-transparent w-100 text-start" data-bs-toggle="collapse" data-bs-target={`#signal-${provider.id}`} role="button" aria-expanded="true" aria-controls="">
                <div className="d-flex justify-content-between">
                    <div style={{ width: "15%" }}>
                        <span className="text-primary">{index + 1}</span>
                    </div>
                    <div style={{ width: "85%" }}>
                        <div className="d-flex justify-content-between">
                            <div style={{ width: "55%" }}>
                                <span>{t('signalId')}</span>
                            </div>
                            <div style={{ width: "45%" }}>
                                <span className="text-primary">{provider?.virtualId}</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div style={{ width: "55%" }}>
                                <span>{t('netPlPip')}</span>
                            </div>
                            <div style={{ width: "45%" }}>
                                <span className={getColor()}>{formatNumber(provider?.pipPl, 2)}</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div style={{ width: "55%" }}>
                                <span>{t('winRate')}</span>
                            </div>
                            <div style={{ width: "45%" }}>
                                <span>{formatNumber(provider?.winRatio, 2)}</span>
                            </div>
                        </div>
                        {copyStatus1 && <div className="d-flex justify-content-between">
                            <div style={{ width: "55%" }}>
                                <span>{t('status')}</span>
                            </div>
                            <div style={{ width: "45%" }}>
                                <span className="bg-primary text-white rounded px-2 small">{t('copied')}</span>
                            </div>
                        </div>}
                    </div>

                </div>
            </button>
            <div id={`signal-${provider.id}`} className="card-body border-top bg-primary-light collapse p-2">
                <div className="d-flex justify-content-between">
                    <div className="pt-1" style={{ width: "35%" }}>
                        <span>{t('strategy')}</span>
                    </div>
                    <div style={{ width: "5%" }}></div>
                    <div style={{ width: "60%" }}>
                        <select className="form-select mb-2" value={copySide} onChange={(e: any) => setCopySide(e.target.value)}>
                            <option value="1">{t('follow')}</option>
                            <option value="-1">{t('opposite')}</option>
                        </select>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="pt-1" style={{ width: "35%" }}>
                        <span>{t('copyLot')}</span>
                    </div>
                    <div style={{ width: "5%" }}></div>
                    <div style={{ width: "60%" }}>
                        <select className="form-select mb-2" value={copyRatio} onChange={(e: any) => setCopyRatio(e.target.value)}>
                            <option value="10">10%</option>
                            <option value="20">20%</option>
                            <option value="30">30%</option>
                            <option value="40">40%</option>
                            <option value="50">50%</option>
                            <option value="60">60%</option>
                            <option value="70">70%</option>
                            <option value="80">80%</option>
                            <option value="90">90%</option>
                            <option value="100">100%</option>
                        </select>
                    </div>
                </div>

                <div className="d-flex justify-content-between mb-2">
                    <div className="pt-1" style={{ width: "35%" }}>
                        <span>{t('preference')}</span>
                    </div>
                    <div style={{ width: "5%" }}></div>
                    <div style={{ width: "60%" }}>
                        {/* <Select
                            name="filters"
                            placeholder="Filters"
                            value={multiValue}
                            options={filterOptions as any}
                            onChange={handleMultiChange}
                            isMulti
                        /> */}

                        <MultiSelect options={options} value={selected} onChange={setSelected} />
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="pt-1" style={{ width: "35%" }}>
                        <span>{t('status')}</span>
                    </div>
                    <div style={{ width: "5%" }}></div>
                    <div style={{ width: "30%" }}>
                        <div className="form-check form-switch size-b" style={{ marginLeft: "10px" }}>
                            <input className="form-check-input" type="checkbox" role="switch" id="statusSwitch"
                                checked={copyStatus} onChange={() => setCopyStatus(!copyStatus)} />
                            <label className="form-check-label" htmlFor="updatePasswordSwitch"></label>
                        </div>
                    </div>
                    <div style={{ width: "30%" }} className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-primary rounded" onClick={updateSignal}>{t('updateBtn')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(SignalProvider);