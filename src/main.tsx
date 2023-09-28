import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Provider } from 'react-redux';
import { configureStore } from './libs/store/store';
import { darkTheme } from './ui';
import { meneItme } from './app/app.theme';
import './app/i18n';
import './app/AppMain.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={configureStore({})}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>
          <App meneItme={meneItme} />
        </main>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
