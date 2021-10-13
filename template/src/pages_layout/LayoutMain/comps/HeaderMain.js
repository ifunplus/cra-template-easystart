import React from 'react';
import { Badge, Avatar, Menu, Dropdown } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  TranslationOutlined,
  QuestionCircleOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import Logout from '../../../components/Logout';
import { Link } from 'react-router-dom';
import styles from './HeaderMain.module.css';

const menu = (
  <Menu>
    {/* <Menu.Item key="1">
      <UserOutlined />
      个人中心
    </Menu.Item>
    <Menu.Item key="2">
      <SettingOutlined />
      个人设置
    </Menu.Item> */}
    <Menu.Item key="3">
      <Logout />
    </Menu.Item>
  </Menu>
);

function HeaderMain(props) {
  const { currentUser } = props;
  return (
    <header className={styles.header}>
      <div className={styles.header__div}>
        <div className={styles.header__left}>
          <span className={styles.usename}>left</span>
        </div>
        <div className={styles.header__right}>
          <span className={styles.header__icon}>
            <QuestionCircleOutlined />
          </span>
          <span className={styles.header__user__info}>
            <Dropdown overlay={menu}>
              <Avatar className={styles.avatar} icon={<UserOutlined />} />
            </Dropdown>
            <span className={styles.usename}>{currentUser.account}</span>
          </span>
          <span className={styles.header__icon}>
            <TranslationOutlined />
          </span>
        </div>
      </div>
    </header>
  );
}

HeaderMain.propTypes = {};

export default HeaderMain;
