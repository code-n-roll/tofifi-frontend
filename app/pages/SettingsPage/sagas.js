import { put, call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';

import { getCurrentUserApi, updateProfileApi } from 'utils/api/requests';
import { fetchCurrentUser } from './actions';
import { updateProfile } from 'components/forms/ProfileForm/actions';
import { FETCH_CURRENT_USER_REQUEST } from './constants';
import { setCurrentUser } from './actions';
import messages from 'components/forms/messages';

function* handleGetCurrentUser() {
  const response = yield call(getCurrentUserApi);

  yield put(setCurrentUser(response.data));
}

function* handleUpdateProfile(action) {
  const formData = action.payload.toJS();

  try {
    const response = yield call(updateProfileApi, formData);
    yield put(setCurrentUser(response.data));
    yield put(updateProfile.success());
  } catch (e) {
    console.log(`error`);
    console.log(e);

    const formError = new SubmissionError({
      _error: e.data.message
    });

    yield put(updateProfile.failure(formError));
  }

  console.log(formData);
}

function* settingsSaga() {
  yield takeEvery(FETCH_CURRENT_USER_REQUEST, handleGetCurrentUser);
  yield takeEvery(updateProfile.REQUEST, handleUpdateProfile);
}

export default [
  settingsSaga,
];
