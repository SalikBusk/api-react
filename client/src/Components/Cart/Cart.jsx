import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import useMenu from "../../Hooks/useMenu";

const Cart = () => {
  const cartBar = useMenu()
  return (
    <div onClick={cartBar.onOpen} className="hover:bg-neutral-100 rounded-full transition border-neutral-200 cursor-pointer">
      <div className="flex flex-row items-center gap-1">
        <div className="hidden md:block text-sm font-semibold py-3 px-3">
          <AiOutlineShoppingCart size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
