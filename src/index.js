import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RoutesIndex from './components/RoutesIndex';
import store from './store';
import './assets/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <RoutesIndex />
  </Provider>,
  document.getElementById('root'),
);
