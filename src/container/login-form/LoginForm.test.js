import Enzyme, { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { LoginForm } from "./LoginForm";
import { Provider } from 'react-redux';
import store from "../../store";

Enzyme.configure({ adapter: new Adapter() });

describe("Test LoginForm", () => {
    let wrapper;
    // Componente repetitivo
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <LoginForm />
            </Provider>
            );
    })

    afterAll(() => {
        // Desmontaje de LoginForm
        wrapper.unmount();
    })

    test("Renders LoginForm", () => {
        // Montaje de LoginForm
        expect(wrapper).toBeDefined();
    });

    test("Renders email and must be an input", () => {
        // Buscando la clase 'email', se obtiene la longitud el primer elemento del grupo de elementos con clase 'email'. Método .get() lanza un React element.
        const email = wrapper.find('.email').get(0); // length = 2
        // Se espera que el elemento tenga el atributo 'type' = 'input'
        expect(email).toHaveProperty('type', 'input');
    });

    test("Renders email and must be an input with name email", () => {
        const email = wrapper.find('.email').get(0).props.name;
        expect(email).toMatch('email');
    });

    test("Renders email and must be an input with name password", () => {
        const password = wrapper.find('#password').get(0).props.name;
        expect(password).toMatch('password');

    });

    test("Renders button Submit", () => {
        let buttonSubmit = wrapper.find("#buttonSubmit").first();
        expect(buttonSubmit.text()).toContain('Submit');
    });

    test("confirms submit of form", async () => {
        const form = wrapper.find('form').first();
        form.simulate('submit', {
        preventDefault: () => {},
        });
      });

    test("Simulate change event", () => {
        const item = 'janet.weaver@reqres.in'
        const input = wrapper.find('input').first();
        input.simulate('change', {
          target: { value: item }
        })
    })
});