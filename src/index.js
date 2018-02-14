import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import todoApp from './reducers'

let store =  createStore(todoApp);

// let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);

// let store = createStoreWithMiddleware(quotesApp);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// registerServiceWorker();
