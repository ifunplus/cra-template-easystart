import axios from 'axios';
import { auth } from '../redux/actions';
export default {
  setupInterceptors: (store, history) => {
    // 添加一个请求拦截器
    axios.interceptors.request.use(
      async (config) => {
        if (localStorage.getItem('accessToken')) {
          config.headers = {
            Authorization: localStorage.getItem('accessToken')
          };
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    // 添加一个响应拦截器
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        let error_res = error.response;
        if (error_res) {
          if (error_res.status === 401) {
            store.dispatch(auth.userlogout());
            history.push('/login');
          }

          if (error_res.status === 404) {
            history.push('/main#/notfound');
          }

          if (error_res.status === 403) {
            history.push('/main#/forbidden');
          }

          if (error_res.status === 500) {
            history.push('/main#/serverwrong');
          }
        }
        return Promise.reject(error);
      }
    );
  }
};
