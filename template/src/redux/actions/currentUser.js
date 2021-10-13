import { message } from 'antd';
import intl from 'react-intl-universal';
import { fetchUserMe, apiUpdateMinePwd, apiUpdateUserInfo } from '../../network/api';
import * as ActionTypes from '../ActionTypes';
import { selectUserMe } from '../selectors/currentUser';
import store from '../store';
import { encryptPassword } from '../../utils/encryptUtils';

export const setLoginUser = (state) => ({ type: ActionTypes.SET_LOGIN_USER, state });
export const clearLoginUser = (state) => ({ type: ActionTypes.CLEAR_LOGIN_USER, state });

export function getUserMe() {
  return function (dispatch) {
    return fetchUserMe().then(
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

export function updateMineInfo(data) {
  return function (dispatch) {
    const { id } = selectUserMe(store.getState());
    return apiUpdateUserInfo(id, data).then(
      () => {
        dispatch(setLoginUser(data));
        message.success(intl.get('EDIT_SUCESS'));
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

export function updateMinePwd(data) {
  return function (dispatch) {
    return apiUpdateMinePwd({
      new: encryptPassword(data.new),
      old: encryptPassword(data.old)
    }).then(
      (response) => {
        message.success(intl.get('EDIT_SUCESS'));
        return response.data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
