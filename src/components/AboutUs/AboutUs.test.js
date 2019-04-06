import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AboutUs from './AboutUs';

describe('AboutUs', () => {

  it('should render correctly', () => {
    const output = shallow(
      <AboutUs />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
