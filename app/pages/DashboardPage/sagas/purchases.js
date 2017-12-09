import { put, call } from 'redux-saga/effects';
import getPurchasesApi from 'utils/api/requests';
import { setPurchasesData } from '../actions';
import purchasesData from './purchasesData';
import { GET_PURCHASES_REQUEST } from '../constants';

function* getPurchasesData() {
  // const response = yield call(getPurchasesApi);

  yield put(setPurchasesData(purchasesData));
}

export default {
  getPurchases: { actionType: GET_PURCHASES_REQUEST, handler: getPurchasesData },
};
