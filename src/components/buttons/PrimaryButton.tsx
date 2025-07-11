import { useTheme } from '@/src/theme/ThemeProvider';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const PrimaryButton: React.FC<{
    title: string;
    onPress: () => void;
    style?: object;
}> = ({ title, onPress, style }) => {
    const { colors, spacing, borderRadius } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                {
                    backgroundColor: colors.primary,
                    padding: spacing.medium,
                    borderRadius: borderRadius.medium,
                },
                style,
            ]}
        >
            <Text style={[styles.buttonText, { color: colors.white }]}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: '600',
    }
});