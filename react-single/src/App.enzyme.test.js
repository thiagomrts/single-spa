import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Input, Button, ListItem } from "./styles";

describe("App Component with Enzyme", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("adds item to list", () => {
    const wrapper = shallow(<App />);
    wrapper.find(Input).simulate("change", { target: { value: "New Item" } });
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(ListItem).length).toBe(1);
    expect(wrapper.find(ListItem).text()).toBe("New Item");
  });

  it("does not add empty item to list", () => {
    const wrapper = shallow(<App />);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(ListItem).length).toBe(0);
  });
});
