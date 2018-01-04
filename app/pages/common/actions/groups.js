import {
  GET_GROUPS_REQUEST,
  SET_GROUPS_DATA,
  SET_GROUP_MODAL_STATE,
  CREATE_GROUP_REQUEST,
  UPDATE_GROUP_REQUEST,
  DELETE_GROUP_REQUEST,
  LEAVE_GROUP_REQUEST,
} from '../constants';

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

export function setGroupModalState(data) {
  return {
    type: SET_GROUP_MODAL_STATE,
    data,
  };
}

export function createGroupRequest(data) {
  return {
    type: CREATE_GROUP_REQUEST,
    data,
  };
}

export function updateGroupRequest(data) {
  return {
    type: UPDATE_GROUP_REQUEST,
    data,
  };
}

export function deleteGroupRequest(groupId) {
  return {
    type: DELETE_GROUP_REQUEST,
    groupId,
  };
}

export function leaveGroupRequest(groupId) {
  return {
    type: LEAVE_GROUP_REQUEST,
    groupId,
  };
}
