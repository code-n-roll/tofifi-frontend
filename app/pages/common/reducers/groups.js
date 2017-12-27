import { fromJS, List } from 'immutable';
import {
  SET_GROUPS_DATA,
  SET_GROUP_MODAL_STATE,
} from '../constants';

const initialState = fromJS({
  groups: [],
  groupModalOpened: false,
});

function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS_DATA:
      return state
        .set('groups', List(action.data));
    case SET_GROUP_MODAL_STATE:
      return state
        .set('groupModalOpened', action.data);
    default:
      return state;
  }
}

export default groupsReducer;
