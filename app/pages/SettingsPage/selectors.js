export const selectSettings = state =>
  state.get('settings');

export const selectUserProfile = (state) =>
  selectSettings(state).get('userProfile');
