// Link.react.test.js
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Link from '../Link';

test('Link changes the class when hovered', async () => {
  const component = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Updated test case with a Link to a different address
it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://www.instagram.com">Instagram</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});