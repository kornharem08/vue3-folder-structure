<script setup lang="ts">
import { useShoppingCart } from '../composables/useShoppingCart';
// เรียกใช้งาน Composable useShoppingCart
const { cartItems, addToCart, total } = useShoppingCart();

// ฟังก์ชันสำหรับเพิ่มสินค้าในตะกร้า
function addItemToCart() {
    const newItem = {
        id: Math.random().toString(),
        name: 'New Item'+Math.random().toString(),
        price: Math.random() // สร้างราคาสุ่ม
    };
    addToCart(newItem);
}

</script>


<template>
    <div>
        <router-link to="/">Go to Home</router-link>
        <h2>Shopping Cart</h2>
        <ul>
            <li v-for="item in cartItems" :key="item.id">
                {{ item.name }} - ${{ item.price }}
            </li>
        </ul>
        <p>Total: ${{ total }}</p>
        <button @click="addItemToCart">Add Item to Cart</button>
    </div>
</template>
