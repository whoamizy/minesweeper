import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const INIT_SECONDS = 0;

export const useTimerStore = defineStore('timer', () => {
  const totalSeconds = ref(INIT_SECONDS);

  const minutes = computed(() => Math.floor(totalSeconds.value / 60));
  const seconds = computed(() => totalSeconds.value % 60);

  const timer = computed(
    () => `${padTo2Digits(minutes.value)}:${padTo2Digits(seconds.value)}`,
  );

  const timerId = ref<number | undefined>();

  function startTimer() {
    resetTimer();
    timerId.value = setInterval(() => totalSeconds.value++, 1000);
  }

  function stopTimer() {
    if (timerId.value) clearInterval(timerId.value);
  }

  function resetTimer() {
    if (timerId.value) {
      clearInterval(timerId.value);
      totalSeconds.value = INIT_SECONDS;
    }
  }

  return {
    timer,
    startTimer,
    stopTimer,
    resetTimer,
  };
});

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}
