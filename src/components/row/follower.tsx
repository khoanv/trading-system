import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
    nickName: string;
    index: number;
}

const MyFollower = (props: Props) => {
    const { t } = useTranslation();
    const {nickName, index} = props;

    return (
        <div className="card card-position mb-2">
            <button className="p-2 border-0 bg-transparent w-100 text-start" role="button" aria-expanded="true" aria-controls="">
                <div className="d-flex justify-content-between">
                    <div style={{ width: "15%" }}>
                        <span className="text-primary">{index + 1}</span>
                    </div>
                    <div style={{ width: "85%" }}>
                        <div className="d-flex justify-content-between">
                            <div style={{ width: "55%" }}>
                                <span>{t('nickName')}</span>
                            </div>
                            <div style={{ width: "45%" }}>
                                <span className="text-primary">{nickName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default memo(MyFollower);