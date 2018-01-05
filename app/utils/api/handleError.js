import { browserHistory } from 'react-router';
import { clearAuthData } from 'utils/helpers/auth';

export const handleError = (error: any) => {
  if (!error) {
    return error;
  }

  switch (error.status) {
    case 401:
      clearAuthData();
      browserHistory.replace('/sign_in');
      break;
    // case 403:
    //   browserHistory.replace('/denied');
    //   break;
    // case 404:
    //   browserHistory.replace('/not_found');
    //   break;
    // case 500:
    //   browserHistory.replace('/internal_error');
    //   break;
    default:
      return error;
  }
  return error;
};
