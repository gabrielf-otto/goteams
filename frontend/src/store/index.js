import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../routes/history';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [
   routerMiddleware(history),
   sagaMiddleware
];

const store = createStore(
   connectRouter(history)(rootReducer), 
   applyMiddleware(...middlewares)
);


sagaMiddleware.run(rootSaga);
export default store;
