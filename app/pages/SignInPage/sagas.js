import { takeEvery, put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { signIn } from 'components/forms/SignInForm/actions';
import { setUserData } from 'containers/App/actions';
import { signInApi } from 'utils/api/requests';
import { saveAuthToken } from 'utils/helpers/auth';
import { browserHistory } from 'react-router';

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
    yield put(signIn.success());
    // const formError = new SubmissionError({
    //   login: 'User with this login is not found',
    //   _error: 'Login failed, please check your credentials and try again',
    // });

    // yield put(signIn.failure(formError));
    console.error(error);
  }
}

function* signInWatcherSaga() {
  yield takeEvery(signIn.REQUEST, handleSignIn);
}

export default [
  signInWatcherSaga,
];
