<template>
  <div class="todo-list-wrapper">
    <todo
      v-for="todo in initialTodos"
      :key="todo.id"
      :initial-todo="todo"
      @toggle-active="$emit('toggle-active', todo)"
      @update-todo="$emit('update-todo', todo)"
      @delete-todo="$emit('delete-todo', todo)"
    />
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  components: { Todo },
  props: {
    initialTodos: Array
  }
};
</script>

<style scoped>
.todo-list-wrapper {
  margin: 20px 5px;
}
</style>