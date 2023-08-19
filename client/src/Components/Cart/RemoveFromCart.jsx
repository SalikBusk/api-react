import React from "react";
import { useCart } from "../../Hooks/useCart";

const RemoveFromCart = ({ itemId }) => {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(itemId);
  };

  return (
    <button onClick={handleRemove} className="text-red-500 font-semibold">
      Remove
    </button>
  );
};

export default RemoveFromCart;
