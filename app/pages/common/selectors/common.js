import { createSelector } from 'reselect';

const selectCommon = (state) => state.get('common').get('common');

const makeSelectLoaderStatus = () => createSelector(
  selectCommon,
  (commonState) => commonState.get('isLoading')
);

const makeSelectGlobalError = () => createSelector(
  selectCommon,
  (commonState) => commonState.get('error')
);

export {
  makeSelectLoaderStatus,
  makeSelectGlobalError,
};
