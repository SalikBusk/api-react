import React from "react";
import { useParams } from "react-router";
import Container from "../Components/Container";
import { useFetch } from "../Hooks/useFetch";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductPage = () => {
  const { id } = useParams();

  const url = `https://fakestoreapi.com/products/${id}`;
  const { loading, error, apiData } = useFetch(url);

  if (loading) {
    return (
        <div>

        </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center item-center">
      <Container>
        <section className="w-full h-[80vh] rounded-[10px] p-2 grid grid-cols-2 gap-[20px]">
          <img
            className="max-h-[50vh] w-full object-contain my-4 px-4"
            src={apiData.image}
            alt=""
          />
          <header className="flex flex-col gap-5">
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-4xl font-bold">{apiData.title}</h1>
              <div className="text-black text-sm bg-[#DDCEF2] rounded-full p-2" style={{ width: "fit-content" }}>
                ${apiData.price}
              </div>
              <hr />
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-neutral-500 font-light text-sm">{apiData.description}</p>
                <button className="w-full py-4 bg-[#DDCEF2] rounded-full font-smibold hover:border-[1px] border-neutral-100">
                    Tilføj til kurv 
                </button>
            </div>
          </header>
        </section>
      </Container>
    </div>
  );
};

export default ProductPage;
