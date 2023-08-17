import React from "react";

import {Link} from 'react-router-dom';

const Card = ({ item }) => {
  const { image, title, description, price, id } = item;

  return (
    <Link to={`product/${id}`} className="relative w-full h-[38vh] rounded-[10px] hover:border-[1px] border-[#F4E6E0]">
      <img
        className="max-h-56 w-full object-contain my-4 px-4"
        src={image}
        alt={description}
      />
      <figcaption className="absolute bottom-2 left-2 py-1 px-2 rounded-full border-[1px] border-neutral-100 flex flex-row items-center gap-5 bg-[#F4E6E0]">
        <div className="text-black text-sm">
          {title.length > 10 ? title.slice(0, 10) + "..." : title}
        </div>
        <div className="text-black text-sm bg-[#DDCEF2] rounded-full p-2">
          {price} $
        </div>
      </figcaption>
    </Link>
  );
};

export default Card;
