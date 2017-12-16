export function saveAuthToken(authToken) {
  localStorage.setItem('auth_token', authToken);
}

export function clearAuthData() {
  localStorage.clear();
}
