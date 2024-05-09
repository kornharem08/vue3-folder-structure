import { useShoppingCart } from './../../composables/useShoppingCart';

describe('useShoppingCart', () => {
  it('should add items to cart', () => {
    // เรียกใช้ Composable
    const { cartItems, addToCart } = useShoppingCart();

    // เรียกใช้งาน addToCart เพื่อเพิ่มสินค้า
    const item = {
      id: "1",
      name: 'Test Item',
      price: 10
    };
    addToCart(item);

    // ตรวจสอบว่ารายการในตะกร้ามีอยู่จริง
    expect(cartItems.value).toContainEqual(item);
  });

  it('should calculate total correctly', () => {
    // เรียกใช้ Composable
    const { addToCart, total } = useShoppingCart();

    // เพิ่มสินค้าเข้าในตะกร้า
    addToCart({ id: "1", name: 'Item 1', price: 10 });
    addToCart({ id: "2", name: 'Item 2', price: 20 });

    // ตรวจสอบว่าคำนวณราคารวมถูกต้อง
    expect(total.value).toBe(30);
  });
});
