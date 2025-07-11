export type InvoiceStatus = 'CREATED' | 'PENDING' | 'COMPLETED' | 'EXPIRED';

export type CryptoType = 'USDT-TRX' | 'USDT-ETH' | 'ETH' | 'TRX';

export interface Invoice {
    id: number;
    amount: {
        crypto: string;
        fiat: string;
    };
    createdAt: string;
    expiredAt: string;
    customer: string;
    status: InvoiceStatus;
    crypto: CryptoType;
}

export interface InvoiceResponse {
    invoices: Invoice[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

export interface Filters {
    status: InvoiceStatus[];
    crypto: CryptoType[];
}

export interface InvoiceState {
    data: Invoice[];
    loading: boolean;
    error: string | null;
    page: number;
    hasMore: boolean;
    filters: Filters;
}