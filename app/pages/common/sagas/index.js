import { takeEvery } from 'redux-saga/effects';

import { updateProfile as updateProfileAction } from 'components/forms/ProfileForm/actions';
import { addBankCard as addBankCardAction } from 'components/forms/BankCardForm/actions';
import {
  GET_USERS_REQUEST,
  GET_CURRENT_USER_PROFILE_REQUEST,
  GET_GROUPS_REQUEST,
  CREATE_GROUP_REQUEST,
  UPDATE_GROUP_REQUEST,
  DELETE_GROUP_REQUEST,
  LEAVE_GROUP_REQUEST,
  REMOVE_BANK_CARD_REQUEST,
  PAY_OFF_DEBT_REQUEST,
} from '../constants';

import {
  getUsersData,
  getCurrentUser,
  updateProfile,
  addBankCard,
  removeBankCard,
} from './users';

import {
  getGroupsData,
  createGroup,
  updateGroup,
  deleteGroup,
  leaveGroup,
} from './groups';

import {
  payOffDebt
} from './debt';

function* commonWatcherSaga() {
  yield takeEvery(GET_USERS_REQUEST, getUsersData);
  yield takeEvery(GET_CURRENT_USER_PROFILE_REQUEST, getCurrentUser);
  yield takeEvery(updateProfileAction.REQUEST, updateProfile);
  yield takeEvery(addBankCardAction.REQUEST, addBankCard);
  yield takeEvery(REMOVE_BANK_CARD_REQUEST, removeBankCard);
  yield takeEvery(GET_GROUPS_REQUEST, getGroupsData);
  yield takeEvery(CREATE_GROUP_REQUEST, createGroup);
  yield takeEvery(UPDATE_GROUP_REQUEST, updateGroup);
  yield takeEvery(PAY_OFF_DEBT_REQUEST, payOffDebt);
  yield takeEvery(DELETE_GROUP_REQUEST, deleteGroup);
  yield takeEvery(LEAVE_GROUP_REQUEST, leaveGroup);
}

export default commonWatcherSaga;
