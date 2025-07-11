export const theme = {
  colors: {
    primary: '#009d92',
    secondary: 'transparent',
    background: '#000000',
    cardBackground: '#121212',
    text: '#FFFFFF',
    inputBackground: '#323232',
    border: '#009d92',
    white: '#FFFFFF',
    error: '#FF5252',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },
  textVariants: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    h2: {
      fontSize: 24,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    body: {
      fontSize: 16,
      color: '#FFFFFF',
    },
    caption: {
      fontSize: 12,
      color: '#CCCCCC',
    },
  },
};

export type Theme = typeof theme;
export type Color = keyof typeof theme.colors;