import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AffiliateInfo } from "../../models/response.model";
import { formatNumber } from "../../utils";

interface Props {
    info: AffiliateInfo
}
const ReferalLayer = (props: Props) => {
    const { info } = props;
    const { t } = useTranslation();

    return (
        <div className="card mb-2">
            <button className="p-2 border-0 bg-transparent w-100 text-start" data-bs-toggle="collapse" data-bs-target={`#tier-${info.tier}`} role="button" aria-expanded="true" aria-controls="">
                <table className="table table-sm table-borderless mb-0" cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr>
                            <td width="70" className="px-0"><span>{t('tier')}-{info.tier}</span></td>
                            <td width="90" className="px-0">
                                {info.total > 0 && <span className="text-primary">{info.total} {t('traders')}</span>}
                                {info.total === 0 && <span>{info.total} {t('traders')}</span>}
                            </td>
                            <td className="text-end">
                                <span>{formatNumber(info.commission, 2)} USD</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </button>
            {info.total > 0 && <div id={`tier-${info.tier}`} className="card-body border-top bg-primary-light collapse p-2">
                <table className="table table-borderless mb-0" cellSpacing={0} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td className="p-0 opacity-70">{t('nickname')}</td>
                            <td className="text-end p-0 opacity-70">{t('tradingVol')}</td>
                        </tr>
                        {info.referrals.map((ref, idx) => {
                            return (
                                <tr key={info.tier + "-" + idx}>
                                    <td className="p-0">{ref.nickName}</td>
                                    <td className="text-end p-0">
                                        {formatNumber(ref.vol??0, 2)}
                                    </td>
                                </tr>
                            )
                        })}
                        <tr className="tr-border-top">
                            <td></td>
                            <td className="text-end p-0">{formatNumber(info.totalVolTier??0, 2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </div>
    )
}
export default memo(ReferalLayer)