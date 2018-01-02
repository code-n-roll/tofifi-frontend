import { VERIFY_ACCESS_REQUEST, SET_IS_VALID_TOKEN } from '../constants';

export function verifyAccessRequest(data) {
    debugger;
    return {
        type: VERIFY_ACCESS_REQUEST,
        data
    }
}

export function setIsValidToken(data) {
    debugger;
    return {
        type: SET_IS_VALID_TOKEN,
        data
    }
}