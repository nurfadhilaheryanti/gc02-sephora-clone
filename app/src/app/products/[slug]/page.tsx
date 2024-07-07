"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import starLogo from "@/assets/star.svg";
import { fetchProductBySlug } from "@/app/action";
import AddToWishlist from "@/components/requirement/AddToWishlist";
import { ShowErrorComponent } from "@/components/ShowError";
import NextIcon from "@/assets/more-svgrepo-com.svg";
import BackIcon from "@/assets/back-svgrepo-com.svg";

const DetailProduct = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductBySlug(params.slug);
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.thumbnail);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.slug]);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % product.images.length;
    setSelectedImage(product.images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const handleBackImage = () => {
    const backIndex =
      (currentImageIndex - 1 + product.images.length) % product.images.length;
    setSelectedImage(product.images[backIndex]);
    setCurrentImageIndex(backIndex);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <ShowErrorComponent />
      <Header />
      <div className="w-full h-screen overflow-y-auto">
        <div
          className="mx-24 mt-10 mb-4 h-20 flex justify-center items-center flex-col"
          style={{ backgroundColor: "#F1CFAC" }}
        >
          <p className="font-bold">Find match at Home</p>
          <p>
            Get a sample of bestselling foundation.{" "}
            <span className="text-red-600 font-bold"> SHOP NOW </span>
          </p>
        </div>
        <div className="flex flex-row mx-24">
          <div className="flex-1 flex flex-row">
            <div className="flex justify-center items-center flex-col gap-2">
              <img
                src={product.thumbnail}
                width={60}
                height={60}
                className="rounded-full cursor-pointer"
                alt={product.name}
                onClick={() => handleImageClick(product.thumbnail, -1)}
              />
              {product.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  width={60}
                  height={60}
                  className="rounded-full cursor-pointer"
                  alt={`${product.name} ${index}`}
                  onClick={() => handleImageClick(image, index)}
                />
              ))}
            </div>

            <div className="flex justify-center items-center ml-12 relative">
              <button
                className="absolute left-0 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
                onClick={handleBackImage}
              >
                <img src={BackIcon.src} alt="Back" className="h-6 w-6" />
              </button>
              <img
                src={selectedImage}
                width={450}
                height={400}
                className="rounded-md"
                alt={product.name}
              />
              <button
                className="absolute right-0 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition "
                onClick={handleNextImage}
              >
                <img src={NextIcon.src} alt="Next" className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-bold">{product.name}</p>
            <p>{product.excerpt}</p>
            <p>{product.description}</p>
            <div className="bg-gray-100 h-16 rounded-lg">
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={starLogo.src}
                    className="h-4 w-4"
                    alt="Star"
                  />
                ))}
                <p>Ask a question</p>
              </div>
              <p>
                Highly rated by customers for: color, coverage, satisfaction
              </p>
            </div>
            <p className="font-bold">${product.price}</p>
            <div className="flex flex-row justify-between">
              <div className="bg-white border border-gray-400 rounded-sm w-36 h-24 pl-2">
                <p className="font-bold" style={{ fontSize: 13 }}>
                  Sign in for FREE shipping
                </p>
                <p style={{ fontSize: 12 }}>Delivery by Tue, Jul 9 to 15345</p>
              </div>
              <div className="bg-white border border-gray-400 rounded-sm w-36 h-24 pl-2">
                <p className="font-bold" style={{ fontSize: 13 }}>
                  Auto-Replenish
                </p>
                <p style={{ fontSize: 12 }}>Save 5% on this item</p>
              </div>
              <div className="bg-white border border-gray-400 rounded-sm w-36 h-24 pl-2">
                <p className="font-bold" style={{ fontSize: 13 }}>
                  Same-Day Delivery
                </p>
              </div>
              <div className="bg-white border border-gray-400 rounded-sm w-36 h-24 pl-2">
                <p className="font-bold" style={{ fontSize: 13 }}>
                  Buy Online & Pick Up
                </p>
              </div>
            </div>
            <AddToWishlist productId={product._id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
