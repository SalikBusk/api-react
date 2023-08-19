import React, { useState } from "react";
import Heading from "../Components/Heading";
import { Card, SmallCard } from "../Components/PostList/Card";
import CardSkeleton from "../Components/PostList/CardSkeleton";
import SideBar from "../Components/SideBar";
import { useFetch } from "../Hooks/useFetch";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const url = "https://fakestoreapi.com/products";
  const { loading, error, apiData } = useFetch(url);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-[80px] w-full h-[100vh] overflow-hidden bg-[#f7f7f7]">
      <section className="max-w-[2520px] xl:px-5 md:px-10 sm:px-2 px-4">
        <main className={`grid gap-5 ${selectedCategory ? "grid-cols-[1fr,5fr]" : "grid-cols-[1fr,2fr,3fr]"}`}>
          {/* sidebar */}
          <SideBar setSelectedCategory={setSelectedCategory} />

          <section
            className={`bg-white rounded-lg p-2 flex flex-col gap-5 h-[100vh] overflow-hidden overflow-y-scroll ${
              selectedCategory ? "hidden" : "block"
            }`}
          >
            <Heading number={`2`} title={`FEATURED`} />
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
          </section>

          <section className="h-screen overflow-hidden overflow-y-scroll bg-white rounded-lg p-2">
            <Heading number={`3`} title={`SHOP ALL`} />
            <div className="py-[20px]">
              {loading ? (
                <div>
                  <CardSkeleton cards={6} grid={3} gap={5} height={`40vh`} />
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-5 py-[20px]">
                  {apiData
                    .filter(
                      (item) =>
                        selectedCategory === null ||
                        (selectedCategory === "ACCESSORIES" &&
                          (item.category.toLowerCase() === "jewelery" ||
                            item.category.toLowerCase() === "electronics")) ||
                        item.category
                          .toLowerCase()
                          .includes(selectedCategory.toLowerCase())
                    )
                    .map((item) => (
                      <SmallCard key={item.id} item={item} />
                    ))}
                </div>
              )}
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default ShopPage;
