<template>
  <div class="flex items-center justify-between gap-3">
    <div class="inline-flex items-center gap-2 rounded bg-gray-200 p-2">
      <img src="/icons/bomb.svg" alt="Bomb" class="size-5 shrink-0" />
      {{ minesLeft.toString().padStart(2, '0') }}
    </div>
    <h1 class="text-2xl font-bold text-gray-200">Minesweeper</h1>
    <div class="rounded bg-gray-200 p-2">{{ timer }}</div>
  </div>
</template>

<script setup lang="ts">
import { useCellsStore } from '@/stores/useCellsStore';
import { useTimerStore } from '@/stores/useTimerStore';
import { toRefs } from 'vue';

const timerStore = useTimerStore();
const { timer } = toRefs(timerStore);
const cellsStore = useCellsStore();
const { minesLeft } = toRefs(cellsStore);
</script>
