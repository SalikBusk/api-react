import React from "react";

import Hero from "../Components/Hero";
import Container from "../Components/Container";
import { Head } from "../Components/Heading";
import Card from "../Components/PostList/Card";

import background from "../Assets/bg_hero.svg";
import woman from "../Assets/woman_hero.png";

import { useFetch } from "../Hooks/useFetch";
import CardSkeleton from "../Components/PostList/CardSkeleton";

const HomePage = () => {
  const url = "https://fakestoreapi.com/products";
  const { loading, error, apiData } = useFetch(url);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Container>
        <header className="">
          <Hero
            background={background}
            image={woman}
            title="End of Season"
            subtitle="20% - 50% "
          />
        </header>

        <section className="py-[50px]">
          <Head title="Popular right now" subtitle="End of season" />
          <main className="mt-4">
            {loading ? (
              <div>
                <CardSkeleton cards={4} />
              </div>
            ) : (
              <section className="grid grid-cols-4 gap-[10px]">
                {apiData
                  .filter(
                    (item) => item.category.toLowerCase() === "men's clothing"
                  )
                  .map((item) => (
                    <Card key={item.id} item={item} />
                  ))}
              </section>
            )}
          </main>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;
