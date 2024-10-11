// src/context/CartContext.js
import { createContext, useState, useEffect } from 'react';

// Create the cart context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage when cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (product, size) => {
    if (!size) return;

    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size,
    };

    // Check if the item with the same product ID and size already exists
    const existingItem = cart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItem) {
      // If the item exists, just add it separately
      setCart((prevCart) => [...prevCart, newCartItem]);
    } else {
      // Otherwise, add the new item
      setCart((prevCart) => [...prevCart, newCartItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
