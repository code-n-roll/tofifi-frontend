import { call } from 'redux-saga/effects';
import {
  sendMoneyApi
} from 'utils/api/requests';

export function* payOffDebt(action) {
  debugger;
  const formData = action.data;
  const response = yield call(sendMoneyApi, {userId: formData.userId, sum: formData.sum});
  debugger;
  
  console.log(response);
}
