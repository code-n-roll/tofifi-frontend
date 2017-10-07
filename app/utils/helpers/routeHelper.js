export const authToken = () => localStorage.getItem('auth_token');

export const requireAuth = (nextState, replace) => {
  if (!authToken()) {
    replace({
      pathname: '/sign_in',
    });
  }
};

export const grantedAuth = (nextState, replace) => {
  if (authToken()) {
    replace({
      pathname: '/',
    });
  }
};
