import React from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DatabaseOutlined,
  TagsOutlined
} from '@ant-design/icons';

const IconsMappedConfig = {
  UserOutlined: <UserOutlined />,
  DesktopOutlined: <DesktopOutlined />,
  DatabaseOutlined: <DatabaseOutlined />,
  TeamOutlined: <TeamOutlined />,
  TagsOutlined: <TagsOutlined />,
  PieChartOutlined: <PieChartOutlined />
};
// 管理员menus配置
const adminMenus = [
  {
    key: 'icon',
    title: 'ICON_MANAGEMENT',
    icon: 'PieChartOutlined',
    router: '/main/icon'
  },
  {
    key: 'basecomponent',
    title: 'BASE_COMPONENT_MANAGEMENT',
    icon: 'PieChartOutlined',
    router: '/main/basecomponent'
  },
  {
    key: 'mockdata',
    title: 'MOCKDATA_MANAGEMENT',
    icon: 'PieChartOutlined',
    router: '/main/mockdata'
  },
  {
    key: 'user',
    title: 'USER_MANAGEMENT',
    icon: 'UserOutlined',
    router: '/main/user'
  },
  {
    key: 'test',
    title: 'TEST_MANAGEMENT',
    icon: 'PieChartOutlined',
    router: '/main/test'
  },
];


export { adminMenus, IconsMappedConfig };
