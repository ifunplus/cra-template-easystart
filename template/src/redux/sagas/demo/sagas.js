import { put, takeEvery, call, all } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloSaga() {
  yield 1 + 1
}

function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}

export { incrementAsync, helloSaga, delay };
