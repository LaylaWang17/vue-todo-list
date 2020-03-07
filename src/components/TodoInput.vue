<template>
  <form @submit.prevent="$emit('add-todo', input)">
    <el-input
      class="input"
      placeholder="What needs to be done?"
      v-model="input"
    >
      <el-button
        class="select-all-btn"
        slot="prepend"
        icon="el-icon-arrow-down"
      ></el-button>
    </el-input>
  </form>
</template>
<style>
.input {
  font-size: 16px !important;
}
.select-all-btn {
  font-size: 20px !important;
}
</style>
<script>
export default {
  data() {
    return {
      input: ''
    };
  }
};
</script>
