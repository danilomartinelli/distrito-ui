import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'Light Theme',
  font: {
    weight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  colors: {
    brand: {
      n700: '#a40047',
      n600: '#cc0057',
      n500: '#e50063',
      n200: '#ff99c5',
      n100: '#ffebf3',
    },
    neutral: {
      white: '#ffffff',
      n100: '#f1f3f5',
      n200: '#e9ecef',
      n300: '#dee2e6',
      n400: '#ced4da',
      n500: '#adb5bd',
      n800: '#343a40',
    },
  },
};

export const themeArgs = {
  theme: {
    description: 'Distrito themes',
    defaultValue: lightTheme.name,
    options: [lightTheme.name],
    control: { type: 'select' },
    mapping: {
      [lightTheme.name]: lightTheme,
    },
  },
};
