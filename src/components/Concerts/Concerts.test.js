import React from "react";
import { shallow } from "enzyme";
import Concerts from "./Concerts";

describe("Concerts", () => {
  it("should render correctly", () => {
    const props = {
      concerts: [
        {
          club: "club",
          country: "russia",
          date: "09.09.2000",
          link: "event.com"
        }
      ]
    };
    const output = shallow(<Concerts {...props} />);
    expect(output).toMatchSnapshot();
  });
});
