import { fromJS } from 'immutable';
import {
  LOG_OUT_SUCCESS,
  SET_USER_DATA,
} from './constants';

const initialState = fromJS({
  currentUser: undefined,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_OUT_SUCCESS:
      return state.set('currentUser', null);
    case SET_USER_DATA:
      return state
        .set('currentUser', action.userData);
    default:
      return state;
  }
}

export default appReducer;
