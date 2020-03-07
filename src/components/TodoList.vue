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
      <form @submit.prevent="updateTodo">
        <input
          class="todo"
          :class="todoStatus"
          v-model="input"
          @change="updateTodo"
        />
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
      input: this.initialTodo.content
    };
  },
  computed: {
    checkBtnType: function() {
      return this.initialTodo.active ? '' : 'primary';
    },
    todoStatus: function() {
      return this.initialTodo.active ? '' : 'completed';
    },
    todo: function() {
      return this.initialTodo;
    }
  },
  methods: {
    updateTodo: function() {
      this.todo.content = this.input;
      this.$emit('update-todo', this.todo);
    }
  }
};
</script>

<style>
.todo-wrapper {
  margin: 20px 0px;
  padding: 5px 0px;
  border-bottom: solid 1px #dcdfe6;
}
.todo {
  border: none;
  outline: none;
  font-size: 22px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width: 100%;
  padding: 0px 15px;
}
.completed {
  color: #bfc1c5;
  text-decoration: line-through;
}
</style>
