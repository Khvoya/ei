import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Loader from './Loader';

describe('Loader', () => {

  it('should render correctly', () => {
    const output = shallow(
      <Loader />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
