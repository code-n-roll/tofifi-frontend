// here our API calls live
// you can use predefined methods in utils.js to unify calls
// don't forget to add `Api` postfix
// also a good idea to separate them logically =)

import { get, post, put, del, patch } from './utils';
import * as PATHS from './paths';
import { toFormData } from 'utils/helpers/toFormData';

// TO BE DELETED
// this is an example to made API call without auth
// just a GET request
// export const checkEmailExist = (email, oldEmail = null) => {
//   const data = { email, old_email: oldEmail };
//
//   return get(PATHS.EMAIL_EXISTS_PATH, false, { params: data });
// };

// this is an example to made API call with auth
// just a POST request
// export const verifyOtpApi = (data) => post(PATHS.OTP_VERIFICATION_PATH, true, data);

// auth
export const signUpApi = (data) => post(PATHS.SIGN_UP_PATH, false, data);
export const signInApi = (data) => post(PATHS.SIGN_IN_PATH, false, data);

// purchases
export const getPurchasesApi = () => get(PATHS.PURCHASES_PATH, true);
export const createPurchaseApi = (data) => post(PATHS.PURCHASES_PATH, true, data);
export const payPurchaseApi = (id, data) => post(`${PATHS.PURCHASES_PATH}/${id}/pay`, true, data);
export const declinePurchaseApi = (id) => post(`${PATHS.PURCHASES_PATH}/${id}/decline`, true);

// users
export const getUsersApi = () => get(PATHS.USERS_PATH, true);
export const getCurrentUserApi = () => get(PATHS.CURRENT_USER_PATH, true);

// profile
export const updateProfileApi = (data) => post(PATHS.UPDATE_PROFILE_PATH, true, toFormData(data));
export const addBankCardApi = (data) => post(PATHS.ADD_BANK_CARD, true, data);
export const removeBankCardApi = () => post(PATHS.REMOVE_BANK_CARD, true);

// groups
export const getGroupsApi = () => get(PATHS.GROUPS_PATH, true);
export const createGroupApi = (data) => post(PATHS.GROUPS_PATH, true, data);
export const updateGroupApi = (id, data) => patch(`${PATHS.GROUPS_PATH}/${id}`, true, data);
