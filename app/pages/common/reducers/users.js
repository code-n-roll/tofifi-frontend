import { fromJS, List } from 'immutable';
import {
  SET_USERS_DATA,
  SET_CURRENT_USER_PROFILE,
  SET_SETTINGS_MODAL_STATE,
} from '../constants';

const initialState = fromJS({
  users: [],
  userProfile: null,
  settingsModalState: false,
});

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS_DATA:
      return state
        .set('users', List(action.data));
    case SET_CURRENT_USER_PROFILE:
      return state
        .set('userProfile', action.data);
    case SET_SETTINGS_MODAL_STATE:
      return state
        .set('settingsModalState', action.data);
    default:
      return state;
  }
}

export default usersReducer;
