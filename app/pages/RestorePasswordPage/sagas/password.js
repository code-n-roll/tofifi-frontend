import { put, call } from 'redux-saga/effects';
// import { restorePassword } from '../../../components/forms/ForgotPasswordForm/actions';
import { browserHistory } from 'react-router';
import { 
  restorePasswordApi, 
  verifyAccessToRestorePasswordApi 
} from 'utils/api/requests';


function* restorePassword(action) {
  debugger;
  const formData = action.payload.toJS();

  try {
    yield call(restorePasswordApi, formData);

    

    // yield put(restorePassword.success());
    browserHistory.push('/');
  } catch (error) {
    browserHistory.push('/');
  }
}




export default {
  verifyAccess: { actionType: VERIFY_ACCESS_REQUEST, handler: verifyAccess },
};