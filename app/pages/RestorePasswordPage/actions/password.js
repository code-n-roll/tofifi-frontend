import { 
    VERIFY_ACCESS_TO_RESTORE_PASSWORD_REQUEST,
} from '../constants';

export function verifyAccessToRestorePasswordRequest(data) {
    return {
        type: VERIFY_ACCESS_TO_RESTORE_PASSWORD_REQUEST,
        data,
    };
}
