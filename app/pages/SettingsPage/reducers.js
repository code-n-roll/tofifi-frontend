import { fromJS, List } from 'immutable';

import { FETCH_CURRENT_USER_SUCCESS } from './constants';

const initialState = fromJS({
  userProfile: null
});

function settingsReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER_SUCCESS:
      return state.set('userProfile', action.payload);
    default:
      return state;
  }
}

export default settingsReducer;
