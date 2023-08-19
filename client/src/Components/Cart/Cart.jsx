import React from "react";
import { useCart } from "../../Hooks/useCart";
import useMenu from "../../Hooks/useMenu";
import MenuItem from "../Navbar/MenuItem";

const Cart = () => {
  const cartBar = useMenu();
  const { totalItems } = useCart(); // Use totalItems from the context

  return (
    <div onClick={cartBar.onOpen} className="hover:bg-neutral-100 rounded-full transition border-neutral-200 cursor-pointer">
      <div className="flex flex-row items-center gap-1">
        <div className="hidden md:block text-sm font-semibold py-3">
          <MenuItem label={`Cart`} />
        </div>
        <div className="text-xs border-[1px] w-6 h-6 border-black rounded-full p-1 flex items-center justify-center">
          {totalItems || 0}
        </div>
      </div>
    </div>
  );
};

export default Cart;
