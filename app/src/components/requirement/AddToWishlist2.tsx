// components/AddToWishlist.tsx
"use client";

import React, { useState } from "react";
import { ObjectId } from "mongodb";
import { handleAddToWishlist } from "@/app/action";
import heartLogo from "@/assets/heart-svgrepo-com.svg";
import heartFilledLogo from "@/assets/heart-svgrepo-com (1).svg";

interface AddToWishlistProps {
  productId: ObjectId;
}

const AddToWishlist2 = (props: AddToWishlistProps) => {
  const { productId } = props;
  const [isWishlisted, setIsWishlisted] = useState(false);

  const onClickHandler = async () => {
    setIsWishlisted(!isWishlisted);
    await handleAddToWishlist(productId);
  };

  return (
    <button
      className="absolute top-2 right-2"
      onClick={onClickHandler}
      aria-label="Add to wishlist"
    >
      <img src={heartLogo.src} alt="Wishlist" className="h-6 w-6" />
    </button>
  );
};

export default AddToWishlist2;
