import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    // Increase the counter by one
    increment() {
      this.count++;
    },
    // Decrease the counter by one
    decrement() {
      this.count--;
    },
    // Reset the counter to zero
    reset() {
      this.count = 0;
    },
  },
});
