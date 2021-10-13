import { message } from 'antd';
import axios from 'axios';
import intl from 'react-intl-universal';
import { login, register } from '../../network/api';
import { getUserMe, clearLoginUser } from './currentUser';
import { encryptPassword } from '../../utils/encryptUtils';
function saveTokens(accessToken) {
  localStorage.setItem('accessToken', accessToken);
}

export function getToken(type = 'accessToken') {
  return localStorage.getItem('accessToken');
}

export function setAuthToken() {
  const token = localStorage.getItem('accessToken');
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

function _login(account, password) {
  return new Promise((resolve, reject) => {
    const hashPassword = encryptPassword(password);
    login({ account, password: hashPassword })
      .then((resp) => {
        const { accessToken } = resp.data.data;
        saveTokens('Bearer ' + accessToken);
        setAuthToken();
        resolve(resp);
      })
      .catch((error) => { });
  });
}

export function userlogin(values) {
  return async (dispatch) => {
    const { account, password } = values;
    return await _login(account, password).then((resp) => {
      if (resp.status === 200) {
        return dispatch(getUserMe()).then((res) => {
          return res;
        });
      }
    });
  };
}

export function userlogout() {
  return async (dispatch) => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('TO_DO_WARNING');
    await dispatch(clearLoginUser());
    setAuthToken();
  };
}

function _register(account, password) {
  return new Promise((resolve, reject) => {
    const hashPassword = encryptPassword(password);
    login({ account, password: hashPassword })
      .then((resp) => {
        const { accessToken } = resp.data.data;
        saveTokens(accessToken);
        setAuthToken();
        resolve(resp);
      })
      .catch((error) => { });
  });
}

export function userRegister(values) {
  return async (dispatch) => {
    await _register(values).then((resp) => {
      if (resp.status === 200) {
        dispatch(getUserMe());
      }
    });
  };
}
