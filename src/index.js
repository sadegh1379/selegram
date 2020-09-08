import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import RTL from './RTL';
import {BrowserRouter as Router} from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {DataProvider} from './context'

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

ReactDOM.render(
      <ThemeProvider theme={theme}>
                      <RTL>
                          <Router>
                              <DataProvider>
                                    <App />
                              </DataProvider>
                          </Router>
                      </RTL>
      </ThemeProvider>
  ,
  document.getElementById('root')
);

