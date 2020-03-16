import { mount, shallowMount } from "@vue/test-utils";

import App from "../src/App.vue";
import TodoInput from "../src/components/TodoInput.vue";
import TodoList from "../src/components/TodoList.vue";
import ControlPanel from "../src/components/ControlPanel.vue";
import "../src/element-ui";

describe("App", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(App);
  });

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("shold render App with title, TodoInput, TodoList, ControlPanel", () => {
    expect(wrapper.find("p").text()).toBe("Todos");
    expect(wrapper.find(TodoInput).exists()).toBeTruthy();
    expect(wrapper.find(TodoList).exists()).toBeTruthy();
    expect(wrapper.find(ControlPanel).exists()).toBeTruthy();
  });

  test("should render App with default data", () => {
    expect(wrapper.vm.todos).toEqual([]);
    expect(wrapper.vm.activeTab).toBe("all");
    expect(wrapper.vm.activeTodos).toEqual([]);
    expect(wrapper.vm.completedTodos).toEqual([]);
    expect(wrapper.vm.leftItemAmount).toBe(0);
    expect(wrapper.vm.completedItemAmount).toBe(0);
    expect(wrapper.vm.displayedTodos).toEqual([]);
  });

  test("should add a todo", () => {
    wrapper.find(TodoInput).vm.$emit("add-todo", "test");
    expect(wrapper.vm.activeTodos.length).toBe(1);
    expect(wrapper.find(TodoList).vm.initialTodos.length).toBe(1);
  });

  test("should toggle all todo status", () => {
    wrapper.setData({
      todos: [
        { id: 1, content: "eat", active: false },
        { id: 2, content: "study", active: true }
      ]
    });

    wrapper.find(TodoInput).vm.$emit("select-all");

    expect(wrapper.vm.activeTodos.length).toBe(0);
    expect(wrapper.vm.completedTodos.length).toBe(2);
  });

  test("should toggle one todo status", () => {
    const todo = { id: 1, content: "eat", active: true };
    wrapper.setData({
      todos: [todo]
    });

    wrapper.find(TodoList).vm.$emit("toggle-active", todo);

    expect(wrapper.vm.activeTodos.length).toBe(0);
    expect(wrapper.vm.completedTodos.length).toBe(1);
  });

  test("should delete one todo", () => {
    const todo = { id: 1, content: "eat", active: true };
    wrapper.setData({
      todos: [todo]
    });

    wrapper.find(TodoList).vm.$emit("delete-todo", todo);

    expect(wrapper.vm.todos.length).toBe(0);
  });

  test("should clear completed todos", () => {
    wrapper.setData({
      todos: [{ id: 1, content: "eat", active: false }]
    });

    wrapper.find(ControlPanel).vm.$emit("clear-completed");

    expect(wrapper.vm.completedTodos.length).toBe(0);
  });

  test("should toggle tab", () => {
    const completedTodo = { id: 1, content: "eat", active: false };
    const activeTodo = { id: 2, content: "study", active: true };
    wrapper.setData({
      todos: [completedTodo, activeTodo]
    });

    expect(wrapper.vm.displayedTodos.length).toBe(2);

    wrapper.find(ControlPanel).vm.$emit("toggle-tab", "active");
    expect(wrapper.vm.displayedTodos).toEqual([activeTodo]);

    wrapper.find(ControlPanel).vm.$emit("toggle-tab", "completed");
    expect(wrapper.vm.displayedTodos).toEqual([completedTodo]);
  });
});
