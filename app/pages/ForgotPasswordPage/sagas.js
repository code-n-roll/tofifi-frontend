import { takeEvery, put, call } from 'redux-saga/effects';
import { forgotPassword } from 'components/forms/ForgotPasswordForm/actions';
import { sendRestorePasswordLinkApi } from 'utils/api/requests';
import { browserHistory } from 'react-router';

function* handleForgotPassword(action) {
  debugger;
  const formData = action.payload.toJS();

  try {
    yield call(sendRestorePasswordLinkApi, formData.email);

    yield put(forgotPassword.success());
    browserHistory.push('/');
  } catch (error) {
    browserHistory.push('/');
  }
}

function* forgotPasswordWatcherSaga() {
  yield takeEvery(forgotPassword.REQUEST, handleForgotPassword);
}

export default [
  forgotPasswordWatcherSaga,
];
