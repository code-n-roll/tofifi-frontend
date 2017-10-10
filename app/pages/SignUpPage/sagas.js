import { takeEvery, put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { signUp } from 'components/forms/SignUpForm/actions';

function* handleSignUp(action) {
  const formData = action.payload.toJS();

  try {
    console.log('sign up:', formData);
    yield put(signUp.success());
  } catch (error) {
    // const formError = new SubmissionError({
    //   login: 'User with this login is not found',
    //   _error: 'Login failed, please check your credentials and try again',
    // });

    // yield put(signIn.failure(formError));
    console.error(error);
  }
}

function* signUpWatcherSaga() {
  yield takeEvery(signUp.REQUEST, handleSignUp);
}

export default [
  signUpWatcherSaga,
];
