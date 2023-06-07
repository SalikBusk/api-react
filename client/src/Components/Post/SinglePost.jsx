import React from 'react'

const SinglePost = ({item}) => {
    const {thumbnail} = item;

  return (
    <div className="max-w-[2520px] m-auto xl:px-20 md:px-10 sm:px-5 px-2 mt-[20px]">
        <img className='w-full h-[50vh] object-cover' src={thumbnail} alt="" />
    </div>
  )
}

export default SinglePost