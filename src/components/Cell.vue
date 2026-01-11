<template>
  <button
    class="flex size-8 items-center justify-center border border-gray-400 transition"
    :class="{
      'bg-amber-200': cell.isFlag,
      'bg-red-500': cell.isOpen && cell.isMine,
      'bg-gray-50': cell.isOpen && !cell.isMine,
      'cursor-pointer bg-gray-200 hover:bg-gray-500': !cell.isOpen,
    }"
    @click.prevent="emit('openCell', cell.id)"
    @click.prevent.right="emit('toggleFlag', cell.id)"
    @contextmenu.prevent
  >
    <span v-if="cell.isMine">
      <!-- TODO: mine icon -->
    </span>
    <span v-else-if="cell.isFlag">
      <!-- TODO: flag icon -->
    </span>
    <span v-else-if="cell.isOpen">
      {{ cell.minesAround !== 0 ? cell.minesAround : '' }}
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ICell } from '@/stores/useCellsStore/types';

interface IProps {
  cell: ICell;
}

interface IEmits {
  (e: 'openCell', id: number): void;
  (e: 'toggleFlag', id: number): void;
}

defineProps<IProps>();
const emit = defineEmits<IEmits>();
</script>
