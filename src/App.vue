<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
//获取一下路由
const route = useRoute();

//全局的初始化函数,有全局单词调用的代码
const doInit = () => {
  console.log("hello,my friend");
};
//在来个全局的钩子函数
onMounted(() => {
  doInit();
});
</script>
