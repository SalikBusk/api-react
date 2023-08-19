import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const MenuItem = ({ label, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`transition duration-50 cursor-pointer hover:font-medium group text-[12px] font-medium ${
        isActive ? "flex flex-row items-center transition  duration-75 ease-in-out" : ""
      } ${
        setIsHovered ? "flex flex-row items-center transition duration-75 ease-in-out" : ""
      }`}
    >
      {isActive || (isHovered && !isActive) ? (
        <AiOutlineArrowRight className="ml-2" />
      ) : null}
      {label}
    </div>
  );
};

export default MenuItem;
