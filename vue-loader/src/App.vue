<template>
  <div>{{ message }} <button @click="onClick">按钮</button></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const message = ref("ni");
const onClick = () => {
  console.log(22);
};
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
