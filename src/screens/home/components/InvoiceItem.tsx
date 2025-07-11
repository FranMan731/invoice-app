import { TextComponent } from '@/src/components/texts/Text';
import { theme, Theme } from '@/src/theme/darkTheme';
import { Invoice } from '@/src/types/invoice.types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface InvoiceItemProps {
    invoice: Invoice;
}

export const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
    const styles = createStyles(theme, invoice.status)

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TextComponent variant="body" style={styles.customer}>
                    {invoice.customer}
                </TextComponent>
                <TextComponent variant="body" style={styles.status}>
                    {invoice.status}
                </TextComponent>
            </View>

            <View style={styles.amountRow}>
                <TextComponent variant="body" style={styles.cryptoAmount}>
                    {invoice.amount.crypto} {invoice.crypto}
                </TextComponent>
                <TextComponent variant="body" style={styles.fiatAmount}>
                    {invoice.amount.fiat}
                </TextComponent>
            </View>

            <View style={styles.dateContainer}>
                <TextComponent variant="caption" style={styles.date}>
                    Created: {new Date(invoice.createdAt).toLocaleString()}
                </TextComponent>
                <TextComponent variant="caption" style={styles.date}>
                    Expires: {new Date(invoice.expiredAt).toLocaleString()}
                </TextComponent>
            </View>
        </View>
    );
};

const createStyles = (theme: Theme, status: string) => {
    const { spacing, colors } = theme;
    
    const getStatusColor = () => {
        switch (status) {
            case 'COMPLETED': return colors.success;
            case 'PENDING': return colors.warning;
            case 'EXPIRED': return colors.error;
            default: return colors.text;
        }
    };

    return StyleSheet.create({
        container: {
            padding: spacing.medium,
            borderBottomWidth: 1,
            borderBottomColor: colors.inputBackground,
            backgroundColor: colors.cardBackground,
            marginBottom: spacing.small,
            borderRadius: 8,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: spacing.small,
        },
        amountRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        cryptoAmount: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.text,
        },
        fiatAmount: {
            fontSize: 14,
            color: '#AAAAAA',
        },
        status: {
            fontSize: 14,
            fontWeight: '600',
            color: getStatusColor(),
        },
        customer: {
            fontSize: 14,
            color: colors.text,
            marginBottom: spacing.small,
        },
        dateContainer: {
            marginTop: 10,
            gap: 5,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        date: {
            fontSize: 12,
            color: '#AAAAAA',
        },
    });
}