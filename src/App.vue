<template>
  <div id="app">
    <p class="title">Todos</p>
    <todo-input @add-todo="addTodo" @select-all="markAllCompleted"></todo-input>
    <div class="todo-list-wrapper">
      <todo-list
        v-for="todo in todos"
        :key="todo.id"
        :initial-todo="todo"
        @toggle-active="toggleActive"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      ></todo-list>
    </div>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      todos: []
    };
  },
  created: function() {
    this.todos = JSON.parse(localStorage.getItem('todo-list')) || [];
  },
  updated: function() {
    this.updateLocalStorage();
  },
  methods: {
    addTodo: function(input) {
      this.todos.push({
        id: Date.now(),
        content: input,
        active: true
      });
    },
    markAllCompleted: function() {
      this.todos = this.todos.map(item => {
        item.active = !item.active;
        return item;
      });
    },
    toggleActive: function(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        todo.active = !todo.active;
        this.todos.splice(index, 1, todo);
      }
    },
    updateTodo: function(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1, todo);
      }
    },
    deleteTodo: function(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    updateLocalStorage: function() {
      localStorage.setItem('todo-list', JSON.stringify(this.todos));
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 500px;
}

.title {
  font-size: 30px;
  font-weight: bold;
}

.todo-list-wrapper {
  margin: 20px 5px;
}
</style>
