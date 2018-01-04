import {
  GET_DEBTORS_STATISTICS_REQUEST,
  SET_DEBTORS_STATISTICS,
} from '../constants';

export function getDebtorsStatisticsRequest() {
  return {
    type: GET_DEBTORS_STATISTICS_REQUEST,
  };
}

export function setDebtorsStatistics(data) {
  return {
    type: SET_DEBTORS_STATISTICS,
    data,
  };
}
