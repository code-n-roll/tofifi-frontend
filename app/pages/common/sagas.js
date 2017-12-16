import { put, call, takeEvery } from 'redux-saga/effects';
import {
  getUsersApi,
  getGroupsApi,
} from 'utils/api/requests';
import { GET_USERS_REQUEST, GET_GROUPS_REQUEST, GET_GROUP_USERS_REQUEST } from './constants';
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

function* commonWatcherSaga() {
  yield takeEvery(GET_USERS_REQUEST, getUsersData);
  yield takeEvery(GET_GROUPS_REQUEST, getGroupsData);
  yield takeEvery(GET_GROUP_USERS_REQUEST, getGroupUsersData);
}

export default commonWatcherSaga;
