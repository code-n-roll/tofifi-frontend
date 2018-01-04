import {
    SET_DEBT_MODAL_STATE,
    SET_USER_DATA,
    PAY_OFF_DEBT_REQUEST,
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
  