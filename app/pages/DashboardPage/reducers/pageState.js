import { fromJS } from 'immutable';
import {
  SET_PAGE_STATE,
  PAGE_STATES,
} from '../constants';

const initialState = fromJS({
  state: PAGE_STATES.welcome,
});

function pageStateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_STATE:
      return state
        .set('state', action.data);
    default:
      return state;
  }
}

export default pageStateReducer;
