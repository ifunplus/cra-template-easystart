import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './CombineReducer';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import * as sagas from './sagas';

const peristedState = loadState(); // 持久化state

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware(); // create the saga middleware
const devMode = process.env.NODE_ENV === 'development';

let middleware = [
  routerMiddleware(history), // for dispatching history actions
  thunk,
  sagaMiddleware
];
let composeEnhancer = null;
if (devMode) {
  middleware.push(logger);
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancer = (v) => v;
}

let store = createStore(
  createRootReducer(history), // root reducer with router state
  peristedState,
  composeEnhancer(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

function* rootSaga() {
  yield all([
    // sagas.watchSwitchTab(),
    // sagas.watchAddTab(),
    // sagas.watchRemoveTab(),
    // sagas.watchClearSearchConditions(),
    // sagas.watchLoadSearchConditions(),
    // sagas.watchUpdateSearchConditions(),
    // sagas.watchSaveTags()
  ]);
}

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
export default store;
