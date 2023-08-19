import React from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const Navigation = () => {
  const location = useLocation();

  const handleShop = () => {
    window.location.href = "/shop";
  };

  const handlemen = () => {
    window.location.href = "/men";
  };

  const handlewomen = () => {
    window.location.href = "/women";
  };

  return (
    <nav>
      <ul className="flex flex-row items-center gap-1">
        <MenuItem label="Shop" onClick={handleShop} isActive={location.pathname === '/shop'} />
        <MenuItem label="Men" onClick={handlemen} isActive={location.pathname === '/men'} />
        <MenuItem label="Women" onClick={handlewomen} isActive={location.pathname === '/women'} />
      </ul>
    </nav>
  );
};

export default Navigation;
