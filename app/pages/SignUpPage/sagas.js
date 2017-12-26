import { takeEvery, put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';
import { setUserData } from 'containers/App/actions';
import { signUp } from 'components/forms/SignUpForm/actions';
import { signUpApi } from 'utils/api/requests';
import { saveAuthToken } from 'utils/helpers/auth';
import { browserHistory } from 'react-router';
import messages from 'components/forms/messages';

function* handleSignUp(action) {
  const formData = action.payload.toJS();
  formData.passwordConfirmation = formData.password;

  try {
    const response = yield call(signUpApi, formData);
    saveAuthToken(response.data.access_token);
    yield put(setUserData(response.data.user));
    yield put(signUp.success());
    browserHistory.push('/');
  } catch (error) {
    const formError = new SubmissionError({
      email: messages.emailExists,
    });

    yield put(signUp.failure(formError));
  }
}

function* signUpWatcherSaga() {
  yield takeEvery(signUp.REQUEST, handleSignUp);
}

export default [
  signUpWatcherSaga,
];
