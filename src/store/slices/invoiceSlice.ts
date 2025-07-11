import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchInvoices } from '../../services/invoiceService';
import { CryptoType, Filters, Invoice, InvoiceResponse, InvoiceState, InvoiceStatus } from '../../types/invoice.types';

const initialState: InvoiceState = {
    data: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
    filters: {
        status: [],
        crypto: []
    }
};

export const getInvoices = createAsyncThunk(
    'invoices/fetchInvoices',
    async (params: {
        page: number;
        pageSize: number;
        status: InvoiceStatus[];
        crypto: CryptoType[];
        isPolling?: boolean;
    }, { rejectWithValue }) => {
        try {
            const response = await fetchInvoices(
                params.page,
                params.pageSize,
                params.status,
                params.crypto
            );
            return { ...response, isPolling: params.isPolling };
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch invoices');
        }
    }
);

const invoiceSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
            state.filters = {
                ...state.filters,
                ...action.payload
            };
            state.page = 1;
            state.data = [];
            state.hasMore = true;
        },
        resetFilters: (state) => {
            state.filters = { status: [], crypto: [] };
            state.page = 1;
            state.data = [];
            state.hasMore = true;
        },
        addInvoice: (state, action: PayloadAction<Invoice>) => {
            state.data.unshift(action.payload);
        },
        updateInvoiceStatus: (state, action: PayloadAction<{ id: number; status: InvoiceStatus }>) => {
            const index = state.data.findIndex(inv => inv.id === action.payload.id);
            if (index !== -1) {
                state.data[index].status = action.payload.status;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInvoices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInvoices.fulfilled, (state, action: PayloadAction<InvoiceResponse>) => {
                state.loading = false;
                const { invoices, page: responsePage, total } = action.payload;
                
                const existingIds = new Set(state.data.map(item => item.id));
                const newItems = invoices.filter(item => !existingIds.has(item.id));
                state.data = [...state.data, ...newItems];
                
                state.hasMore = state.data.length < total;
                state.page = responsePage;
            })
            .addCase(getInvoices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export const {
    setFilters,
    resetFilters,
    addInvoice,
    updateInvoiceStatus
} = invoiceSlice.actions;

export default invoiceSlice.reducer;