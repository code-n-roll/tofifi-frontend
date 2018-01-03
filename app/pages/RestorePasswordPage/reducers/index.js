import { fromJS } from 'immutable';
import {
  SET_IS_VALID_TOKEN,
} from '../constants';

const initialState = fromJS({
  isValidToken: false,
});

function restorePasswordReducer(state = initialState, action) {
  debugger;

  switch (action.type) {
    case SET_IS_VALID_TOKEN:
      return state
        .set('isValidToken', action.data);
    default:
      return state;
  }
}

export default restorePasswordReducer;
