import { createFormAction } from 'redux-form-saga';

export const restorePassword = createFormAction('RESTORE_PASSWORD');
export const saveNewPasswordAction = createFormAction('SAVE_NEW_PASSWORD');
