import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ConcertItem from './ConcertItem';

describe('ConcertItem', () => {

  it('should render correctly', () => {
    const output = shallow(
      <ConcertItem />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
