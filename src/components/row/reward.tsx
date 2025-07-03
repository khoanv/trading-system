import { memo } from "react";
import { useTranslation } from "react-i18next";

const Reward = () => {
    const { t } = useTranslation();

    return (
        <div className="card card-position mb-2  p-2">
            <div className="d-flex justify-content-between">
                <div style={{ width: "20%" }} className="pt-2">
                    <span>{t('pair')}</span>
                </div>
                <div style={{ width: "20%" }} className="pt-2">
                    <span className="text-primary">USDJPY</span>
                </div>
                <div style={{ width: "35%" }} className="pt-2">
                    <span>{t('reward')}</span>
                </div>
                <div style={{ width: "25%" }}>
                    <select className="form-select mb-2">
                        <option value="0.1">0.1</option>
                        <option value="0.2">0.2</option>
                        <option value="0.3">0.3</option>
                        <option value="0.4">0.4</option>
                        <option value="0.5">0.5</option>
                        <option value="0.6">0.6</option>
                        <option value="0.7">0.7</option>
                        <option value="0.8">0.8</option>
                        <option value="0.9">0.9</option>
                        <option value="1.0">1.0</option>
                    </select>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                    <div className="pt-0" style={{ width: "35%" }}>
                        <span>{t('status')}</span>
                    </div>
                    <div style={{ width: "5%" }}></div>
                    <div style={{ width: "30%" }}>
                        <div className="form-check form-switch size-b" style={{ marginLeft: "10px" }}>
                            <input className="form-check-input" type="checkbox" role="switch" id="statusSwitch"/>
                            <label className="form-check-label" htmlFor="updatePasswordSwitch"></label>
                        </div>
                    </div>
                    <div style={{ width: "30%" }} className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-primary rounded" >{t('updateBtn')}</button>
                    </div>
                </div>
        </div>
    )
}
export default memo(Reward);