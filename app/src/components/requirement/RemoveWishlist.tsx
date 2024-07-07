"use client";
import React from "react";
import { removeWishlist } from "@/app/action";

interface RemoveFromWishlistButtonProps {
  id: string;
}

const RemoveFromWishlistButton = ({ id }: RemoveFromWishlistButtonProps) => {
  const handleRemove = async () => {
    await removeWishlist(id);
  };

  return (
    <button
      className="bg-red-600 text-white py-2 px-4 rounded-full"
      onClick={handleRemove}
    >
      Remove
    </button>
  );
};

export default RemoveFromWishlistButton;
