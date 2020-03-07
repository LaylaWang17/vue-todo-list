<template>
  <el-row class="todo-wrapper">
    <el-col :span="2">
      <el-button
        :type="type"
        icon="el-icon-check"
        size="mini"
        circle
      ></el-button>
    </el-col>
    <el-col :span="20">
      <input class="todo" v-model="input" />
    </el-col>
    <el-col :span="2">
      <el-link
        class="delete-btn"
        icon="el-icon-close"
        :underline="false"
      ></el-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      input: this.todo.content,
      type: this.todo.active ? '' : 'primary'
    };
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
</style>
