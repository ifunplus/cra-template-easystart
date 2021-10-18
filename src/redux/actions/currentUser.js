import { message } from 'antd';
import intl from 'react-intl-universal';
// import { fetchUserMe } from '../../network/api';
import { fetchUser } from '../../network/apiMock';
import * as ActionTypes from '../ActionTypes';
import store from '../store';
import { encryptPassword } from '../../utils/encryptUtils';

export const setLoginUser = (state) => ({ type: ActionTypes.SET_LOGIN_USER, state });
export const clearLoginUser = (state) => ({ type: ActionTypes.CLEAR_LOGIN_USER, state });

export function getUser(account) {
  return function (dispatch) {
    return fetchUser(account).then(
      (response) => {
        dispatch(setLoginUser(response.data.data));
        return response.data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

// export function updateMinePwd(data) {
//   return function (dispatch) {
//     return apiUpdateMinePwd({
//       new: encryptPassword(data.new),
//       old: encryptPassword(data.old)
//     }).then(
//       (response) => {
//         message.success(intl.get('EDIT_SUCESS'));
//         return response.data.data;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };
// }
