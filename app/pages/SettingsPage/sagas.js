import { put, call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';

import { getCurrentUserApi } from 'utils/api/requests';
import { fetchCurrentUser } from './actions';
import { updateProfile } from 'components/forms/ProfileForm/actions';
import { FETCH_CURRENT_USER_REQUEST } from './constants';
import { setCurrentUser } from './actions';

function* handleGetCurrentUser() {
  const response = yield call(getCurrentUserApi);

  yield put(setCurrentUser(response.data));
}

function* handleUpdateProfile() {
  console.log('update');
}

function* settingsSaga() {
  yield takeEvery(FETCH_CURRENT_USER_REQUEST, handleGetCurrentUser);
  yield takeEvery(updateProfile.REQUEST, handleUpdateProfile);
}

export default [
  settingsSaga,
];
