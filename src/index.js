import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie' ;
import { ThemeProvider } from 'styled-components' ;

import theme from './Util/theme' ;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CookiesProvider>
        <App />
    </CookiesProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

