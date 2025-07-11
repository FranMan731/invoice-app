import { useTheme } from '@/src/theme/ThemeProvider';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

export const TextComponent: React.FC<{
    variant?: 'h1' | 'h2' | 'body' | 'caption';
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
}> = ({ variant = 'body', style, children }) => {
    const { textVariants } = useTheme();

    return (
        <Text style={[textVariants[variant], style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({});