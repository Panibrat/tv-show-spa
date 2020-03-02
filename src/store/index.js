import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './rootSaga';
import reducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middeleware = applyMiddleware(
    sagaMiddleware
);

const store = createStore(reducer, composeEnhancers(middeleware));
sagaMiddleware.run(sagas);

export default store;
