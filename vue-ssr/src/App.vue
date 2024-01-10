<script setup>
import { reactive } from "vue";
const state = reactive({
  message: "ni hao",
});
const onClick = () => {
  state.message = "ni ni hao hao";
};
</script>

<template>
  <div>{{ state.message }}</div>
  <button @click="onClick">你好</button>
</template>
