import { Invoice, InvoiceListResponse } from "@/app/invoices/open/types";
import { NextRequest, NextResponse } from "next/server";

const mockInvoices: Invoice[] = [
	{
		id: "1",
		invoiceNumber: "INVOICE-2025-1",
		customerName: "Ngo Van Khoa",
		totalAmount: 10000,
		invoiceCurrency: "VND",
		status: "OPEN",
		dueDate: "2025-02-05T00:00:00Z"
	},
	{
		id: "2",
		invoiceNumber: "INVOICE-2025-2",
		customerName: "Ngo Van Khoa",
		totalAmount: 10000,
		invoiceCurrency: "VND",
		status: "OPEN",
		dueDate: "2025-12-15T00:00:00Z"
	},
	{
		id: "3",
		invoiceNumber: "INVOICE-2025-3",
		customerName: "Ngo Van Khoa",
		totalAmount: 10000,
		invoiceCurrency: "VND",
		status: "OPEN",
		dueDate: "2025-12-15T00:00:00Z"
	},
	{
		id: "4",
		invoiceNumber: "INVOICE-2025-4",
		customerName: "Ngo Van Khoa",
		totalAmount: 10000,
		invoiceCurrency: "VND",
		status: "OPEN",
		dueDate: "2025-12-15T00:00:00Z"
	},
	{
		id: "5",
		invoiceNumber: "INVOICE-2025-5",
		customerName: "Ngo Van Khoa",
		totalAmount: 10000,
		invoiceCurrency: "VND",
		status: "PAID",
		dueDate: "2025-12-15T00:00:00Z"
	},
	{
		id: "6",
		invoiceNumber: "INVOICE-2025-6",
		customerName: "Ngo Van Khoa",
		totalAmount: 10000,
		invoiceCurrency: "VND",
		status: "OPEN",
		dueDate: "2025-12-15T00:00:00Z"
	},
	{
		id: "7",
		invoiceNumber: "INVOICE-2025-7",
		customerName: "Ngo Van Khoa",
		totalAmount: 10000,
		invoiceCurrency: "VND",
		status: "OVERDUE",
		dueDate: "2025-12-15T00:00:00Z"
	}
]

export async function GET(request: NextRequest){
	await new Promise(resolve => setTimeout(resolve, 500));
	
	const searchParams = request.nextUrl.searchParams;
	const status = searchParams.get('status') || "OPEN";
	const page = parseInt(searchParams.get("page") || "1");
	const pageSize = parseInt(searchParams.get("pageSize") || "10");
	const customerName = searchParams.get('customerName');

	// filter by status
	let filteredInvoices = mockInvoices.filter(invoice => invoice.status === status);

	// Filter by customer name if provided
	if (customerName && customerName.trim()) {
		filteredInvoices = filteredInvoices.filter(invoice =>
		invoice.customerName.toLowerCase().includes(customerName.toLowerCase())
		);
	}

	// pagging
	const totalItems = filteredInvoices.length;
	const startIndex = (page - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const paginatedItems = filteredInvoices.slice(startIndex,endIndex);

	const response : InvoiceListResponse = {
		items: paginatedItems,
		page: page,
		pageSize: pageSize,
		totalItems: totalItems
	}

	return NextResponse.json(response);
}