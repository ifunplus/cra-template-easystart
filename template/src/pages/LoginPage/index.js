/* jshint esversion: 6 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from '../../redux/actions/index';
import intl from 'react-intl-universal';
import LayoutLogin from '../../pages_layout/LayoutLogin';
import cfg from '../../config';
import styles from './index.module.css';

function LoginPage(props) {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    let res = await dispatch(auth.userlogin(values));
    if (res && res.is_admin) {
      props.history.push('/main/users');
    } else {
      props.history.push('/main/user');
    }
  };

  return (
    <LayoutLogin headerConfig={{ type: 'login' }}>
      <Form
        name="normal_login"
        initialValues={{
          account: '',
          password: ''
        }}
        onFinish={onFinish}
      >
        <p className={styles.title}> {intl.get('PLATFORM_NAME')} </p>
        <p className={styles.version}>{cfg.version}</p>

        <Form.Item
          name="account"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.form__button}>
            {intl.get('LOGIN')}
          </Button>
        </Form.Item>
      </Form>
    </LayoutLogin>
  );
}

export default LoginPage;
