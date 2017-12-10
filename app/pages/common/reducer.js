import { fromJS, List } from 'immutable';
import {
  SET_LOADER_STATUS,
  SET_USERS_DATA,
  SET_GROUPS_DATA,
  SET_GROUP_USERS_DATA,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  users: [],
  groups: [],
  groupUsers: {
    groupId: null,
    users: [],
  },
});

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER_STATUS:
      return state
        .set('isLoading', action.data);
    case SET_USERS_DATA:
      return state
        .set('users', List(action.data));
    case SET_GROUPS_DATA:
      return state
        .set('groups', List(action.data));
    case SET_GROUP_USERS_DATA:
      return state
        .setIn(['groupUsers', 'groupId'], action.data.groupId)
        .setIn(['groupUsers', 'users'], List(action.data.users));
    default:
      return state;
  }
}

export default commonReducer;