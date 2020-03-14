import { mount } from "@vue/test-utils";
import TodoList from "../src/components/TodoList.vue";
import "../src/element-ui";

describe("TodoList", () => {
  const emptyListWrapper = mount(TodoList, {
    propsData: {
      initialTodos: []
    }
  });

  const listWrapper = mount(TodoList, {
    propsData: {
      initialTodos: [
        { id: 1, content: "eat", active: false },
        { id: 2, content: "study", active: true }
      ]
    }
  });

  test("is a Vue instance", () => {
    expect(emptyListWrapper.isVueInstance()).toBeTruthy();
  });

  test("should show empty list prompt", () => {
    const emptyListPrompt = emptyListWrapper.find(".empty-list");
    expect(emptyListPrompt.exists()).toBeTruthy();
    expect(emptyListPrompt.text()).toBe("Nothing left : )");

    expect(emptyListWrapper.find(".todo-wrapper").exists()).toBeFalsy();
  });

  test("should show todos", () => {
    expect(listWrapper.find(".empty-list").exists()).toBeFalsy();
    expect(listWrapper.findAll(".todo-wrapper").length).toBe(2);
  });
});
