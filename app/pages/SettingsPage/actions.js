import {
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS
} from './constants';

export const fetchCurrentUser = () => ({
  type: FETCH_CURRENT_USER_REQUEST
});

export const setCurrentUser = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  payload: user
});
