<template>
  <form @submit.prevent="addTodo">
    <el-input class="input" placeholder="What needs to be done?" v-model="input">
      <el-button
        class="select-all-btn"
        slot="prepend"
        icon="el-icon-arrow-down"
        @click="$emit('select-all')"
      ></el-button>
    </el-input>
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    addTodo() {
      this.$emit("add-todo", this.input);
      this.input = "";
    }
  }
};
</script>

<style lang="sass" scoped>
.input
  font-size: 16px !important

  .select-all-btn
    font-size: 20px !important
</style>
