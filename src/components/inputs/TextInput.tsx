import { useTheme } from '@/src/theme/ThemeProvider';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const TextInputComponent: React.FC<{
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    style?: object;
}> = ({ placeholder, value, onChangeText, style }) => {
    const { colors, spacing, borderRadius } = useTheme();

    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="#AAAAAA"
            value={value}
            onChangeText={onChangeText}
            style={[
                styles.input,
                {
                    backgroundColor: colors.inputBackground,
                    padding: spacing.medium,
                    borderRadius: borderRadius.medium,
                    color: colors.white,
                },
                style,
            ]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
    },
});