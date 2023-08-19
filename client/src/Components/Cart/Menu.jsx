import React from "react";
import useMenu from "../../Hooks/useMenu";
import MenuLayout from "./MenuLayout";
import { useCart } from "../../Hooks/useCart";
import ItemCard from "./ItemCard";
import Cart from "./Cart";


const Menu = () => {
  const menu = useMenu();
  const { cart } = useCart();

  const BodyContent = (
    <div>
      <ul className="flex flex-col gap-4">
        {cart.map((item) => (
          <li key={item.id}>
            <ItemCard item={item}/>
          </li>
        ))}
      </ul>
    </div>
  );

  const title = (
    <div className="">
      <Cart/>
    </div>
  )
  return (
    <div>
      <MenuLayout
        isOpen={menu.isOpen}
        onClose={menu.onClose}
        onSubmit={() => {}}
        title={title}
        body={BodyContent}
        actionLabel="Submit"
      />
    </div>
  );
};

export default Menu;
