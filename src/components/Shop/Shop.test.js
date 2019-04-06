import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Shop from './Shop.js';

describe('Shop', () => {

  it('should render correctly', () => {
    const output = shallow(
      <Shop />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
