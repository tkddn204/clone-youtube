import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global-style';
import theme from './styles/theme';
import App from './App';
import {history, store} from './store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';
import 'moment/locale/ko';
import moment from "moment";

// msw server
if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then(({ worker }) => {worker.start()});
}

// locale
moment.locale("ko");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <App history={history}/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
