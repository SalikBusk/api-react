import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      <ul className="flex flex-row items-center gap-5">
        <MenuItem
          label="Shop"
          onClick={() => navigate("/shop")}
          isActive={location.pathname === "/shop"}
        />
        <MenuItem
          label="Men"
          onClick={() => navigate("/men")}
          isActive={location.pathname === "/men"}
        />
        <MenuItem
          label="Women"
          onClick={() => navigate("/women")}
          isActive={location.pathname === "/women"}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
