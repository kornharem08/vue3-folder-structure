<script setup>
import { ref } from 'vue'
const emit = defineEmits(['click'])
const props = defineProps(['isDisabled'])

const handleClick = () => {
  if (!props.isDisabled) {
    emit('click');
  }
};
</script>

<template>
  <button 
    :class="[
      'px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600',
      { 'opacity-50 cursor-not-allowed': props.isDisabled }
    ]"
    :disabled="props.isDisabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
/* Scoped styles for the component */
</style>
