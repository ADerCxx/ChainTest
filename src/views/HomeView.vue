<template>
  <main>
    <TheWelcome />
    <div class="chaintest"></div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

const fontColor = ref('#999')
</script>

<style scoped lang="less">
.chaintest {
  display: flex;
  flex: 1;
  align-items: center;
  width: 13px;
  height: 20px;
  color: v-bind(fontColor);
  background-color: blue;
}
</style>
