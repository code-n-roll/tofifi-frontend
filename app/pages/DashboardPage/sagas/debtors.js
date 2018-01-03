import { put, call } from 'redux-saga/effects';

import {
  getDebtorsStatisticsApi,
} from 'utils/api/requests';

import {
  setDebtorsStatistics,
} from '../actions';

import * as ActionTypes from '../constants';

function* getDebtorsStatistics() {
  const response = yield call(getDebtorsStatisticsApi);
  yield put(setDebtorsStatistics(response.data));
}

export default {
  getDebtorsStatistics: { actionType: ActionTypes.GET_DEBTORS_STATISTICS_REQUEST, handler: getDebtorsStatistics },
};
