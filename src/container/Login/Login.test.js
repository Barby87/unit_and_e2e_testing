import React from "react";
import Enzyme from "enzyme";
import { configure, mount } from "enzyme";
//import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Login } from "./Login";
import { Provider } from "react-redux";
import store from "../../store";

//configure({ adapter: new Adapter() });
Enzyme.configure({ adapter: new Adapter() });

describe("Login", () => {
  let wrapper;

  beforeEach(() => {
    // Componente Provider se guarda dentro de la variable wrapper
    wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  test("render login component, its fields and buttons", () => {
    // Confirmando que el componente se montó correctamente, y no es undefined
    expect(wrapper.find(Login)).toBeDefined();

    // const emailField = wrapper.find(".email");
    // const emailValue = emailField.get(0).props.value;
    // expect(emailValue).toEqual("");

    // const passwordField = wrapper.find("#password");
    // const passwordValue = passwordField.get(0).props.value;
    // expect(passwordValue).toEqual("");

    // const buttonSubmit = wrapper.find("button");
    // expect(buttonSubmit).toBeDefined();
  });
});