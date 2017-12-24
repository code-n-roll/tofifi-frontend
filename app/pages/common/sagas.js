import { put, call, takeEvery } from 'redux-saga/effects';
import {
  getUsersApi,
  getGroupsApi,
  createGroupApi,
} from 'utils/api/requests';

import {
  GET_USERS_REQUEST,
  GET_GROUPS_REQUEST,
  GET_GROUP_USERS_REQUEST,
  CREATE_GROUP_REQUEST,
} from './constants';

import { setUsersData, setGroupsData, setGroupUsersData } from './actions';

import groupUsersData from './groupUsersData';

function* getUsersData() {
  const response = yield call(getUsersApi);
  yield put(setUsersData(response.data));
}

function* getGroupsData() {
  // const response = yield call(getGroupsApi);
  yield put(setGroupsData([]));
}

function* getGroupUsersData(action) {
  // const response = yield call(getGroupUsersApi, action.groupId);
  yield put(setGroupUsersData(action.groupId, groupUsersData()));
}

function* createGroup(action) {
  console.log('create group');
  const response = yield call(createGroupApi, action.data);
}

function* commonWatcherSaga() {
  yield takeEvery(GET_USERS_REQUEST, getUsersData);
  yield takeEvery(GET_GROUPS_REQUEST, getGroupsData);
  yield takeEvery(GET_GROUP_USERS_REQUEST, getGroupUsersData);
  yield takeEvery(CREATE_GROUP_REQUEST, createGroup);
}

export default commonWatcherSaga;
