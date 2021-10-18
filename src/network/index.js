/* @flow */
import { message } from 'antd';
import axios from 'axios';
import intl from 'react-intl-universal';
import { StatusCode, StatusCodeError } from './statusCode';

axios.defaults.timeout = 30000; // 30s
axios.defaults.baseURL = '/app';
export default function request(url, requestParams) {
  const {
    method = 'GET',
    params = {},
    data = undefined,
    timeout = 30000,
    headers = {}
  } = requestParams;
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data,
      timeout,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response) {
          if (response.status < 300 && response.status >= 200) {
            let statusCode = response.data.statusCode;
            if (statusCode !== 1000) {
              message.error(intl.get(StatusCode[statusCode]));
              throw new StatusCodeError({ statusCode: statusCode });
            }
            resolve(response);
          } else {
            message.error(intl.get('ERROR_DATA_ERROR'));
          }
        } else {
          resolve(response);
        }
      })
      .catch((error) => {
        if (isNetworkError(error)) message.error(intl.get('NETWORK_ERROR'));
        if (error.code === 'ECONNABORTED') message.error(intl.get('ERROR_URL_TIMEOUT', { url }));
        if (error.response) {
          const resp = error.response;
          if (resp.status === 403) message.error(intl.get('NO_AUTH_TO_DO'));
        }
        reject(error);
      });
  });
}

function isNetworkError(err) {
  return !!err.isAxiosError && !err.response;
}
