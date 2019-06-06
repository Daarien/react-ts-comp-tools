import React from 'react';
import { shallow, render } from 'enzyme';

import Foo from '../';

describe('Foo', () => {
  let foo;
  beforeEach(() => (foo = shallow(<Foo />)));

  it('should render without throwing an error', () => {
    expect(foo.contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(foo.is('.foo')).toBe(true);
  });

  // it('should mount in a full DOM', function() {
  //   expect(mount(<Foo />).find('.foo').length).toBe(1);
  // });

  it('should render to static HTML', function() {
    expect(render(<Foo />).text()).toEqual('Bar');
  });
});
