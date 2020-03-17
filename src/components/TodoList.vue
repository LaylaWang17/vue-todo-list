<template>
  <div class="todo-list-wrapper">
    <div v-if="initialTodos.length === 0" class="empty-list">Nothing left : )</div>
    <div v-else>
      <todo
        v-for="todo in initialTodos"
        :key="todo.id"
        :initial-todo="todo"
        @toggle-active="$emit('toggle-active', todo)"
        @update-todo="$emit('update-todo', todo)"
        @delete-todo="$emit('delete-todo', todo)"
      />
    </div>
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

<style lang="sass" scoped>
.todo-list-wrapper
  margin: 20px 0px
  padding: 0px 10px
  min-height: 100px
  max-height: 420px
  overflow: scroll

  .empty-list
    font-size: 20px
    font-weight: bold
    color: #bfc1c5
    padding-top: 30px
</style>