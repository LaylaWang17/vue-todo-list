<template>
  <el-row class="control-panel" type="flex" align="middle" justify="space-between">
    <el-col :span="5" class="left-item-amount">
      <span>{{ leftItemAmount }}</span> items left
    </el-col>
    <el-col :span="12">
      <el-tabs v-model="activeTab" @tab-click="$emit('toggle-tab', activeTab)">
        <el-tab-pane label="All" name="all"></el-tab-pane>
        <el-tab-pane label="Active" name="active"></el-tab-pane>
        <el-tab-pane label="Completed" name="completed"></el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="7" class="clear-btn-wrapper">
      <el-link
        class="clear-btn"
        :class="{ hide: hideClearBtn }"
        :underline="false"
        @click="$emit('clear-completed')"
      >Clear completed</el-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    leftItemAmount: Number,
    completedItemAmount: Number
  },
  data() {
    return {
      activeTab: "all"
    };
  },
  computed: {
    hideClearBtn() {
      return this.activeTab === "active" || this.completedItemAmount === 0;
    }
  }
};
</script>

<style>
.control-panel {
  font-size: 14px;
  color: #2c3e50;
}
.left-item-amount {
  text-align: left;
}
.el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
  height: 35px;
}
.el-tabs__item {
  min-width: 60px;
}
.clear-btn-wrapper {
  text-align: right;
}
.hide {
  opacity: 0;
}
</style>
