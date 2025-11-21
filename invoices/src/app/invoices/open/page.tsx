import { fetchInvoices } from "./api";
import InvoiceTable from "./InvoiceTable";
import "./style.css";

export default async function OpenInvoicesPage() {
    const intialData = await fetchInvoices({
        status: "OPEN",
        page: "1",
        pageSize: "4"
    })

    console.log(intialData);

    return (
        <div className="page-container">
            <h1 className="page-title">Open Invoices</h1>

            <InvoiceTable initialData={intialData}/>
        </div>
    )
}