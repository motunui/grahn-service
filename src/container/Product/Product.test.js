import React from 'react';
import Product from './Product';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Product />', () => {
  it('Should contain state', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper.state().product).not.toBeNull();
    expect(wrapper.state('product')).toBeTruthy();
  });
});
