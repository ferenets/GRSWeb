import { setJWTToken } from '../libs/rapi';

const JWT_KEY = 'jwt';

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length == 2) return parts.pop().split(';').shift();
}

/**
 *
 * @returns {boolean} return false if jwt is not set
 */
export function checkAndSetJWT() {
  const jwt = getCookie('jwt');
  if (!jwt) return false;

  setJWTToken(jwt);
  return true;
}

/**
 *
 */
export function resetToken() {
  document.cookie = `${JWT_KEY}=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  setJWTToken(null);
}
