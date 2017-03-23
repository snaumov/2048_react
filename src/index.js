import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';
import configureStore from './configureStore'
import { Provider } from 'react-redux'

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
