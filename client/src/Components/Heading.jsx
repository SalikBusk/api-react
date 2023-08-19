import React from "react";

const Heading = ({ title, number }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
        <div className="text-[10px] border-[1px] w-4 h-4 border-black rounded-full p-1 flex flex-col items-center justify-center">
          {number}
        </div>
        <p className="text-[12px] font-bold text-black">{title}</p>
      </div>
  );
};

export default Heading