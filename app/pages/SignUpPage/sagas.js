import { takeEvery, put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { setUserData } from 'containers/App/actions';
import { signUp } from 'components/forms/SignUpForm/actions';
import { signUpApi } from 'utils/api/requests';
import { saveAuthToken } from 'utils/helpers/auth';

function* handleSignUp(action) {
  const formData = action.payload.toJS();
  formData.passwordConfirmation = formData.password;

  try {
    const response = yield call(signUpApi, formData);

    const user = {
      email: response.data.email,
    };

    yield put(setUserData(user));
    saveAuthToken(response.data.access_token);
    yield put(signUp.success());
  } catch (error) {
    yield put(signUp.success());
    // const formError = new SubmissionError({
    //   login: 'User with this login is not found',
    //   _error: 'Login failed, please check your credentials and try again',
    // });

    // yield put(signIn.failure(formError));
    console.log(error);
  }
}

function* signUpWatcherSaga() {
  yield takeEvery(signUp.REQUEST, handleSignUp);
}

export default [
  signUpWatcherSaga,
];
