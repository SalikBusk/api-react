// ItemCard.js
import React from 'react';
import RemoveFromCart from './RemoveFromCart';

const ItemCard = ({ item }) => {
  const { image, title, price, description } = item;

  return (
    <figure className="w-full h-[20vh] rounded-[10px] border border-black grid grid-cols-[1fr,4fr] place-items-center gap-4 p-3">
      <img className="max-h-[20vh] w-full" src={image} alt={description} />
      <figcaption className="flex flex-col gap-3 w-full">
        <div className="flex flex-row justify-between">
          <p>{title.length > 20 ? title.slice(0, 20) + "..." : title}</p>
          <p>{price}</p>
        </div>
        <div className='flex flex-row justify-end'>
          <RemoveFromCart itemId={item.id} /> 
        </div>
      </figcaption>
    </figure>
  );
};

export default ItemCard;
