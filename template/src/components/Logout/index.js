import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginOutlined } from '@ant-design/icons';
import { auth } from '../../redux/actions/index';
function index(props) {
  const dispatch = useDispatch();

  const logout = async () => {
    await dispatch(auth.userlogout());
  };

  return (
    <span onClick={logout}>
      <LoginOutlined />
      <span>退出登录</span>
    </span>
  );
}

export default withRouter(index);
