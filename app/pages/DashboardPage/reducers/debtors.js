import { fromJS } from 'immutable';
import {
  SET_DEBTORS_STATISTICS,
} from '../constants';

const initialState = fromJS({
  statistic: null,
});

function debtorsStatisticsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEBTORS_STATISTICS:
      return state
        .set('statistic', action.data);
    default:
      return state;
  }
}

export default debtorsStatisticsReducer;
