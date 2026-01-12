<template>
  <div class="flex min-h-dvh flex-col items-center justify-center gap-4">
    <GameInfo v-if="isGameOver" />
    <div class="overflow-hidden rounded-2xl bg-gray-600 p-4">
      <Header class="mb-4" />
      <Cells />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Cells from './components/Cells.vue';
import GameInfo from './components/GameInfo.vue';
import Header from './components/Header.vue';
import { useCellsStore } from './stores/useCellsStore';

const cellsStore = useCellsStore();
const { isGameOver } = storeToRefs(cellsStore);
</script>
