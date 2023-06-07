import React from "react";
import { useFetch } from "../Hooks/useFetch";

import ProductsList from "../Components/PostList/ProductsList";
import { Link } from "react-router-dom";

const Products = () => {
  const url = "https://dummyjson.com/products";
  const { loading, error, apiData } = useFetch(url, "products");

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  const appleProducts = apiData.filter((item) => item.category.toLowerCase().includes("smartphones") );

  return (
    <div>
      <div className="max-w-[2520px] m-auto xl:px-20 md:px-10 sm:px-5 px-2">
        <main className="grid grid-cols-5 gap-[20px]">
          {appleProducts.map((item) => (
            <Link to={"/"} key={item.id}>
              <ProductsList item={item} />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Products;
