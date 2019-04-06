import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ShopItem from './ShopItem';

describe('ShopItem', () => {

  it('should render correctly', () => {
    const output = shallow(
      <ShopItem />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
