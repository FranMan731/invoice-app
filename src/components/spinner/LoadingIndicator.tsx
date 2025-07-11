import { useTheme } from '@/src/theme/ThemeProvider';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { TextComponent } from '../texts/Text';

export const LoadingIndicator: React.FC = () => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.primary} />
            <TextComponent variant="caption" style={styles.text}>
                Loading invoices...
            </TextComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
    },
});