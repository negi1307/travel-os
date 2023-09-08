import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      light: '#ff7961',
      main: '#a1887f',
      // main: '#ffa726',
      dark: '#bcaaa4',
      contrastText: '#fff',
    },
    warning: {
      main: '#a1887f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#212121',
    },
    error: {
      main: '#f44336',
    },
  },

  spacing: [0, 4, 8, 16, 32, 64],
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    button: {
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '0.95rem',
      fontWeight: 500,
      letterSpacing: '0.08333em',
      // lineHeight: 1.66,

      '@media (min-width:600px)': {
        fontSize: '0.95rem',
        fontWeight: 900,
        letterSpacing: '0.08333em',
        lineHeight: 2.66,
      },
    },

    h1: {
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '0.08333em',
      '@media (min-width:600px)': {
        fontSize: '2.85rem',
        fontWeight: 900,
        letterSpacing: '0.08333em',
      },
    },

    h2: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      lineHeight: 1.6,
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
        fontWeight: 500,
        letterSpacing: '0.0075em',
        lineHeight: 1.6,
      },
    },
    h6: {
      fontSize: '1.00rem',
      fontWeight: 400,
      '@media (min-width:600px)': {
        fontSize: '1.00rem',
        fontWeight: 400,
      },
    },
  },
});
