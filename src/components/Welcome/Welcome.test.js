import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Welcome from './Welcome';

describe('Welcome', () => {

  it('should render correctly', () => {
    const output = shallow(
      <Welcome />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
