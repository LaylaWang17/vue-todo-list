<template>
  <div id="app">
    <p class="title">Todos</p>
    <todo-input @add-todo="addTodo"></todo-input>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
export default {
  name: 'App',
  components: {
    TodoInput
  },
  methods: {
    addTodo: function(todo) {
      console.log(todo);
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
