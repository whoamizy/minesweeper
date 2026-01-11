<template>
  <div class="grid grid-cols-10 grid-rows-10">
    <Cell
      v-for="(cell, idx) in board"
      :key="cell.id"
      :cell
      @open-cell="openCell(idx)"
    />
  </div>
</template>

<script setup lang="ts">
import { useCellsStore } from '@/stores/useCellsStore';
import { onMounted, toRefs } from 'vue';
import Cell from './Cell.vue';

const cellsStore = useCellsStore();
const { board } = toRefs(cellsStore);
const { initBoard, openCell } = cellsStore;

onMounted(() => {
  initBoard();
});
</script>
