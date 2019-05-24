import React from 'react';
import { shallow } from 'enzyme';
import ShopModalForm from './ShopModalForm';

describe('ShopModalForm', () => {
  const props = {
    name: "Iphone Sticker Hello Yellow",
    onHide: () => {},
    price: "3$",
  };
  it('should render correctly', () => {
    const output = shallow(
      <ShopModalForm {...props}/>
    );
    expect(output).toMatchSnapshot();
  });
});
