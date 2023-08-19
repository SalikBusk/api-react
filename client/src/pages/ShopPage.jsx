import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/PostList/Card";
import CardSkeleton from "../Components/PostList/CardSkeleton";
import { useFetch } from "../Hooks/useFetch";

const ShopPage = () => {
  const url = "https://fakestoreapi.com/products";
  const { loading, error, apiData } = useFetch(url);

  if (error) {
    return <div>{error}</div>;
  }

  const HeadingTitle = ({ title, number }) => {
    return (
      <div className="flex flex-row gap-2 items-center">
        <div className="text-[10px] border-[1px] w-4 h-4 border-black rounded-full p-1 flex flex-col items-center justify-center">
          {number}
        </div>
        <p className="text-[12px] font-bold text-black">{title}</p>
      </div>
    );
  };

  const SmallCard = ({ item }) => {
    const { image, description, title, price } = item;
    return (
      <Link
        to={`product/${item.id}`}
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
            {item.title.length > 25
              ? title.slice(0, 25) + "..."
              : title}
          </h3>
          <p className="text-[12px] font-[400] text-black">${price}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="py-[80px] w-full h-[100vh] overflow-hidden bg-[#f7f7f7]">
      <section className="max-w-[2520px] xl:px-5 md:px-10 sm:px-2 px-4">
        <section className="grid grid-cols-[1fr,2fr,3fr] gap-5">
          {/* sidebar */}
          <div className="bg-white rounded-lg p-2">
            <HeadingTitle number={`1`} title={`SIDEBAR`} />
          </div>

          {/* middle */}
          <div className="bg-white rounded-lg p-2 flex flex-col gap-5 h-[100vh] overflow-hidden overflow-y-scroll">
            <HeadingTitle number={`2`} title={`FEATURED`} />
            {loading ? (
              <div>
                <CardSkeleton cards={1} height={`75vh`} />
              </div>
            ) : (
              <div>
                {apiData.map((item) => (
                  <div key={item.id} className="">
                    <Card item={item} big />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* All pruduct */}
          <div className="h-screen overflow-hidden overflow-y-scroll bg-white rounded-lg p-2">
            <HeadingTitle number={`3`} title={`SHOP ALL`} />
            <div>
              {loading ? (
                <div>
                  <CardSkeleton cards={6} grid={3} gap={5} height={`40vh`} />
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-5 py-[20px]">
                  {apiData.map((item) => (
                    <SmallCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ShopPage;
