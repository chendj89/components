<template>
  <div>
    <VpTool ref="tool"></VpTool>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import VpTool from "@/components/vp-tool/index.vue";
let tool = ref<IVpTool>();
onMounted(() => {
  tool.value?.updateMsg("👻");
});
</script>

<style scoped></style>
