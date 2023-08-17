import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const CardSkeleton = ({ cards }) => {
  return (
    <div className='grid grid-cols-4 gap-[10px]'>
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <figure key={index} >
            <Skeleton width={`100%`} height={`38vh`} />
          </figure>
        ))}
    </div>
  );
};

export default CardSkeleton;