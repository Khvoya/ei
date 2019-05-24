import React from 'react';
import { shallow } from 'enzyme';
import { ShopModal } from './ShopModal';

describe('ShopModal', () => {

  const props = {
    description: 'test description',
    image: ['https://test-image1.url', 'https://test-image2.url'],
    material: 'material',
    name: 'test name',
    onHide: () => {},
    price: '99',
    show: false,
    size: 'xl'
  };

  it('should render correctly', () => {
    const output = shallow(
      <ShopModal {...props}/>
    );
    expect(output).toMatchSnapshot();
  });
});
