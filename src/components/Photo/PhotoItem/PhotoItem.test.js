import React from 'react';
import { shallow } from 'enzyme';
import PhotoItem from './PhotoItem';

describe('PhotoItem', () => {
  const props = {
    photo: "https://firebasestorage.googleapis.com/v0/b/electr…=media&token=51f911d5-1558-4446-aa64-f428aba02f48",
  };
  it('should render correctly', () => {
    const output = shallow(
      <PhotoItem {...props}/>
    );
    expect(output).toMatchSnapshot();
  });
});
