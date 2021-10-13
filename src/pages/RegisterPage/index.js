/* jshint esversion: 6 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from '../../redux/actions/index';
import intl from 'react-intl-universal';
import cfg from '../../config';
import LayoutLogin from '../../pages_layout/LayoutLogin';
import loginStyles from '../LoginPage/index.module.css';

function RegisterPage(props) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    await dispatch(auth.userlogin(values));
    props.history.push('/main');
  };

  return (
    <LayoutLogin headerConfig={{ type: 'register' }}>
      <Form
        name="normal_login"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <p className={loginStyles.title}> {intl.get('PLATFORM_NAME')} </p>
        <p className={loginStyles.version}>{cfg.version}</p>

        <Form.Item
          name="account"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={intl.get('ACCOUNT')} />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={intl.get('REALNAME')} />
        </Form.Item>

        <Form.Item
          name="hospital"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={intl.get('ORANGNIZATION')} />
        </Form.Item>

        <Form.Item
          name="office"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={intl.get('OFFICE')} />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={intl.get('CELL_PHONE')} />
        </Form.Item>

        <Form.Item
          name="good_at"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={intl.get('GOOD_AT')} />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={intl.get('GENDER')} />
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
          <Input prefix={<LockOutlined />} type="password" placeholder={intl.get('PASSWORD')} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={loginStyles.form__button}>
            {intl.get('REGISTER')}
          </Button>
        </Form.Item>
      </Form>
    </LayoutLogin>
  );
}

export default RegisterPage;
