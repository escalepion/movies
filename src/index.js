import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';

// import App from './App';
import routes from './routes';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk) (createStore);
ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
