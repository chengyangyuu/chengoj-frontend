<template>
  <div class="home">
    <MdEditor :value="value" :handle-Change="onChange" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import MdEditor from "@/components/MdEditor.vue";
import { ref } from "vue"; // @ is an alias to /src

const value = ref();

const onChange = (v: string) => {
  value.value = v;
};
</script>
