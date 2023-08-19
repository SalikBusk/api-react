import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // Added totalItems state

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalItems(prevTotal => prevTotal + 1); // Increment totalItems
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
    setTotalItems(prevTotal => prevTotal - 1); // Decrement totalItems
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}> {/* Added totalItems to context */}
      {children}
    </CartContext.Provider>
  );
};
