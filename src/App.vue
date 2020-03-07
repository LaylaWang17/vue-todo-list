<template>
  <div id="app">
    <p class="title">Todos</p>
    <todo-input @add-todo="addTodo"></todo-input>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.content }}</li>
    </ul>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
export default {
  name: 'App',
  components: {
    TodoInput
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo: function(input) {
      this.todos.push({
        id: Date.now(),
        content: input
      });
      this.updateLocalStorage();
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
</style>
