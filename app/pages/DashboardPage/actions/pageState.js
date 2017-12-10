import { SET_PAGE_STATE } from '../constants';

export function setPageState(data) {
  return {
    type: SET_PAGE_STATE,
    data,
  };
}
