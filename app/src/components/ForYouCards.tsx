"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Product } from "../types/index";

const ForYouCards = ({ products }: { products: Product[] }) => {
  const data = products.slice(0, 6);

  return (
    <div className="h-80 flex justify-center items-center ml-1 overflow-visible">
      <div className="carousel carousel-end overflow-visible">
        <div className="carousel-item gap-4 flex overflow-visible">
          {data.map((product) => (
            <div
              key={product.slug}
              className="relative bg-white h-72 w-48 rounded-md shadow-lg flex flex-col overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <div className="h-48 flex justify-center items-center relative">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="object-contain h-full w-full rounded-t-md"
                />
                <div className="absolute bottom-0 w-full text-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <Link href={`/products/${product.slug}`}>
                    <span className="inline-block w-full bg-gray-800 bg-opacity-75 text-white py-1 rounded text-sm">
                      See detail
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex-1 p-2">
                <p className="text-xs font-bold truncate">{product.name}</p>
                <p className="text-xs truncate">{product.excerpt}</p>
              </div>
              <div className="w-32 h-8 flex items-center mb-4 ml-4">
                <p style={{ fontSize: 14 }} className="font-bold">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForYouCards;
