import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import GlobalStyles from './styles/Global';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
