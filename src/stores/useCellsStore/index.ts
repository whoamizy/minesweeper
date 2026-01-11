import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICell } from './types';

const MINES = 10;
const ROWS = 10;
const COLS = 10;
const BOARD_SIZE = ROWS * COLS;

export const useCellsStore = defineStore('cells', () => {
  const board = ref<ICell[]>([]);
  const isGameOver = ref(false);

  function initBoard() {
    isGameOver.value = false;
    board.value = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      const cell: ICell = {
        id: i,
        isFlag: false,
        isMine: false,
        isOpen: false,
        minesAround: 0,
        neighborhood: [],
      };
      board.value.push(cell);
    }
    setMines();
    getMinesAround();
  }

  function setMines() {
    let totalMines = 0;
    while (totalMines <= MINES) {
      const randomIndex = Math.floor(Math.random() * BOARD_SIZE);
      const cell = board.value[randomIndex];
      if (!cell) continue;
      cell.isMine = true;
      totalMines++;
    }
  }

  function getMinesAround() {
    for (let i = 0; i < BOARD_SIZE; i++) {
      let minesCount = 0;
      const neighborhood = [];
      const cell = board.value[i];
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          const index = getIndex(i, x, y);
          if (index !== false) {
            const neighbor = board.value[index];
            if (!neighbor) continue;
            neighborhood.push(index);
            if (neighbor.isMine) minesCount++;
          }
        }
      }
      if (!cell) continue;
      cell.minesAround = minesCount;
      cell.neighborhood = neighborhood;
    }
  }

  function getIndex(i: number, x: number, y: number) {
    if (x === 0 && y === 0) return false;
    if ((i % COLS) + x < 0 || (i % COLS) + x >= COLS) return false;
    if (Math.floor(i / COLS) + y < 0 || Math.floor(i / COLS) + y >= ROWS) {
      return false;
    }
    return i + (y * COLS + x);
  }

  function openCell(i: number) {
    const cell = board.value[i];
    if (isGameOver.value || !cell || cell.isOpen) return;
    if (cell.isMine) {
      board.value.forEach((cell) => {
        if (cell.isMine) cell.isOpen = true;
      });
      isGameOver.value = true;
      // TODO: modal with restart button
      return;
    }
    cell.isFlag = false;
    cell.isOpen = true;
    if (checkWin()) return;
    checkNeighbors(i);
  }

  function checkNeighbors(i: number) {
    const cell = board.value[i];
    if (!cell) return;
    if (cell.minesAround !== 0) return;
    cell.neighborhood.forEach((index) => openCell(index));
  }

  function checkWin() {
    const openedCells = board.value.filter((cell) => cell.isOpen).length;
    if (openedCells === BOARD_SIZE - MINES) {
      isGameOver.value = true;
      // TODO: modal with restart button
      return true;
    }
    return false;
  }

  function toggleFlag(i: number) {
    const cell = board.value[i];
    if (!cell || cell.isOpen || isGameOver.value) return;
    cell.isFlag = !cell.isFlag;
  }

  return {
    board,
    initBoard,
    openCell,
    toggleFlag,
  };
});
