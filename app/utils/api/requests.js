// here our API calls live
// you can use predefined methods in utils.js to unify calls
// don't forget to add `Api` postfix
// also a good idea to separate them logically =)

import { get, post, put, del } from './utils';
import * as PATHS from './paths';

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
