import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import type { CustomThemeProviderProps } from './ThemeProvider.types';

const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    secondary: {
      main: '#e87238',
      light: '#e38b5f',
      dark: '#d94e09',
      contrastText: '#fff',
    },
    background: {
      default: '#5a1e96',
    },
  },
  typography: {
    allVariants: {
      color: '#e8e7e6',
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#5A1E96',
          fontSize: '18px',
        },
      },
    },
  },
});

export const CustomThemeProvider = (props: CustomThemeProviderProps) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};
