<template>
  <div>
    <a-button @click.prevent="handleLogin">login</a-button>
  </div>
</template>

<script setup>
import {} from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/modules/user";

const router = useRouter();

const handleLogin = () => {
  console.log("login");
  useUserStore()
    .login()
    .then(() => {
      console.log("login success");
      router.push({ path: "/" });
    });
};
</script>
<style lang="less" scoped></style>
