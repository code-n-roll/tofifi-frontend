import { call } from 'redux-saga/effects';
import {
  sendMoneyApi
} from 'utils/api/requests';

export function* payOffDebt(action) {
  debugger;
  const formData = action.data;
  const response = yield call(sendMoneyApi, {userToId: formData.userToid, amount: formData.amount});
  debugger;
  console.log(response);
}
