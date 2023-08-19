import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const CardSkeleton = ({ cards, grid, gap, height }) => {
  return (
    <div className={`grid grid-cols-${grid} gap-${gap}`}>
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <figure key={index} >
            <Skeleton width={`100%`} height={height} />
          </figure>
        ))}
    </div>
  );
};

export default CardSkeleton;