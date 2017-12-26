import { put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';
import {
  getUsersApi,
  getCurrentUserApi,
  updateProfileApi,
  addBankCardApi,
} from 'utils/api/requests';
import { updateProfile as updateProfileAction } from 'components/forms/ProfileForm/actions';
import { addBankCard as addBankCardAction } from 'components/forms/BankCardForm/actions';
import { setUsersData, setCurrentUserProfile } from '../actions';
import { formatAddBankCardData } from './helpers';


export function* getUsersData() {
  const response = yield call(getUsersApi);
  yield put(setUsersData(response.data));
}

export function* getCurrentUser() {
  const response = yield call(getCurrentUserApi);

  yield put(setCurrentUserProfile(response.data));
}

export function* updateProfile(action) {
  console.log(action.payload.toJS());
  const formData = action.payload.toJS();

  try {
    const response = yield call(updateProfileApi, formData);
    yield put(setCurrentUserProfile(response.data));
    yield put(updateProfileAction.success());
  } catch (e) {
    // TODO make sensible errors
    const formError = new SubmissionError({
      _error: e.data.message,
    });

    yield put(updateProfileAction.failure(formError));
  }
}

export function* addBankCard(action) {
  const formData = action.payload.toJS();
  const reqData = formatAddBankCardData(formData);

  try {
    yield call(addBankCardApi, reqData);
    yield put(addBankCardAction.success());
  } catch (e) {
    // TODO make sensible errors
    const formError = new SubmissionError({
      _error: e.data.message,
    });

    yield put(addBankCardAction.failure(formError));
  }
}
