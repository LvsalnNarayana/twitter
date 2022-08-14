/* eslint-disable no-unused-vars */
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import common from './common.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { finalTheme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={finalTheme}>
      <BrowserRouter>
        <div className={common.dark} data-theme='dark'>
          <App />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

