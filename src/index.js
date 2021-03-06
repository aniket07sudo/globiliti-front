import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './Store/Reducer/reducer';
import { createStore , applyMiddleware , compose , combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    reducer
})
const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
