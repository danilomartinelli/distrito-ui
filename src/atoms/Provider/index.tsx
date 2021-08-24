import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { lightTheme } from '../../theme';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
    border: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  *::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  *::-webkit-scrollbar-thumb {
    background: #ced4da;
    border: none;
    border-radius: 4px;
  }

  *::-webkit-scrollbar-thumb:hover,
  *::-webkit-scrollbar-thumb:focus {
    background: #ced4da;
  }

  *::-webkit-scrollbar-thumb:active {
    background: #ced4da;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
    border: none;
  }

  *::-webkit-scrollbar-track:hover,
  *::-webkit-scrollbar-track:focus {
    background: transparent;
  }

  *::-webkit-scrollbar-track:active {
    background: transparent;
  }

  *::-webkit-scrollbar-corner {
    background: transparent;
  }

  html {
    font-size: 62.5%;
  }
`;

export interface ProviderProps {
  /** The type of the theme */
  theme?: 'light';
  /** Children */
  children: React.ReactNode;
}

export const Provider = ({ theme = 'light', children }: ProviderProps) => {
  const t = React.useMemo(() => {
    switch (theme) {
      case 'light':
        return lightTheme;
      default:
        return lightTheme;
    }
  }, [theme]);

  return (
    <ThemeProvider theme={t}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
