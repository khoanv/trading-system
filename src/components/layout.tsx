import React, { useEffect } from "react";

const Layout = ({ children }: any) => {

    return (
        <div className="site page page-chart fixed-header has-header-bottom fixed-footer">
            <section className="loadcontent">
                {children}
            </section>
        </div>
    )
}

export default React.memo(Layout);