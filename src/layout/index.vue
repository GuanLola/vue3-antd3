<template>
  <div :class="classObj">
    <SideBar />
    <AppMain />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { AppMain, SideBar } from "./components";

const classObj = computed(() => {
  return {};
});
</script>
<style lang="less" scoped></style>
