import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import store from './redux/store';
import { Provider } from 'react-redux';
import appConfig from './config/appConfig';
import httpService from './network/interceptors';
const history = createBrowserHistory();
httpService.setupInterceptors(store, history);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App appProps={appConfig} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

export { history, store };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
