import React from 'react';
import Link from '../components_base/Link';
import ShallowRenderer from 'react-test-renderer/shallow'; 

it('ShallowRender —— Link rendered correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Link><span>test</span></Link>);
  const result = renderer.getRenderOutput();
  // debugger;
  expect(result.type).toBe('a');
  expect(result.props.children).toEqual(
    <span>test</span>
  );
});