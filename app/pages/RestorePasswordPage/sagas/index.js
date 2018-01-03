import { takeEvery, takeLast } from 'redux-saga/effects';

import { VERIFY_ACCESS_REQUEST } from 'pages/RestorePasswordPage/constants/';
import { verifyAccessApi } from 'utils/api/requests'
import { call, put } from 'redux-saga/effects';
import { setIsValidToken } from 'pages/RestorePasswordPage/actions';
import { saveNewPasswordAction } from 'components/forms/RestorePasswordForm/actions';

function* verifyAccess(action) {
  // const formData = action.data;
  try {
    debugger;

    const response = yield call(verifyAccessApi, {id: action.data.id, token: encodeURIComponent(action.data.token)});
  
    console.log(response);
    debugger;
    yield put(setIsValidToken(response.status === 200 ? true : false));
    debugger;
  } catch (e) {
    yield put(setIsValidToken(false));
  }
}

function* saveNewPassword(action) {
  debugger;
}


function* restorePasswordWatcherSaga() {
  debugger;
  yield takeEvery(saveNewPasswordAction.REQUEST, saveNewPassword);
  yield takeEvery(VERIFY_ACCESS_REQUEST, verifyAccess);
  
  debugger;
}

export default [
  restorePasswordWatcherSaga
];
