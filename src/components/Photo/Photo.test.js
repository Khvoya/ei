import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo', () => {

  it('should render correctly', () => {
    const output = shallow(
      <Photo />
    );
    expect(output).toMatchSnapshot();
  });
});
