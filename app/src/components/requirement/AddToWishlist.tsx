// components/AddToWishlist.tsx
"use client";

import React from "react";
import { ObjectId } from "mongodb";
import { handleAddToWishlist } from "@/app/action";

interface AddToWishlistProps {
  productId: ObjectId;
}

const AddToWishlist = (props: AddToWishlistProps) => {
  const { productId } = props;

  const onClickHandler = async () => {
    await handleAddToWishlist(productId);
  };

  return (
    <button
      className="bg-red-600 text-white py-2 px-4 rounded-full my-10"
      onClick={onClickHandler}
    >
      Add to Wishlist
    </button>
  );
};

export default AddToWishlist;
