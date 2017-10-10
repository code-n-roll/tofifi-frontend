import { takeEvery, put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { signIn } from 'components/forms/SignInForm/actions';

function* handleSignIn(action) {
  const { email, password } = action.payload.toJS();

  try {
    console.log('sign in:', email, password);
    yield put(signIn.success());
  } catch (error) {
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
