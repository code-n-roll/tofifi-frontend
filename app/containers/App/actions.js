import {
  LOG_OUT_REQUEST,
  SET_USER_DATA,
  RESET_STORE,
} from './constants';

export function logOutRequest() {
  return {
    type: LOG_OUT_REQUEST,
  };
}

export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    userData,
  };
}

export function resetStore() {
  return {
    type: RESET_STORE,
  };
}
