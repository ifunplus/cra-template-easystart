/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import SiderMain from './comps/SiderMain';
import HeaderMain from './comps/HeaderMain';
import ContentRouters from './comps/ContentRouters';
import FooterMain from './comps/FooterMain';

import { adminMenus } from './menusConfig';
import styles from './index.module.css';

const LayoutMain = (props) => {
  const { is_admin, currentUser } = props;
  const menus = adminMenus;
  const defaultSelectedKey = 'icon';
  return (
    <Layout className={styles.layout}>
      <SiderMain menus={menus} defaultSelectedKey={defaultSelectedKey} />
      <Layout className={styles.layout__main}>
        <HeaderMain currentUser={currentUser} />
        <ContentRouters is_admin={is_admin} />
        <FooterMain />
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  is_admin: state.currentUser.is_admin
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutMain);
