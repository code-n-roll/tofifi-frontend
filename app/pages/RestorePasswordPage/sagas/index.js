import { takeEvery } from 'redux-saga/effects';

import { VERIFY_ACCESS_REQUEST } from 'pages/RestorePasswordPage/constants/';
import { verifyAccessApi } from 'utils/api/requests'
import { call, put } from 'redux-saga/effects';
import { setIsValidToken } from 'pages/RestorePasswordPage/actions'


function* verifyAccess(action) {
  // const formData = action.data;
  debugger;
  const response = yield call(verifyAccessApi, {id: action.data.id, token: encodeURIComponent(action.data.token)});
  console.log(response);
  debugger;
  setIsValidToken(response);
  
  debugger;
}

function* restorePasswordWatcherSaga() {
  debugger;
  yield takeEvery(VERIFY_ACCESS_REQUEST, verifyAccess);
}

export default restorePasswordWatcherSaga;
