import React from "react";

import {Link} from 'react-router-dom';

export const Card = ({ item, big, small }) => {
  const { image, title, description, price, id } = item;

  //  {title.length > 10 ? title.slice(0, 10) + "..." : title}

  return (
    <Link to={`product/${id}`} 
    className={`
      w-full cursor-pointer group
      ${big ? "h-[85vh]" : "h-[45vh]"}
      ${small ? "h-[40vh]" : "h-[45vh]"}
      ${small ? "border-[1px] border-gray-200" : "border-none"}
      ${small ? "rounded-lg" : "rounded-none"}
      ${small ? "p-2" : "p-0"}
      ${small ? "relative" : ""}
      ${small ? "flex flex-col overflow-hidden" : ""}
    `}>
      <img
        className={`
          w-full object-contain
          ${big ? "max-h-[85vh]" : "max-h-56"}
          ${small ? "max-h-56" : "max-h-56"}
          ${small ? "my-0 px-0" : "my-4 px-4"}
        `}
        src={image}
        alt={description}
      />
      <figcaption className={`flex flex-col gap-3 ${small ? "pt-5 absolute bottom-3" : ""}`}>
        <h3 className="text-[12px] font-[400] text-black">{big ? (
          <>{title.length > 55 ? title.slice(0, 55) + "..." : title}</>
        ) : (
          <>
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
          </>
        )}</h3>
        <p className="text-[12px] font-[400] text-black">$ {price}</p>
      </figcaption>
    </Link>
  );
};

export const SmallCard = ({ item }) => {
    const { image, description, title, price, id } = item;
    return (
      <Link
        to={`product/${id}`}
        className="flex flex-col overflow-hidden h-[45vh] border-[1px] rounded-lg border-gray-200 p-2 relative cursor-pointer group"
      >
        <img
          className="w-full max-h-64 object-contain"
          src={image}
          alt={description}
        />
        <div className="absolute h-full w-full hidden group-hover:flex flex-row items-center justify-center">
          <button className="border-[1px] px-[30px] py-[5px] rounded-full bg-white">
            Shop
          </button>
        </div>
        <div className="flex flex-col pt-5 absolute bottom-3">
          <h3 className="text-[12px] font-[400] text-black mb-1">
            {item.title.length > 25 ? title.slice(0, 25) + "..." : title}
          </h3>
          <p className="text-[12px] font-[400] text-black">${price}</p>
        </div>
      </Link>
    );
  };
