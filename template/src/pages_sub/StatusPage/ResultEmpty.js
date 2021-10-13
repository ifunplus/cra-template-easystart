import React from 'react';
import { Empty, Button } from 'antd';
function ResultEmpty() {
  return (
    <div>
      <div style={{ textAlign: 'center', height: '200px', lineHeight: '200px' }}>
        这是一个空白页面
      </div>
      <Empty />
    </div>
  );
}

export default ResultEmpty;
