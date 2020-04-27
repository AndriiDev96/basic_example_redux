import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers'

// Components
import WebPage from './components/webPage';

// There we set data to store
const store = createStore(allReducers);

ReactDOM.render(
  // Provider store={} - import all data from store
  <Provider store={ store }>
    <WebPage /> 
  </Provider>,
  document.getElementById('fieldToShow')
);
