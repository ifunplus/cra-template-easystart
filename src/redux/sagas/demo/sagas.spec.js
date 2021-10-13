// import test from 'tape'

// import { put, call } from 'redux-saga/effects'
// import { incrementAsync, delay } from './sagas'
import { put, call } from 'redux-saga/effects';
import { incrementAsync, delay } from './sagas';

describe('testSaga', () => {
  const gen = incrementAsync();

  it('incrementAsync Saga test', () => {
    expect(gen.next().value).toEqual(call(delay, 1000));
    expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }));
    expect(gen.next().done).toBeTruthy();
  });
});
