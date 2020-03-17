<template>
  <el-row class="todo-wrapper">
    <el-col :span="2">
      <el-button
        :type="checkBtnType"
        icon="el-icon-check"
        size="mini"
        circle
        @click="$emit('toggle-active', todo)"
      ></el-button>
    </el-col>
    <el-col :span="20">
      <form @submit.prevent="$emit('update-todo', todo)">
        <input class="todo" :class="todoStatus" v-model="todo.content" />
      </form>
    </el-col>
    <el-col :span="2">
      <el-link
        class="delete-btn"
        icon="el-icon-close"
        :underline="false"
        @click="$emit('delete-todo', todo)"
      ></el-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    initialTodo: Object
  },
  data() {
    return {
      todo: this.initialTodo
    };
  },
  computed: {
    checkBtnType() {
      return this.initialTodo.active ? "" : "primary";
    },
    todoStatus() {
      return this.initialTodo.active ? "" : "completed";
    }
  }
};
</script>

<style lang="sass" scoped>
.todo-wrapper
  margin: 20px 0px
  padding: 5px 0px
  border-bottom: solid 1px #dcdfe6

  .delete-btn
    color: #ffffff

  .todo
    border: none
    outline: none
    font-size: 22px
    font-family: Avenir, Helvetica, Arial, sans-serif
    color: #2c3e50
    width: 90%
    padding: 0px 15px

  .completed
    color: #bfc1c5
    text-decoration: line-through

.todo-wrapper:hover
  .delete-btn
    color: #606266

  .delete-btn:hover
    color: #409EFF
</style>
