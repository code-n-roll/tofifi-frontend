import { takeEvery, put, call } from 'redux-saga/effects';
import { forgotPassword } from 'components/forms/ForgotPasswordForm/actions';
import { sendRestorePasswordLinkApi } from 'utils/api/requests';
import { browserHistory } from 'react-router';

function* handleForgotPassword(action) {
  const formData = action.payload.toJS();

  try {
    yield call(sendRestorePasswordLinkApi, { email: formData.email });

    yield put(forgotPassword.success());
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
