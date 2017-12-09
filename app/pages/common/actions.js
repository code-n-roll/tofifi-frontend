import {
  SET_LOADER_STATUS,
} from './constants';

export function setLoaderStatus(data) {
  return {
    type: SET_LOADER_STATUS,
    data,
  };
}
