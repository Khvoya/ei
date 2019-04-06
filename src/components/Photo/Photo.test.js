import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Photo from './Photo';

describe('Photo', () => {

  it('should render correctly', () => {
    const output = shallow(
      <Photo />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
