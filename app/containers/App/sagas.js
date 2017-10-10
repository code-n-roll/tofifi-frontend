import { takeLatest, put } from 'redux-saga/effects';

import {
  LOG_OUT_REQUEST,
} from './constants';

import {
  logOutSuccess,
} from './actions';

export function* logOutRequest() {
  try {
    yield put(logOutSuccess());
    window.location.replace('/');
  } catch (e) {}
}


function* globalSaga() {
  yield takeLatest(LOG_OUT_REQUEST, logOutRequest);
}

export default globalSaga;
