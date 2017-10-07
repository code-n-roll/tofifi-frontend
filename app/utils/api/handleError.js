import { browserHistory } from 'react-router';

export const handleError = (error: any) => {
  switch (error.status) {
    case 401:
      browserHistory.replace('/sign_in');
      break;
    case 403:
      browserHistory.replace('/denied');
      break;
    case 404:
      browserHistory.replace('/not_found');
      break;
    case 500:
      browserHistory.replace('/internal_error');
      break;
    default:
      return error;
  }
  return error;
};
