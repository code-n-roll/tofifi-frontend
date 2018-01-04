import { fromJS, List } from 'immutable';
import {
  SET_DEBT_MODAL_STATE,
  SET_USER_DATA,
} from '../constants';

const initialState = fromJS({
  user: Object,
  debtModalOpened: false,
});

function debtReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return state
        .set('user', action.data);
    case SET_DEBT_MODAL_STATE:
      return state
        .set('debtModalOpened', action.data);
    default:
      return state;
  }
}

export default debtReducer;
