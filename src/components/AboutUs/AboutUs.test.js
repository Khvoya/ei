import React from "react";
import { shallow } from "enzyme";
import { AboutUs } from "./AboutUs";

describe("AboutUs component", () => {
  const props = {
    urls: [
      "https://first-test-url.com",
      "https://second-test-url.com",
      "https://third-test-url.com"
    ]
  };

  it("should render correctly", () => {
    const output = shallow(<AboutUs {...props} />);
    expect(output).toMatchSnapshot();
  });
});
