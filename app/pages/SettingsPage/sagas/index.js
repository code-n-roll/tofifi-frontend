import { put, call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';

import { getCurrentUserApi, updateProfileApi, addBankCardApi } from 'utils/api/requests';
import { updateProfile } from 'components/forms/ProfileForm/actions';
import { addBankCard } from 'components/forms/BankCardForm/actions';
import { FETCH_CURRENT_USER_REQUEST } from '../constants';
import { setCurrentUser, fetchCurrentUser } from '../actions';
import messages from 'components/forms/messages';
import { formatAddBankCardData } from './helpers';

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
    // TODO make sensible errors
    const formError = new SubmissionError({
      _error: e.data.message
    });

    yield put(updateProfile.failure(formError));
  }

  console.log(formData);
}

function* handleAddBankCard(action) {
  const formData = action.payload.toJS();
  const reqData = formatAddBankCardData(formData);
  console.log(reqData);

  try {
    const response = addBankCardApi(reqData);
    yield put(addBankCard.success());
  } catch (e) {
    // TODO make sensible errors
    const formError = new SubmissionError({
      _error: e.data.message
    });

    yield put(addBankCard.failure(formError));
  }
}

function* settingsSaga() {
  yield takeEvery(FETCH_CURRENT_USER_REQUEST, handleGetCurrentUser);
  yield takeEvery(updateProfile.REQUEST, handleUpdateProfile);
  yield takeEvery(addBankCard.REQUEST, handleAddBankCard);
}

export default [
  settingsSaga,
];
