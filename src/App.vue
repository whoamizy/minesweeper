<template>
  <div class="flex min-h-dvh items-center justify-center">
    <div class="overflow-hidden rounded-2xl bg-gray-600 p-4">
      <Header class="mb-4" />
      <Cells />
    </div>
  </div>
</template>

<script setup lang="ts">
import Cells from './components/Cells.vue';
import Header from './components/Header.vue';
</script>
