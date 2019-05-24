import React from "react";
import { shallow } from "enzyme";
import { Shop } from "./Shop.js";

jest.mock('tiny-slider-react', () => 'TinySlider');

describe("Shop", () => {

  const props = {
    shop: [
      {
        description: "test description",
        id: "23",
        imageUrl: ["https://test-image1.url", "https://test-image2.url"],
        material: "material",
        name: "test name",
        price: "99",
        size: "xl"
      }
    ]
  };

  it("should render correctly", () => {
    const output = shallow(<Shop {...props} />);
    expect(output).toMatchSnapshot();
  });
});
