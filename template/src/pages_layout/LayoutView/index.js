/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import SiderMainRight from './comps/SiderMainRight';
import HeaderMain from './comps/HeaderMain';
import ContentRouters from './comps/ContentRouters';
import { withRouter } from 'react-router-dom';
import styles from './index.module.css';
import './index.less';

const LayoutView = (props) => {
  const { is_admin, currentUser, viewer } = props;

  return (
    <Layout className={styles.layout}>
      <HeaderMain currentUser={currentUser} />
      <Layout className={styles.layout__main}>
        <Layout style={{ padding: '0' }}>
          <ContentRouters is_admin={is_admin} />

          <SiderMainRight className={styles.layout__sider}>right</SiderMainRight>
        </Layout>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  is_admin: state.currentUser.is_admin,
  viewer: state.viewer
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LayoutView));
