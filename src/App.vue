<template>
  <div id="app">
    <p class="title">Todos</p>
    <todo-input @add-todo="addTodo" @select-all="toggleAllStatus"></todo-input>
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
    <control-panel
      :left-item-amount="leftItemAmount"
      :hide-clear-btn="hideClearBtn"
      @clear-completed="clearCompleted"
    ></control-panel>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import ControlPanel from './components/ControlPanel.vue';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList,
    ControlPanel
  },
  data() {
    return {
      todos: []
    };
  },
  computed: {
    leftItemAmount: function() {
      return this.todos.filter(item => item.active).length;
    },
    hideClearBtn: function() {
      return this.leftItemAmount === this.todos.length;
    }
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
    toggleAllStatus: function() {
      if (this.leftItemAmount === 0) {
        this.todos = this.todos.map(item => {
          item.active = true;
          return item;
        });
      } else {
        this.todos = this.todos.map(item => {
          item.active = false;
          return item;
        });
      }
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
    clearCompleted: function() {
      this.todos = this.todos.filter(item => item.active);
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
