<template>
  <div>
    <Nightmare/>
  </div>
</template>

<script lang="ts" setup>
import Nightmare from './Nightmare/index.vue';
import { onMounted, onActivated, onUnmounted } from 'vue';
defineOptions({ name: 'Test' });

const str = '';

onMounted(() => {
});
</script>
