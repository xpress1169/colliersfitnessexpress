'use client';

import { useLocalStorage } from './useLocalStorage';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export function useCart() {
  const [cart, setCart] = useLocalStorage<CartItem[]>('fitness-cart', []);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    // Requirement: Display dialog/alert message: "Item added."
    alert('Item added.');
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
  };
}
