import React from "react";
import { shallow } from "enzyme";
import Welcome from "./Welcome";

describe("Welcome", () => {
  const props = {
    isLoaded: true,
    url:
      "https://firebasestorage.googleapis.com/v0/b/electr…=media&token=3336a0d6-a7f3-476d-8ff8-b09575f89744"
  };
  it("should render correctly", () => {
    const output = shallow(<Welcome {...props}/>);
    expect(output).toMatchSnapshot();
  });
});
