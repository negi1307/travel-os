import { createTheme } from '@mui/material';
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },

  typography: {
    fontSize: 14,
    fontWeightLight: 300,
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
