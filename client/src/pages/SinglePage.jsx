import React from 'react'
import { useParams } from 'react-router';
import { useFetch } from '../Hooks/useFetch';

const SinglePage = () => {

    const {id} = useParams();

    const url = `https://dummyjson.com/products/${id}`
    const { loading, error, apiData } = useFetch(url);


    if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-[2520px] m-auto xl:px-20 md:px-10 sm:px-5 px-2 mt-[20px]">
        <img className='w-full h-[50vh] object-cover' src={apiData.thumbnail} alt="" />
    </div>
  )
}

export default SinglePage