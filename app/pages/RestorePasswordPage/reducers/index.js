import { fromJS } from 'immutable';
import {
  SET_IS_VALID_TOKEN,
  SET_USER_ID,
  SET_ACCESS_TOKEN,
} from '../constants';

const initialState = fromJS({
  isValidToken: null,
  token: null,
  id: null,
});

function restorePasswordReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_VALID_TOKEN:
      return state
        .set('isValidToken', action.data);
    case SET_ACCESS_TOKEN:
      return state
        .set('accessToken', action.data);
    case SET_USER_ID:
      return state
        .set('userId', action.data);
    default:
      return state;
  }
}

export default restorePasswordReducer;
