import React from "react";
import { shallow } from "enzyme";
import ConcertItem from "./ConcertItem";

describe("ConcertItem", () => {
  const props = {
    club: "Port Sevkabel",
    country: "Russia, Saint-Petersburg",
    date: "09.06.2019",
    link: "https://vk.com/duhulits2"
  };

  it("should render correctly", () => {
    const output = shallow(<ConcertItem  {...props}/>);
    expect(output).toMatchSnapshot();
  });
});
