import { takeEvery, call, put, select } from 'redux-saga/effects';

import { VERIFY_ACCESS_REQUEST } from 'pages/RestorePasswordPage/constants/';
import { verifyAccessApi, restorePasswordApi } from 'utils/api/requests'
import { setIsValidToken, setAccessToken, setUserId } from 'pages/RestorePasswordPage/actions';
import { saveNewPasswordAction } from 'components/forms/RestorePasswordForm/actions';
import { makeSelectAccessToken, makeSelectUserId } from 'pages/RestorePasswordPage/selectors';
import { browserHistory } from 'react-router';

function* verifyAccess(action) {
  try {
    yield call(verifyAccessApi, { id: action.data.id, token: encodeURIComponent(action.data.token) });
    yield put(setIsValidToken(true));
    yield put(setAccessToken(encodeURIComponent(action.data.token)));
    yield put(setUserId(action.data.id));
  } catch (e) {
    yield put(setIsValidToken(false));
  }
}

function* saveNewPassword(action) {
  const formData = action.payload.toJS();
  const accessToken = yield select(makeSelectAccessToken());
  const userId = yield select(makeSelectUserId());
  yield call(restorePasswordApi, { id: userId, token: accessToken, ...formData });
  try {
    browserHistory.push('/');
  } catch (e) {
    browserHistory.push('/');
  }
}

function* restorePasswordWatcherSaga() {
  yield takeEvery(saveNewPasswordAction.REQUEST, saveNewPassword);
  yield takeEvery(VERIFY_ACCESS_REQUEST, verifyAccess);
}

export default [
  restorePasswordWatcherSaga,
];
