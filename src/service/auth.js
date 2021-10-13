export function isAuthenticated() {
  const token = localStorage.getItem('accessToken');
  return token;
}
