import React from "react";
import { useFetch } from "../Hooks/useFetch";

import ProductsList from "../Components/PostList/ProductsList";

const Products = () => {
  const url = "https://dummyjson.com/products"; // sætter api'en ind på "url" 
  const { loading, error, apiData } = useFetch(url, "products"); // henter useFetch Hooket fra ../Hooks/useFetch


  if (loading) {
    return <div>loading...</div>;//indlæses
  }

  if (error) {
    return <div>{error}</div>; // error besked ("404")
  }

  //henter kun kategorier med "smartphones" og "laptops" fra api'en 
  const appleProducts = apiData.filter
    ((item) => 
      item.category.toLowerCase().includes("smartphones") || 
      item.category.toLowerCase().includes("laptops")
  );

  return (
    <div>
      <div className="max-w-[2520px] m-auto xl:px-20 md:px-10 sm:px-5 px-2 mt-[20px]">
        <main className="grid grid-cols-4 gap-[10px]">
          {appleProducts.map((item) => (
            <div key={item.id}>
              <ProductsList item={item} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Products;
