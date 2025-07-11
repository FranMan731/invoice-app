import { PrimaryButton } from '@/src/components/buttons/PrimaryButton';
import { TextComponent } from '@/src/components/texts/Text';
import { useTheme } from '@/src/theme/ThemeProvider';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ErrorMessageProps {
  error: string;
  onRetry: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onRetry }) => {
  const { colors, spacing } = useTheme();

  return (
    <View style={styles.container}>
      <TextComponent variant="body" style={[styles.text, { color: colors.error }]}>
        {error}
      </TextComponent>
      <PrimaryButton
        title="Retry"
        onPress={onRetry}
        style={{ marginTop: spacing.medium }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
});