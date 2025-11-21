'use client';

import { useState } from "react";
import { Invoice, InvoiceListResponse } from "./types";
import "./style.css"
import StatusBadge from "./StatusBadge";

type InvoiceTableProps = {
    initialData: InvoiceListResponse
}

export default function InvoiceTable({ initialData }: InvoiceTableProps) {
    const [data, setData] = useState<InvoiceListResponse>(initialData);
    const [currentPage, setCurrentPage] = useState(initialData.page);
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const totalPages = Math.ceil(data.totalItems / data.pageSize);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage >= totalPages;

    const fetchData = async (page: number, customerName: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const params = new URLSearchParams({
                status: 'OPEN',
                page: page.toString(),
                pageSize: data.pageSize.toString(),
            });

            if (customerName && customerName.trim()) {
                params.append('customerName', customerName.trim());
            }

            // Client-side fetch uses relative URL
            const response = await fetch(`/api/invoices?${params.toString()}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch invoices: ${response.status} ${response.statusText}`);
            }

            const newData: InvoiceListResponse = await response.json();
            setData(newData);
            setCurrentPage(newData.page);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
            setError(errorMessage);
            console.error('Error fetching invoices:', err);
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Handle pagination - Previous page
     */
    const handlePrevious = () => {
        if (!isFirstPage && !isLoading) {
            fetchData(currentPage - 1, searchInput);
        }
    };

    /**
     * Handle pagination - Next page
     */
    const handleNext = () => {
        if (!isLastPage && !isLoading) {
            fetchData(currentPage + 1, searchInput);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Reset to page 1 when searching
        fetchData(1, searchInput);
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return "";

        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    return (
        <div>
            <div className="search-section">
                <form onSubmit={handleSearch} className="search-form">
                    <div className="search-input-group">
                        <label htmlFor="customerName" className="search-label">
                            Filter by Customer Name
                        </label>
                        <input
                            type="text"
                            id="customerName"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Enter customer name..."
                            className="search-input"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-primary"
                    >
                        Search
                    </button>
                </form>
            </div>

            {error && (
                <div className="error-message">
                    <strong>Error:</strong> {error}
                </div>
            )}

            <div className="table-wrapper">
                {isLoading && (
                    <div className="loading-overlay">
                        <div className="loading-content">
                            <div className="spinner"></div>
                            <p>Loading invoices...</p>
                        </div>
                    </div>
                )}
                <div className="table-container">
                    <table className="invoice-table">
                        <thead>
                            <tr>
                                <td>Invoice number</td>
                                <td>Customer name</td>
                                <td>Total amount</td>
                                <td>Status</td>
                                <td>Due data</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.items.length === 0 ? (
                                <tr>
                                    <td colSpan={5}>No record.</td>
                                </tr>
                            )
                                : (
                                    data.items.map((invoice: Invoice) => (
                                        <tr key={invoice.id}>
                                            <td>{invoice.invoiceNumber}</td>
                                            <td>{invoice.customerName}</td>
                                            <td>{invoice.totalAmount} {invoice.invoiceCurrency}</td>
                                            <td><StatusBadge status={invoice.status} /></td>
                                            <td>{formatDate(invoice.dueDate)}</td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>

                    {data.items.length !== 0 && <div className="pagination-section">
                        <div className="pagination-info">
                            Showing <span>{((currentPage - 1) * data.pageSize) + 1}</span> to{' '}
                            <span>{Math.min(currentPage * data.pageSize, data.totalItems)}</span> of{' '}
                            <span>{data.totalItems}</span> results
                        </div>

                        <div className="pagination-controls">
                            <button
                                onClick={handlePrevious}
                                disabled={isFirstPage || isLoading}
                                className="btn btn-pagination"
                            >
                                Previous
                            </button>
                            <div className="page-indicator">
                                Page {currentPage} of {totalPages || 1}
                            </div>
                            <button
                                onClick={handleNext}
                                disabled={isLastPage || isLoading}
                                className="btn btn-pagination"
                            >
                                Next
                            </button>
                        </div>
                    </div>}
                </div>
            </div>

        </div>
    )
}
