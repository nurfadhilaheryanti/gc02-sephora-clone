"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDebounce } from "use-debounce";
import { Product } from "@/types";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProductsByName = async (name: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/productName?name=${name}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(response, "<<< API Response");
      setSearchResults(data.data ? [data.data] : []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchProductsByName(debouncedSearchTerm);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="relative max-w-md mx-auto mt-8">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search Products
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{ height: "2rem", borderRadius: 17 }}
            placeholder="Search"
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      {loading && <div className="absolute mt-2 text-gray-500">Loading...</div>}
      {searchResults.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg">
          {searchResults.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              legacyBehavior
            >
              <a className="block px-4 py-2 hover:bg-gray-100">
                <div className="flex items-center">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-10 h-10 object-contain mr-2"
                  />
                  <div>
                    <p className="font-bold" style={{ fontSize: 13 }}>
                      {product.name}
                    </p>
                    <p className="mt-1" style={{ fontSize: 14 }}>
                      {product.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
