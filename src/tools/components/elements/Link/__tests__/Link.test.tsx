import Link from '..';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Link page="https://vk.com">Vkontakte</Link>);
  let tree: any = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree!.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //manually trigger the callback
  tree!.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
