<template>
  <div style="width: 256px">
    <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed">
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script setup>
import { reactive, watch } from "vue";
import { PieChartOutlined } from "@ant-design/icons-vue";
const state = reactive({
  collapsed: false,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
</script>
