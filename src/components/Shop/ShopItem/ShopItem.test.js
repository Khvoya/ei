import React from 'react';
import { shallow } from 'enzyme';
import { ShopItem } from './ShopItem';

describe('ShopItem', () => {

  const props = {
    description: 'test description',
    id: '23',
    imageUrl: ['https://test-image1.url', 'https://test-image2.url'],
    material: 'material',
    name: 'test name',
    price: '99',
    size: 'xl'
  };

  it('should render correctly', () => {
    const output = shallow(
      <ShopItem {...props} />
    );
    expect(output).toMatchSnapshot();
  });
});
