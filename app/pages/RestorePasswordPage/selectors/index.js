import { createSelector } from 'reselect';

const selectRestorePasswordState = (state) => state.get('restore_password');

const makeSelectTokenStatus = () => createSelector(
  selectRestorePasswordState,
  (restorePasswordState) => restorePasswordState.get('isValidToken')
);

const makeSelectAccessToken = () => createSelector(
  selectRestorePasswordState,
  (restorePasswordState) => restorePasswordState.get('accessToken')
);

const makeSelectUserId = () => createSelector(
  selectRestorePasswordState,
  (restorePasswordState) => restorePasswordState.get('userId')
);

export {
  makeSelectAccessToken,
  makeSelectTokenStatus,
  makeSelectUserId,
};
