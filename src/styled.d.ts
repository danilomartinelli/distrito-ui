import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      weight: {
        regular: string;
        medium: string;
        bold: string;
      };
    };
    colors: {
      brand: {
        n700: string;
        n600: string;
        n500: string;
        n200: string;
        n100: string;
      };
      neutral: {
        white: string;
        n100: string;
        n200: string;
        n300: string;
        n400: string;
        n500: string;
        n800: string;
      };
    };
    name: string;
  }
}
