import {
    SET_DEBT_MODAL_STATE,
    SET_USER_DATA,
    PAY_OFF_DEBT_REQUEST,
    CLEAR_DEBTS,
    SET_DEBT_ERROR,
} from '../constants';

export function setDebtModalState(data) {
    return {
        type: SET_DEBT_MODAL_STATE,
        data,
    };
}

export function setUserData(data) {
    return {
        type: SET_USER_DATA,
        data,
    };
}

export function payOffDebt(data) {
    return {
        type: PAY_OFF_DEBT_REQUEST,
        data
    }
}

export function clearDebts(data) {
  return {
    type: CLEAR_DEBTS,
    data,
  };
}

export function setDebtError(data) {
  return {
    type: SET_DEBT_ERROR,
    data,
  };
}
