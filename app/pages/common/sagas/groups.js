import { put, call, select } from 'redux-saga/effects';
import _ from 'lodash';
import {
  getUsersApi,
  getGroupsApi,
  createGroupApi,
  updateGroupApi,
  deleteGroupApi,
  leaveGroupApi,
} from 'utils/api/requests';
import { makeSelectCurrentUser } from 'containers/App/selectors';

import { makeSelectGroups, makeSelectUsers } from '../selectors';

import { setUsersData, setGroupsData } from '../actions';
import { processGroupsReact } from './helpers';


export function* getUsersData() {
  const response = yield call(getUsersApi);
  yield put(setUsersData(response.data));
}

export function* getGroupsData() {
  const response = yield call(getGroupsApi);
  const currentUser = yield select(makeSelectCurrentUser());
  yield put(setGroupsData(processGroupsReact(response.data, currentUser)));
}

export function* createGroup(action) {
  const response = yield call(createGroupApi, action.data);
  const groups = yield select(makeSelectGroups());
  groups.push({ ...response.data, isOwner: true });
  yield put(setGroupsData(groups));
}

export function* updateGroup(action) {
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

export function* deleteGroup(action) {
  const groupId = action.groupId;
  yield call(deleteGroupApi, groupId);
  const groups = yield select(makeSelectGroups());

  const updatedGroups = groups.filter((group) => group.id !== groupId);
  yield put(setGroupsData(updatedGroups));
}

export function* leaveGroup(action) {
  const groupId = action.groupId;
  yield call(leaveGroupApi, groupId);
  const groups = yield select(makeSelectGroups());

  const updatedGroups = groups.filter((group) => group.id !== groupId);
  yield put(setGroupsData(updatedGroups));
}
