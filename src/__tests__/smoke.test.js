import React from 'react';
import ReactDOM from 'react-dom';
import Link from '../components_base/Link';
import ShallowRenderer from 'react-test-renderer/shallow'; 


//组件冒烟测试：组件在渲染过程中不会抛出异常
it('smokeTest1:  Link renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link />, div);
});

it('smokeTest2:  ShallowRender —— renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Link><span>test</span></Link>); //浅层渲染，只确保Link渲染不抛出异常
});