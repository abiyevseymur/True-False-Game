import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { rootReducer } from './Redux/reducers';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);
