import { Product } from "@/types";
import React from "react";

const shuffleArray = (array: Product[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const TrendingCards = ({ products }: { products: Product[] }) => {
  const shuffledProducts = shuffleArray([...products]);
  const limit = shuffledProducts.slice(0, 6);

  return (
    <>
      <div className="h-80 flex justify-center items-center ml-1 overflow-visible mb-10">
        <div className="carousel carousel-end overflow-visible">
          <div className="carousel-item gap-4 flex overflow-visible">
            {limit.map((product) => (
              <div
                key={product.slug}
                className="bg-white h-72 w-48 rounded-md shadow-lg flex-col flex"
              >
                <div className="h-44 flex justify-center items-center">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="object-contain h-full w-full rounded-t-md"
                  />
                </div>
                <div className="flex-1 p-2">
                  <p className="text-xs font-bold truncate">{product.name}</p>
                  <p className="text-xs truncate">{product.excerpt}</p>
                </div>
                <div className="border-2 border-black rounded-full w-32 h-8 flex items-center justify-center mb-4 ml-4">
                  <p style={{ fontSize: 12 }} className="font-bold">
                    Sign In to Access
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCards;
