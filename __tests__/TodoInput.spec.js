import { mount } from "@vue/test-utils";

import TodoInput from "../src/components/TodoInput.vue";
import "../src/element-ui";

describe("TodoInput", () => {
  const defaultwrapper = mount(TodoInput);

  test("is a Vue instance", () => {
    expect(defaultwrapper.isVueInstance()).toBeTruthy();
  });

  test("should placeholder is 'What needs to be done?'", () => {
    expect(defaultwrapper.find("input").attributes("placeholder")).toBe(
      "What needs to be done?"
    );
  });

  test("should 'addTodo' method be called", () => {
    const addTodo = jest.fn();
    defaultwrapper.setMethods({ addTodo: addTodo });
    defaultwrapper.trigger("submit");
    expect(addTodo).toHaveBeenCalled();
  });
});
