import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    // primary: {
    //   main: purple[500],
    //   // light: '#ff7961',
    //   // main: '#a1887f',
    //   // dark: '#bcaaa4',
    //   // contrastText: '#fff',
    // },
    secondary: {
      light: '#ff7961',
      main: '#a1887f',
      dark: '#bcaaa4',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    info: {
      main: '#ed6c02',
      light: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
  },

  typography: {
    fontSize: 15,
    fontWeightBold: 700,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
