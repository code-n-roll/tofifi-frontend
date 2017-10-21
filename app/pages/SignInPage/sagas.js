import { takeEvery, put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';
import { signIn } from 'components/forms/SignInForm/actions';
import { setUserData } from 'containers/App/actions';
import { signInApi } from 'utils/api/requests';
import { saveAuthToken } from 'utils/helpers/auth';
import { browserHistory } from 'react-router';
import messages from 'components/forms/messages';

function* handleSignIn(action) {
  const formData = action.payload.toJS();

  try {
    const response = yield call(signInApi, formData);
    const token = response.data.access_token;

    const user = {
      email: response.data.email,
    };

    yield put(setUserData(user));
    saveAuthToken(token);

    yield put(signIn.success());
    browserHistory.push('/');
  } catch (error) {
    const formError = new SubmissionError({
      password: messages.wrongCredentials,
    });

    yield put(signIn.failure(formError));
  }
}

function* signInWatcherSaga() {
  yield takeEvery(signIn.REQUEST, handleSignIn);
}

export default [
  signInWatcherSaga,
];
