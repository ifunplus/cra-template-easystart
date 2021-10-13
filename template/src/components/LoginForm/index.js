import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from '../../redux/actions/index';
import { Link } from 'react-router-dom';
import intl from 'react-intl-universal';

import styles from './index.module.css';

function index(props) {
  return (
    <Form
      name="normal_login"
      className={styles.form}
      initialValues={{
        remember: true
      }}
      onFinish={props.onFinish}
    >
      <p className="title"> {intl.get('PLATFORM_NAME')} </p>
      <p className="version">IRCP 2.0.0.200512 </p>

      <Form.Item
        name="account"
        rules={[
          {
            required: true,
            message: 'Please input your Username!'
          }
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          {intl.get('LOGIN')}
        </Button>
      </Form.Item>
    </Form>
  );
}

index.propTypes = {};

export default index;
