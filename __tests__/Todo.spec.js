import { shallowMount } from "@vue/test-utils";
import Todo from "../src/components/Todo.vue";
import "../src/element-ui";

describe("Todo", () => {
  const todoData = {
    id: 1,
    content: "test",
    active: true
  };

  const activeTodoWrapper = shallowMount(Todo, {
    propsData: {
      initialTodo: todoData
    }
  });

  const completedTodoWrapper = shallowMount(Todo, {
    propsData: {
      initialTodo: {
        ...todoData,
        active: false
      }
    }
  });

  test("is a Vue instance", () => {
    expect(activeTodoWrapper.isVueInstance()).toBeTruthy();
  });

  test("shoud data 'todo' equals props 'initialTodo'", () => {
    expect(activeTodoWrapper.vm.todo).toEqual(todoData);
  });

  test("should computed data set by props", () => {
    expect(activeTodoWrapper.vm.checkBtnType).toBe("");
    expect(activeTodoWrapper.vm.todoStatus).toBe("");
    expect(completedTodoWrapper.vm.checkBtnType).toBe("primary");
    expect(completedTodoWrapper.vm.todoStatus).toBe("completed");
  });

  test("should render completed todo", () => {
    expect(
      completedTodoWrapper.find("input").classes("completed")
    ).toBeTruthy();
    expect(completedTodoWrapper.find("input").element.value).toBe(
      todoData.content
    );
  });
});
