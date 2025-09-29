import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useCartStorage() {
  const [cart, setCart] = useState([]);

  async function loadCart() {
    const data = await AsyncStorage.getItem("@cart");
    if (data) setCart(JSON.parse(data));
  }

  async function saveCart(newCart) {
    setCart(newCart);
    await AsyncStorage.setItem("@cart", JSON.stringify(newCart));
  }

  async function addToCart(product) {
    const newCart = [...cart];
    const index = newCart.findIndex((p) => p.id === product.id);
    if (index > -1) {
      newCart[index].quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    await saveCart(newCart);
  }

  async function removeFromCart(productId) {
    const newCart = [...cart];
    const index = newCart.findIndex((p) => p.id !== productId);
    if (index > -1 && newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }

    await saveCart(newCart);
  }

  async function clearCart() {
    await saveCart([]);
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { cart, addToCart, removeFromCart, clearCart, total, loadCart };
}
