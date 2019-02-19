import React from 'react';
import Social from './Social';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

configure({ adapter: new Adapter() });

describe('<Social />', () => {
  it('should contain one <FontAwesomeIcon', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('allows us to set props', () => {
    const wrapper = mount(
      <Social fa={{ prefix: 'far', iconName: 'check' }} title="share" />
    );

    expect(wrapper.props().fa.iconName).toBe('check');
    expect(wrapper.props().title).toBe('share');
  });
});
