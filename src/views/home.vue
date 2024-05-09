<script setup lang="ts">
import { ref } from 'vue';
import ProductService from '../services/modules/ProductService';
import { Product } from '../models/product'; // Import the Product interface

const data = ref<Product[]>([]); // Initialize data as an array of Product objects

async function getProductList() {
  try {
    const res = await ProductService.getlist();
    data.value = res; // Assign the API response to the data ref
  } catch (error) {
    console.error('Error fetching product list:', error);
  }
}

getProductList(); // Call the function to fetch the product list
</script>

<template>
  <div>
    <router-link to="/about">Go to about</router-link>
    <!-- Display the product list -->
    <ul>
      <li v-for="product in data" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>
