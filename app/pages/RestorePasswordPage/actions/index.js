import { VERIFY_ACCESS_REQUEST, SET_IS_VALID_TOKEN, SET_ACCESS_TOKEN, SET_USER_ID } from '../constants';

export function verifyAccessRequest(data) {
  return {
    type: VERIFY_ACCESS_REQUEST,
    data,
  };
}

export function setIsValidToken(data) {
  return {
    type: SET_IS_VALID_TOKEN,
    data,
  };
}

export function setAccessToken(data) {
  return {
    type: SET_ACCESS_TOKEN,
    data,
  };
}

export function setUserId(data) {
  return {
    type: SET_USER_ID,
    data,
  };
}
