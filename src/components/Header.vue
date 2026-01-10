<template>
  <div class="flex items-center justify-between gap-3">
    <div class="rounded-2xl bg-gray-200 p-2">{{ minesCount }}</div>
    <h1 class="text-2xl font-bold text-gray-200">Minesweeper</h1>
    <div class="rounded-2xl bg-gray-200 p-2">{{ timer }}</div>
  </div>
</template>

<script setup lang="ts">
import { useTimerStore } from '@/stores/useTimerStore';
import { toRefs } from 'vue';

const timerStore = useTimerStore();
const { timer } = toRefs(timerStore);

const minesCount = 99;
</script>
