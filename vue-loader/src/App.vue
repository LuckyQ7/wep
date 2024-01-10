<template>
  <div>{{ message }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const message = ref("ni");

// export default {
//   data() {
//     return {
//       message: "ni",
//     };
//   },
// };
</script>

<style lang="less">
#app {
  background-color: steelblue;
  div {
    color: red;
  }
}
</style>
