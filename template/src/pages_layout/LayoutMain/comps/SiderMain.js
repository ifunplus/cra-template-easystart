/* jshint esversion: 6 */
import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { IconsMappedConfig } from '../menusConfig';
import { NavLink, withRouter } from 'react-router-dom';
import intl from 'react-intl-universal';
import styles from './SiderMain.module.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SiderMain(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([window.location.pathname.split('/')[2] || props.defaultSelectedKeys]);

  useEffect(function setupListener() {
    function handleDefaultSelectedKeys() {
      setSelectedKeys([window.location.pathname.split('/')[2] || props.defaultSelectedKeys]);
    }
    handleDefaultSelectedKeys()
  }, [props.history.location.pathname]); // An empty array makes sure useEffect run only once when the component is mounted.

  const handleClick = (e) => {
    setSelectedKeys([e.key]);
  };

  const { menus } = props;
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <div className={styles.logo}>
        icon
      </div>
      <Menu
        theme="dark"
        onClick={handleClick}
        defaultSelectedKeys={selectedKeys}
        selectedKeys={selectedKeys}
        defaultOpenKeys={['task']}
        mode="inline"
      >
        {menus.map((menu) => {
          if (!menu.children) {
            return (
              <Menu.Item key={menu.key} icon={IconsMappedConfig[menu.icon]}>
                <NavLink to={menu.router}>{intl.get(menu.title.toUpperCase())}</NavLink>
              </Menu.Item>
            );
          } else {
            return (
              <SubMenu
                key={menu.key}
                icon={IconsMappedConfig[menu.icon]}
                title={intl.get(menu.title.toUpperCase())}
              >
                {menu.children.map((child) => {
                  return (
                    <Menu.Item key={child.key}>
                      <NavLink to={child.router}>{intl.get(child.title.toUpperCase())}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          }
        })}
      </Menu>
    </Sider>
  );
}

export default withRouter(SiderMain);
