import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Concerts from './Concerts';

describe('Concerts', () => {

  it('should render correctly', () => {
    const output = shallow(
      <Concerts />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
