<template>
  <div id="code-editor" ref="codeEditorRef" style="min-height: 400px"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from "vue";
import * as monaco from "monaco-editor";

const codeEditorRef = ref();
const codeEditor = ref();
const value = ref("hello world");

const fillValue = () => {
  if (!codeEditor.value) {
    return;
  }
  //改变值
  toRaw(codeEditor.value).setValue("新的值");
};
onMounted(() => {
  if (!codeEditorRef.value) {
    return;
  }
  codeEditorRef.value = monaco.editor.create(codeEditorRef.value, {
    value: value.value,
    language: "java",
    automaticLayout: true,
    colorDecorators: true,
    minimap: {
      enabled: true,
    },
    readOnly: false,
    theme: "vs-dark",
  });
  codeEditor.value.onDidChangeModelContent(() => {
    console.log("目前内容为:", toRaw(codeEditor.value).getValue());
  });
});
</script>

<style scoped></style>
