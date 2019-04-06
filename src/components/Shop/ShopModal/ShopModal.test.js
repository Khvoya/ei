import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ShopModal from './ShopModal';

describe('ShopModal', () => {

  it('should render correctly', () => {
    const output = shallow(
      <ShopModal />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
