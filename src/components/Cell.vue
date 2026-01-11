<template>
  <button
    class="flex size-8 items-center justify-center border border-gray-400 transition"
    :class="classes"
    @click.prevent="emit('openCell', cell.id)"
    @click.prevent.right="emit('toggleFlag', cell.id)"
    @contextmenu.prevent
  >
    <span v-if="cell.isOpen && cell.isMine">
      <img src="/icons/bomb.svg" alt="Bomb" />
    </span>
    <span v-else-if="cell.isFlag">
      <img src="/icons/flag.svg" alt="Flag" />
    </span>
    <span v-else-if="cell.isOpen">
      {{ cell.minesAround !== 0 ? cell.minesAround : '' }}
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ICell } from '@/stores/useCellsStore/types';
import { computed } from 'vue';

interface IProps {
  cell: ICell;
}

interface IEmits {
  (e: 'openCell', id: number): void;
  (e: 'toggleFlag', id: number): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

const classes = computed(() => {
  if (props.cell.isOpen && !props.cell.isMine) return 'bg-gray-50';
  if (props.cell.isOpen && props.cell.isMine) return 'bg-red-500';
  if (props.cell.isFlag) return 'cursor-pointer bg-amber-200';
  return 'cursor-pointer bg-gray-200 hover:bg-gray-500';
});
</script>
