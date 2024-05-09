import { ref, computed } from 'vue';

 interface Item {
    id: string;
    name: string;
    price: number
  }
  

// Composable สำหรับการจัดการรายการสินค้า
export function useShoppingCart() {
  // สร้าง ref สำหรับเก็บรายการสินค้า
  const cartItems = ref<Item[]>([]);

  // เพิ่มสินค้าในตะกร้า
  function addToCart(item:Item) {
    cartItems.value.push(item);
  }

  // คำนวณราคารวมของสินค้าทั้งหมดในตะกร้า
  const total = computed(() => {
    return cartItems.value.reduce((acc, item:Item) => acc + item.price, 0);
  });

  // คืนค่าฟังก์ชันที่ใช้งานได้แก่คุณ
  return {
    cartItems,
    addToCart,
    total,
  };
}
