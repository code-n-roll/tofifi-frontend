import { takeEvery, put, call } from 'redux-saga/effects';
// import { restorePassword } from '../../../components/forms/ForgotPasswordForm/actions';
import { VERIFY_ACCESS_TO_RESTORE_PASSWORD_REQUEST } from './constants';
import { browserHistory } from 'react-router';
import { restorePasswordApi, verifyAccessToRestorePasswordApi } from '../../utils/api/requests';

function* handleRestorePassword(action) {
  debugger;
  const formData = action.payload.toJS();

  try {
    yield call(restorePasswordApi, formData);

    

    // yield put(restorePassword.success());
    browserHistory.push('/');
  } catch (error) {
    browserHistory.push('/');
  }
}

function* handleVerifyAccessToRestorePassword(action) {
  debugger;
  const formData = action.payload.toJS();

  const response = yield call(verifyAccessToRestorePasswordApi, formData);
}

function* restorePasswordWatcherSaga() {
  // yield takeEvery(restorePassword.REQUEST, handleRestorePassword);
}

function* verifyAccessToRestorePasswordWatcherSaga() {
  yield takeEvery(VERIFY_ACCESS_TO_RESTORE_PASSWORD_REQUEST, handleVerifyAccessToRestorePassword);  
}

export default [
  restorePasswordWatcherSaga,
  verifyAccessToRestorePasswordWatcherSaga,
];