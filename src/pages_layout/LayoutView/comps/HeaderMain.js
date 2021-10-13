import React from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  TranslationOutlined,
  QuestionCircleOutlined,
  MenuOutlined
} from '@ant-design/icons';
import Logout from '../../../components/Logout';
import { withRouter } from 'react-router-dom';
import styles from './HeaderMain.module.css';



const menu = (
  <Menu>
    <Menu.Item key="3">
      <Logout />
    </Menu.Item>
  </Menu>
);

function HeaderMain(props) {
  const { currentUser } = props;
  const goBack = () => {
    props.history.goBack()
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__div}>
        <div className={styles.header__left}>
          <span className={styles.header__logo}>
           logo
          </span>

          <div className={styles.header_tools}>
             tool
          </div>
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

export default withRouter(HeaderMain);
