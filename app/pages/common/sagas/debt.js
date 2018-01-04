import { call, put } from 'redux-saga/effects';
import {
  sendMoneyApi,
  clearDebtsApi,
} from 'utils/api/requests';

import {
  getPurchasesRequest,
  getDebtorsStatisticsRequest,
} from 'pages/DashboardPage/actions';

import {
  setDebtModalState,
  setDebtError,
} from '../actions';

export function* payOffDebt(action) {
  try {
    const formData = action.data;
    yield call(clearDebtsApi, { userId: formData.userId, sum: formData.sum });
    yield put(setDebtModalState(false));
    yield put(getPurchasesRequest());
    yield put(getDebtorsStatisticsRequest());
  } catch (e) {
    yield put(setDebtError(e.data.message));
  }
}

export function* clearDebts(action) {
  try {
    yield call(sendMoneyApi, action.data);
    yield put(setDebtModalState(false));
  } catch (e) {
    yield put(setDebtError(e.data.message));
  }
}
