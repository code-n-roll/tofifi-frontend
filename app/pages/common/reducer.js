import { fromJS } from 'immutable';
import {
  SET_LOADER_STATUS,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  appState: null,
});

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER_STATUS:
      return state
        .set('isLoading', action.data);
    default:
      return state;
  }
}

export default commonReducer;
