import { fromJS } from 'immutable';
import {
  SET_IS_VALID_TOKEN,
} from '../constants';

const initialState = fromJS({
  isTokenValid: false,
});

function passwordReducer(state = initialState, action) {
  debugger;

  switch (action.type) {
    case SET_IS_VALID_TOKEN:
      return state
        .set('isTokenValid', action.data);
    default:
      return state;
  }
}

export default passwordReducer;
