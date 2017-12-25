import { put, call, takeEvery, select } from 'redux-saga/effects';
import _ from 'lodash';
import {
  getUsersApi,
  getGroupsApi,
  createGroupApi,
  updateGroupApi,
} from 'utils/api/requests';
import { makeSelectCurrentUser } from 'containers/App/selectors';

import {
  GET_USERS_REQUEST,
  GET_GROUPS_REQUEST,
  CREATE_GROUP_REQUEST,
  UPDATE_GROUP_REQUEST,
} from './constants';

import { makeSelectGroups, makeSelectUsers } from './selectors';

import { setUsersData, setGroupsData } from './actions';
import { processGroupsReact } from './helpers';


function* getUsersData() {
  const response = yield call(getUsersApi);
  yield put(setUsersData(response.data));
}

function* getGroupsData() {
  const response = yield call(getGroupsApi);
  const currentUser = yield select(makeSelectCurrentUser());
  yield put(setGroupsData(processGroupsReact(response.data, currentUser)));
}

function* createGroup(action) {
  const response = yield call(createGroupApi, action.data);
  const groups = yield select(makeSelectGroups());
  groups.push({ ...response.data, isOwner: true });
  yield put(setGroupsData(groups));
}

function* updateGroup(action) {
  const groupData = action.data.data;
  const groupId = action.data.groupId;
  yield call(updateGroupApi, groupId, groupData);
  const users = yield select(makeSelectUsers());
  const groups = yield select(makeSelectGroups());
  const currentUser = yield select(makeSelectCurrentUser());

  const index = _.findIndex(groups, (group) => group.id === groupId);
  groupData.users = groupData.userIds.map((userId) =>
    _.find(users, (user) => user.id === userId) || currentUser
  );
  delete groupData.userIds;

  groups[index] = { ...groups[index], ...groupData };

  yield put(setGroupsData(groups));
}

function* commonWatcherSaga() {
  yield takeEvery(GET_USERS_REQUEST, getUsersData);
  yield takeEvery(GET_GROUPS_REQUEST, getGroupsData);
  yield takeEvery(CREATE_GROUP_REQUEST, createGroup);
  yield takeEvery(UPDATE_GROUP_REQUEST, updateGroup);
}

export default commonWatcherSaga;
