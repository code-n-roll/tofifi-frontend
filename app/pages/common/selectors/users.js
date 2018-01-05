import { createSelector } from 'reselect';

const selectUsers = (state) => state.get('common').get('users');

const makeSelectUsers = () => createSelector(
  selectUsers,
  (usersState) => usersState.get('users').toJS()
);

const makeSelectSettingsModalState = () => createSelector(
  selectUsers,
  (usersState) => usersState.get('settingsModalState')
);

const makeSelectCurrentUserProfile = () => createSelector(
  selectUsers,
  (usersState) => usersState.get('userProfile')
);

const makeSelectUserUpdateSuccessMsg = () => createSelector(
  selectUsers,
  (usersState) => usersState.get('userUpdateSuccessMsg')
);

const makeSelectAddingCardErrorMsg = () => createSelector(
  selectUsers,
  (usersState) => usersState.get('cardAddingErrorMsg')
);

export {
  makeSelectUsers,
  makeSelectSettingsModalState,
  makeSelectCurrentUserProfile,
  makeSelectUserUpdateSuccessMsg,
  makeSelectAddingCardErrorMsg,
};
