import React from "react";
import { Link } from "react-router-dom";

const Products = ({ item }) => {
  const { title, price, description, thumbnail } = item;

  // description skal kun have 10 ord
  const truncateDescription = (text) => {
    const words = text.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }
    return text;
  };

  return (
    <Link to={"/"} className=" rounded-[10px] overflow-hidden">
      <img className="h-[200px] object-cover" src={thumbnail} alt={title} />
      <figcaption className="p-2">
        <header className="flex flex-row justify-between">
          <h2 className="text-[16px] fron-bold">{title}</h2>
          <p className="flex flex-row gap-1">
            {price} <span>$</span>
          </p>
        </header>
        <p className="text-[12px]">{truncateDescription(description)}</p>
      </figcaption>
    </Link>
  );
};

export default Products;
