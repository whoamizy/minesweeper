<template>
  <div class="grid grid-cols-10 grid-rows-10">
    <Cell v-for="i in 100" :key="i" />
  </div>
</template>

<script setup lang="ts">
import Cell from './Cell.vue';
</script>
