import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import config from './config';
import App from './App';
import reducers from './store/reducers';

const middlewares = [];

if (config.IS_DEV) {
  middlewares.push(logger);
}

middlewares.push(thunk);

const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
