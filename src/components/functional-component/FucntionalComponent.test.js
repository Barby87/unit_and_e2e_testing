import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FunctionalComponent from "./FunctionalComponent";

configure({ adapter: new Adapter() });

describe("<FunctionalComponent/>", () => {
  test("render", () => {
    const wrapper = shallow(<FunctionalComponent />);
    expect(wrapper.find(FunctionalComponent)).toBeDefined();
  });
});
