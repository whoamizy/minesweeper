<template>
  <div class="grid grid-cols-10 grid-rows-10">
    <Cell
      v-for="cell in board"
      :key="cell.id"
      :cell
      @open-cell="openCell"
      @toggle-flag="toggleFlag"
    />
  </div>
</template>

<script setup lang="ts">
import { useCellsStore } from '@/stores/useCellsStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import Cell from './Cell.vue';

const cellsStore = useCellsStore();
const { board } = storeToRefs(cellsStore);
const { initBoard, openCell, toggleFlag } = cellsStore;

onMounted(() => {
  initBoard();
});
</script>
