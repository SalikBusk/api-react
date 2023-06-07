import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";

const Products = ({ item }) => {
  const { id, title, price, discountPercentage, thumbnail, rating, category } = item;

  // description skal kun have 10 ord
  // const truncateDescription = (text) => {
  //   const words = text.split(" ");
  //   if (words.length > 10) {
  //     return words.slice(0, 5).join(" ") + "...";
  //   }
  //   return text;
  // };

  const discountedPrice = price - (price * discountPercentage) / 100;
  const roundedDiscountedPrice = Math.round(discountedPrice * 100) / 100;

  const spar = price - discountedPrice;
  const roundedDiscountedSpar = Math.round(spar * 100) / 100;



  return (
    <figure className="p-2 w-full aspect-auto">
      <Link to={`product/${id}`}>
        <header>
          <h2 className="text-[12px] text-gray-500">{category}</h2>
        </header>
        <img
          className="h-[250px] w-full object-cover"
          src={thumbnail}
          alt={title}
        />
        <figcaption className="p-2 flex flex-col gap-[10px]">
          <header>
            <h2 className="text-[18px] fron-bold">{title}</h2>
            <StarRating rating={rating} />
          </header>
          <hgroup className="flex flex-row justify-between">
            <p className="text-[24px] font-bold flex flex-row gap-2 text-black">{roundedDiscountedPrice} $</p>

            <div className="flex flex-col item-center gap-[0px]">
              <p className="text-[12px] font-normal">Spar {roundedDiscountedSpar} $</p>
              <p className="text-[12px] font-normal"> før {price}$</p>
            </div>
          </hgroup>
        </figcaption>
      </Link>
    </figure>
  );
};

export default Products;
