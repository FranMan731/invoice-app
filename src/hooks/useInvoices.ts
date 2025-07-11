import { RootState, useAppDispatch, useAppSelector } from '@/src/store';
import { getInvoices } from '@/src/store/slices/invoiceSlice';
import { POLLING_INTERVAL } from '@/src/utils/constants';
import { useCallback, useEffect, useRef } from 'react';

export const useInvoices = () => {
    const dispatch = useAppDispatch();
    const { data, loading, error, page, hasMore, filters } = useAppSelector(
        (state: RootState) => state.invoices
    );
    const pollingRef = useRef<NodeJS.Timeout | null>(null);
    const isMountedRef = useRef(true);

    const loadInvoices = useCallback(async (options: {
        isPolling?: boolean;
        newPage?: number;
    }) => {
        try {
            const currentPage = options.newPage ?? page;

            await dispatch(
                getInvoices({
                    page: currentPage,
                    pageSize: 10,
                    status: filters.status,
                    crypto: filters.crypto,
                    isPolling: options.isPolling
                })
            ).unwrap();
        } catch (err) {
            console.error('Error loading invoices:', err);
        }
    }, [dispatch, page, filters.status, filters.crypto]);

    useEffect(() => {
        isMountedRef.current = true;
        loadInvoices({});

        return () => {
            isMountedRef.current = false;
            if (pollingRef.current) {
                clearTimeout(pollingRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isMountedRef.current) return;

        const pollData = async () => {
            await loadInvoices({ isPolling: true });
            pollingRef.current = setTimeout(pollData, POLLING_INTERVAL);
        };

        pollingRef.current = setTimeout(pollData, POLLING_INTERVAL);

        return () => {
            if (pollingRef.current) {
                clearTimeout(pollingRef.current);
            }
        };
    }, [loadInvoices]);

    useEffect(() => {
        loadInvoices({});
    }, [filters.status.join(','), filters.crypto.join(','), loadInvoices]);

    const loadMore = useCallback(() => {
        if (!loading && hasMore) {
            loadInvoices({ newPage: page + 1 });
        }
    }, [loading, hasMore, page, loadInvoices]);

    const refresh = useCallback(() => {
        return loadInvoices({});
    }, [loadInvoices]);

    return {
        data,
        loading,
        error,
        page,
        hasMore,
        filters,
        loadMore,
        refresh
    };
};