import {
  SET_LOADER_STATUS,
  SET_GLOBAL_ERROR,
} from '../constants';

export function setLoaderStatus(data) {
  return {
    type: SET_LOADER_STATUS,
    data,
  };
}

export function setGlobalError(data) {
  return {
    type: SET_GLOBAL_ERROR,
    data,
  };
}
