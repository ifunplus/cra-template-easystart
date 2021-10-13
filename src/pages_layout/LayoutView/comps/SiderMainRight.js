/* jshint esversion: 6 */
import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;


function SiderMainRight(props) {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Sider width={400} reverseArrow={true} collapsible={false}>
      {props.children}
    </Sider>
  );
}

export default SiderMainRight;
