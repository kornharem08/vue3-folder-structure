<script setup lang="ts">
import Button from "../components/common/Button.vue";
import { useCounterStore } from '../store/counter';
import { storeToRefs } from 'pinia'
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increment, decrement, reset } = counterStore
function handleCustomClick(){
  alert(" hello world ")
}
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <router-link to="/">Go to Home</router-link>
  <Button @click="handleCustomClick" :isDisabled="true"> test </Button>
  <div>
    <p>Counter: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
    </div>
</template>