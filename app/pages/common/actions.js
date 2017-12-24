import {
  SET_LOADER_STATUS,
  GET_USERS_REQUEST,
  SET_USERS_DATA,

  GET_GROUPS_REQUEST,
  SET_GROUPS_DATA,

  GET_GROUP_USERS_REQUEST,
  SET_GROUP_USERS_DATA,

  SET_GROUP_MODAL_STATE,
} from './constants';

export function setLoaderStatus(data) {
  return {
    type: SET_LOADER_STATUS,
    data,
  };
}

export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
  };
}

export function setUsersData(data) {
  return {
    type: SET_USERS_DATA,
    data,
  };
}

export function getGroupsRequest() {
  return {
    type: GET_GROUPS_REQUEST,
  };
}

export function setGroupsData(data) {
  return {
    type: SET_GROUPS_DATA,
    data,
  };
}

export function getGroupUsersRequest(groupId) {
  return {
    type: GET_GROUP_USERS_REQUEST,
    groupId,
  };
}

export function setGroupUsersData(groupId, users) {
  return {
    type: SET_GROUP_USERS_DATA,
    data: {
      groupId,
      users,
    },
  };
}

export function setGroupModalState(data) {
  return {
    type: SET_GROUP_MODAL_STATE,
    data,
  };
}
