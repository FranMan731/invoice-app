import { PrimaryButton } from '@/src/components/buttons/PrimaryButton';
import { SecondaryButton } from '@/src/components/buttons/SecondaryButton';
import { TextComponent } from '@/src/components/texts/Text';
import { Theme } from '@/src/theme/darkTheme';
import { useTheme } from '@/src/theme/ThemeProvider';
import { CryptoType, Filters, InvoiceStatus } from '@/src/types/invoice.types';
import { CRYPTO_OPTIONS, STATUS_OPTIONS } from '@/src/utils/constants';
import React, { useEffect, useState } from 'react';
import { Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface FilterModalProps {
    visible: boolean;
    onClose: () => void;
    onApply: (filters: Partial<Filters>) => void;
    onReset: () => void;
    currentFilters: Filters;
}

export const FilterModal: React.FC<FilterModalProps> = ({
    visible,
    onClose,
    onApply,
    onReset,
    currentFilters,
}) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const [selectedStatus, setSelectedStatus] = useState<InvoiceStatus[]>(currentFilters.status);
    const [selectedCrypto, setSelectedCrypto] = useState<CryptoType[]>(currentFilters.crypto);
    
    useEffect(() => {
        setSelectedStatus(currentFilters.status);
        setSelectedCrypto(currentFilters.crypto);
    }, [currentFilters, visible]);

    const toggleStatus = (value: InvoiceStatus) => {
        const newStatus = selectedStatus.includes(value)
            ? selectedStatus.filter((item) => item !== value)
            : [...selectedStatus, value];
        setSelectedStatus(newStatus);
    };

    const toggleCrypto = (value: CryptoType) => {
        const newCrypto = selectedCrypto.includes(value)
            ? selectedCrypto.filter((item) => item !== value)
            : [...selectedCrypto, value];
        setSelectedCrypto(newCrypto);
    };

    const handleApply = () => {
        onApply({
            status: selectedStatus,
            crypto: selectedCrypto,
        });
        onClose();
    };

    const handleReset = () => {
        setSelectedStatus([]);
        setSelectedCrypto([]);
        onReset();
        onClose();
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TextComponent variant="h2" style={styles.title}>
                        Filter Invoices
                    </TextComponent>

                    <TextComponent variant="body" style={styles.sectionTitle}>
                        Status
                    </TextComponent>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: theme.spacing.small }}
                    >
                        {STATUS_OPTIONS.map((option) => (
                            <TouchableOpacity
                                key={option.value}
                                style={[
                                    styles.filterButton,
                                    selectedStatus.includes(option.value as InvoiceStatus) && styles.selectedFilter,
                                ]}
                                onPress={() => toggleStatus(option.value as InvoiceStatus)}
                            >
                                <TextComponent
                                    variant="body"
                                    style={[
                                        { color: theme.colors.text },
                                        selectedStatus.includes(option.value as InvoiceStatus) && { color: theme.colors.white }
                                    ]}
                                >
                                    {option.label}
                                </TextComponent>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <TextComponent variant="body" style={styles.sectionTitle}>
                        Cryptocurrency
                    </TextComponent>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: theme.spacing.small }}
                    >
                        {CRYPTO_OPTIONS.map((option) => (
                            <TouchableOpacity
                                key={option.value}
                                style={[
                                    styles.filterButton,
                                    selectedCrypto.includes(option.value as CryptoType) && styles.selectedFilter,
                                ]}
                                onPress={() => toggleCrypto(option.value as CryptoType)}
                            >
                                <TextComponent
                                    variant="body"
                                    style={[
                                        { color: theme.colors.text },
                                        selectedCrypto.includes(option.value as CryptoType) && { color: theme.colors.white }
                                    ]}
                                >
                                    {option.label}
                                </TextComponent>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View style={styles.buttonContainer}>
                        <SecondaryButton
                            title="Reset All"
                            onPress={handleReset}
                            style={styles.resetButton}
                        />
                        <PrimaryButton
                            title="Apply Filters"
                            onPress={handleApply}
                            style={styles.applyButton}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const createStyles = (theme: Theme) => {
    const { colors, spacing, borderRadius } = theme;

    return StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
        },
        modalContent: {
            backgroundColor: colors.cardBackground,
            margin: spacing.large,
            padding: spacing.large,
            borderRadius: borderRadius.large,
        },
        title: {
            marginBottom: spacing.large,
            textAlign: 'center',
        },
        sectionTitle: {
            marginTop: spacing.medium,
            marginBottom: spacing.small,
        },
        filterButton: {
            padding: spacing.small,
            marginRight: spacing.small,
            borderRadius: borderRadius.medium,
            borderWidth: 1,
            borderColor: colors.border,
        },
        selectedFilter: {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: spacing.large,
        },
        resetButton: {
            marginRight: spacing.small,
            flex: 1,
        },
        applyButton: {
            flex: 1,
        },
    });
}