import React from "react";
import { useCart } from "../../Hooks/useCart";
import RemoveFromCart from "./RemoveFromCart"; // Import the RemoveFromCart component

const AddToCart = ({ item }) => {
  const { addToCart, cart } = useCart();

  const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

  return (
    <div>
      {isItemInCart ? (
        <RemoveFromCart itemId={item.id} />
      ) : (
        <button
          className="border-[1px] px-[30px] py-[5px] rounded-full bg-white"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCart;


