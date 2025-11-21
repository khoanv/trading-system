export type Invoice = {
  id: string;
  invoiceNumber: string;
  customerName: string;
  totalAmount: number;       // in invoiceCurrency
  invoiceCurrency: string;
  status: "OPEN" | "PAID" | "OVERDUE";
  dueDate: string;           // ISO datetime
};

export type InvoiceListResponse = {
	items: Invoice[];
	page: number;
	pageSize: number;
	totalItems: number;
}

export type InvoiceFilters = {
  status?: string;
  page?: string;
  pageSize?: string;
  customerName?: string;
}