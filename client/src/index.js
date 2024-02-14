import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import {CssBaseline} from '@mui/material';
import { configureStore } from '@reduxjs/toolkit';
import {theme} from './theme/theme'
import cartReducer from './state'
import { Provider } from 'react-redux';

const store=configureStore({
  reducer:{cart:cartReducer}
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <ThemeProvider theme={theme}>
<CssBaseline>
    <App />
</CssBaseline>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

