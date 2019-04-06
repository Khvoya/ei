import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import PhotoItem from './PhotoItem';

describe('PhotoItem', () => {

  it('should render correctly', () => {
    const output = shallow(
      <PhotoItem />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
