import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
export const darkTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      light: '#252525',
      main: '#0057B7',
      // main: '#ffa726',
      // dark: '#bcaaa4',
      contrastText: '#fff',
    },
    warning: {
      main: '#fff',
      contrastText: '#0057B7',
    },
    secondary: {
      main: '#fff',
      light: '#3C3C3C',
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
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.02857em',
      lineHeight: 1.75,
    },
    subtitle1: {
      // fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: '0.00938em',
      lineHeight: '15.75px',
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
      fontSize: '1.65rem',
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
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 14.52,
      letterSpacing: '0.0085em',

      '@media (min-width:600px)': {
        fontSize: '1.00rem',
        fontWeight: 400,
        lineHeight: 1.6,
      },
    },
  },
});

export const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  testing: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
  },
});
