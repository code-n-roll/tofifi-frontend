import { createSelector } from 'reselect';

const selectCommon = (state) => state.get('common');

const makeSelectLoaderStatus = () => createSelector(
  selectCommon,
  (commonState) => commonState.get('isLoading')
);

export {
  makeSelectLoaderStatus,
};
