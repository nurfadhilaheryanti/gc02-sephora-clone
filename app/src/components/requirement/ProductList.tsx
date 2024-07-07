"use client";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import starLogo from "@/assets/star.svg";
import { Product } from "@/types";
import Link from "next/link";
import AddToWishlist2 from "./AddToWishlist2";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/product?page=${page}&limit=4`);
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data]);
    };
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts();
  };

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="h-4/5 flex flex-wrap gap-4">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            legacyBehavior
          >
            <a
              className="bg-white flex flex-col my-4"
              style={{ height: "63%", width: "21.8%" }}
            >
              <div className="flex-none" style={{ height: "60%" }}>
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {/* <AddToWishlist2 productId={product._id} /> */}
              </div>
              <div
                className="flex-1 p-2 bg-white text-black"
                style={{ height: "40%" }}
              >
                <p
                  className="font-bold text-sm truncate"
                  style={{ maxWidth: "100%" }}
                >
                  {product.name}
                </p>
                <p
                  className="mt-1 text-xs truncate"
                  style={{ maxWidth: "100%" }}
                >
                  {product.excerpt}
                </p>
                <p className="mt-1 font-extralight text-xs">30 Colors</p>
                <div className="flex items-center mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <img key={index} src={starLogo.src} className="h-4 w-4" />
                    ))}
                </div>
                <p className="mt-2 font-bold text-sm">${product.price}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ProductsList;
