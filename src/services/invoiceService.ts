import { mockInvoices } from '@/data/mockInvoices';
import axios from 'axios';
import { InvoiceResponse } from '../types/invoice.types';

const API_URL = process.env.API_URL || '';
const USERNAME = process.env.API_USERNAME || '';
const PASSWORD = process.env.API_PASSWORD || '';
const USE_MOCK = process.env.USE_MOCK === 'true';
const MOCK_DELAY_MS = parseInt(process.env.MOCK_DELAY_MS || '300');

const filterInvoices = (invoices: typeof mockInvoices, status: string[], crypto: string[]) => {
    return invoices.filter(invoice => {
        const statusMatch = status.length === 0 || status.includes(invoice.status);
        const cryptoMatch = crypto.length === 0 || crypto.includes(invoice.crypto);
        return statusMatch && cryptoMatch;
    });
};

export const fetchInvoices = async (
    page: number = 1,
    pageSize: number = 10,
    status: string[] = [],
    crypto: string[] = []
): Promise<InvoiceResponse> => {
    if (USE_MOCK) {
        await new Promise((res) => setTimeout(res, MOCK_DELAY_MS));

        const filteredInvoices = filterInvoices(mockInvoices, status, crypto);
        const total = filteredInvoices.length;

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedInvoices = filteredInvoices.slice(startIndex, endIndex);

        return {
            invoices: paginatedInvoices,
            total,
            page: endIndex / pageSize,
            pageSize,
            totalPages: Math.ceil(filteredInvoices.length / pageSize)
        };
    }

    try {
        const response = await axios.post<InvoiceResponse>(
            API_URL,
            {
                page,
                pageSize,
                status,
                crypto,
            },
            {
                auth: {
                    username: USERNAME,
                    password: PASSWORD,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch invoices');
    }
};