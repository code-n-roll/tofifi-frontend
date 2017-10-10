import {
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SET_USER_DATA,
} from './constants';

export function logOutRequest() {
  return {
    type: LOG_OUT_REQUEST,
  };
}

export function logOutSuccess() {
  return {
    type: LOG_OUT_SUCCESS,
  };
}

export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    userData,
  };
}
