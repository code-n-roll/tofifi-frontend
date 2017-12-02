import { takeLatest, put } from 'redux-saga/effects';

import { LOG_OUT_REQUEST } from './constants';
import { resetStore } from './actions';
import { clearAuthData } from 'utils/helpers/auth';

export function* logOutRequest() {
  try {
    clearAuthData();
    window.location.replace('/');
    yield put(resetStore());
  } catch (e) {}
}


function* globalSaga() {
  yield takeLatest(LOG_OUT_REQUEST, logOutRequest);
}

export default globalSaga;
