import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routes } from '../routesConfig';
import { Layout } from 'antd';
import styles from './ContentRouters.module.css';

const { Content } = Layout;

function ContentRouters() {
  return (
    <Content className={styles.content}>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            {route.main}
          </Route>
        ))}
      </Switch>
    </Content>
  );
}

export default withRouter(ContentRouters);
