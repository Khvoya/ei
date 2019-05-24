import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {

  it('should render correctly', () => {
    const output = shallow(
      <Footer />
    );
    expect(output).toMatchSnapshot();
  });
});
