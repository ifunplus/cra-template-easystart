import * as ActionTypes from '../ActionTypes';

function currentUser(state = {}, action) {
  switch (action.type) {
    case ActionTypes.SET_LOGIN_USER:
      return { ...state, ...action.state };
    case ActionTypes.CLEAR_LOGIN_USER:
      return {};
    default:
      return state;
  }
}

export default currentUser;
