import { SecondaryButton } from '@/src/components/buttons/SecondaryButton';
import { TextComponent } from '@/src/components/texts/Text';
import { useDebounce } from '@/src/hooks/useDebounce';
import { useInvoices } from '@/src/hooks/useInvoices';
import { useAppDispatch } from '@/src/store';
import { resetFilters, setFilters } from '@/src/store/slices/invoiceSlice';
import { Theme } from '@/src/theme/darkTheme';
import { useTheme } from '@/src/theme/ThemeProvider';
import { Filters } from '@/src/types/invoice.types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { ErrorMessage } from './components/ErrorMessage';
import { FilterModal } from './components/FilterModal';
import { InvoiceItem } from './components/InvoiceItem';

const MemoizedInvoiceItem = memo(InvoiceItem);
const MemoizedFilterModal = memo(FilterModal);
const MemoizedErrorMessage = memo(ErrorMessage);

export const Home: React.FC = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const dispatch = useAppDispatch();

    const {
        data: invoices,
        loading,
        error,
        hasMore,
        filters,
        loadMore,
        refresh
    } = useInvoices();

    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const debouncedLoadMore = useDebounce(loadMore, 300);

    const handleRefresh = useCallback(() => {
        setRefreshing(true);
        refresh().finally(() => setRefreshing(false));
    }, [refresh]);

    const handleApplyFilters = useCallback((newFilters: Partial<Filters>) => {
        dispatch(setFilters(newFilters));
    }, [dispatch]);

    const handleResetFilters = useCallback(() => {
        dispatch(resetFilters());
    }, [dispatch]);

    const ListFooterComponent = useMemo(() => {
        return () => {
            if (!loading || !hasMore) return null;
            return (
                <View style={styles.footer}>
                    <TextComponent variant="caption">Loading more invoices...</TextComponent>
                </View>
            );
        };
    }, [loading, hasMore, styles.footer]);

    const refreshControl = useMemo(() => (
        <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={theme.colors.primary}
        />
    ), [refreshing, handleRefresh, theme.colors.primary]);

    const renderItem = useCallback(
        ({ item }: { item: typeof invoices[0] }) => <MemoizedInvoiceItem invoice={item} />,
        []
    );

    const keyExtractor = useCallback((item: typeof invoices[0]) => {
        return `${item.id}_${item.createdAt || Date.now()}`;
    }, []);

    if (error) {
        return <MemoizedErrorMessage error={error} onRetry={handleRefresh} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextComponent variant="h1">Invoices</TextComponent>
                <SecondaryButton
                    title="Filter"
                    onPress={() => setModalVisible(true)}
                />
            </View>

            <FlatList
                data={invoices}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onEndReached={debouncedLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={ListFooterComponent}
                refreshControl={refreshControl}
            />

            <MemoizedFilterModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onApply={handleApplyFilters}
                onReset={handleResetFilters}
                currentFilters={filters}
            />
        </View>
    );
};

const createStyles = (theme: Theme) => {
    const { colors, spacing } = theme;

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding: spacing.medium,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: spacing.medium,
        },
        footer: {
            padding: spacing.medium,
            alignItems: 'center',
        },
        retryButton: {
            marginTop: spacing.medium,
        },
    });
};

export default memo(Home);