import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ShopModalForm from './ShopModalForm';

describe('ShopModalForm', () => {

  it('should render correctly', () => {
    const output = shallow(
      <ShopModalForm />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
