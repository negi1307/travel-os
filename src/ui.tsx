import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      light: '#ff7961',
      main: '#a1887f',
      dark: '#bcaaa4',
      contrastText: '#fff',

      // light: '#ff7961',
      // main: '#a1887f',
      // dark: '#bcaaa4',
      // contrastText: '#fff'
    },
    warning: {
      main: '#a1887f',
    },
  },

  spacing: [0, 4, 8, 16, 32, 64],
  typography: {
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.95rem',
      fontWeight: 400,
      letterSpacing: '0.08333em',
      lineHeight: 1.66,
      // textTransform: 'uppercase',

      '@media (min-width:600px)': {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '0.95rem',
        fontWeight: 900,
        letterSpacing: '0.08333em',
        lineHeight: 2.66,
      },
    },

    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '0.08333em',
      '@media (min-width:600px)': {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '2.85rem',
        fontWeight: 900,
        letterSpacing: '0.08333em',
      },
    },

    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      lineHeight: 1.6,
      '@media (min-width:600px)': {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '1.25rem',
        fontWeight: 500,
        letterSpacing: '0.0075em',
        lineHeight: 1.6,
      },
    },
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.00rem',
      fontWeight: 400,
      '@media (min-width:600px)': {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '1.00rem',
        fontWeight: 400,
      },
    },
  },
});
