<template>
  <div class="flex flex-col items-center gap-2">
    <h2 class="text-4xl font-bold text-gray-900">{{ statusText }}</h2>
    <button
      class="size-8 cursor-pointer rounded border border-gray-400 bg-gray-50 p-1 transition hover:bg-gray-200"
      @click.prevent="initBoard"
    >
      <img src="/icons/loop.svg" alt="Loop" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCellsStore } from '@/stores/useCellsStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const cellsStore = useCellsStore();
const { gameStatus } = storeToRefs(cellsStore);
const { initBoard } = cellsStore;

const statusText = computed(() => {
  switch (gameStatus.value) {
    case 'win':
      return 'You win!';
    case 'lose':
      return 'You lose!';
    default:
      return '';
  }
});
</script>
