import config from '../config';
import sha256 from 'crypto-js/sha256';

export function encryptPassword(password) {
  const hashPassword = sha256(config.nonce + password).toString();
  return hashPassword;
}
