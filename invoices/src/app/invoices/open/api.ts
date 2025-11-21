import { InvoiceFilters, InvoiceListResponse } from "./types";

export async function fetchInvoices(filters: InvoiceFilters): Promise<InvoiceListResponse> {
    const { status = "OPEN", page = 1, pageSize = 10, customerName } = filters;

    const params = new URLSearchParams({
        status,
        page: page.toString(),
        pageSize: pageSize.toString()
    })

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    const url = `${baseUrl}/api/invoices?${params.toString()}`;

    const response = await fetch(url, {
        cache: 'no-cache'
    })

    if (!response.ok) {
        throw new Error(`Fetch invoice error: ${response.statusText}`)
    }

    return response.json();
}