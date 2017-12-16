import { fromJS } from 'immutable';
import {
  SET_USER_DATA,
} from './constants';

const initialState = fromJS({
  currentUser: undefined,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return state
        .set('currentUser', action.userData);
    default:
      return state;
  }
}

export default appReducer;
