import React from "react";

const MenuItem = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 transitionfont-semibold cursor-pointer">
        {label}
    </div>
  );
};

export default MenuItem;
