import {
  GET_USERS_REQUEST,
  SET_USERS_DATA,
  GET_CURRENT_USER_PROFILE_REQUEST,
  SET_CURRENT_USER_PROFILE,
  SET_SETTINGS_MODAL_STATE,
  REMOVE_BANK_CARD_REQUEST,
} from '../constants';

export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
  };
}

export function setUsersData(data) {
  return {
    type: SET_USERS_DATA,
    data,
  };
}

export function setSettingsModalState(data) {
  return {
    type: SET_SETTINGS_MODAL_STATE,
    data,
  };
}

export function getCurrentUserProfileRequest() {
  return {
    type: GET_CURRENT_USER_PROFILE_REQUEST,
  };
}

export function setCurrentUserProfile(data) {
  return {
    type: SET_CURRENT_USER_PROFILE,
    data,
  };
}

export function removeBankCardRequest() {
  return {
    type: REMOVE_BANK_CARD_REQUEST,
  };
}
