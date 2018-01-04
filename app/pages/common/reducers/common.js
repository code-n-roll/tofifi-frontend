import { fromJS } from 'immutable';
import {
  SET_LOADER_STATUS,
  SET_GLOBAL_ERROR,
} from '../constants';

const initialState = fromJS({
  isLoading: false,
  error: null,
});

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER_STATUS:
      return state
        .set('isLoading', action.data);
    case SET_GLOBAL_ERROR:
      return state
        .set('error', action.data);
    default:
      return state;
  }
}

export default commonReducer;
