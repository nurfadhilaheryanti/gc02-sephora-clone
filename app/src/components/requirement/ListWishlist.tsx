"use client";
import { useState } from "react";
import RemoveFromWishlistButton from "./RemoveWishlist";
import { removeWishlist } from "@/app/action";
import { ObjectId } from "mongodb";

interface WishlistItem {
  _id: string;
  userId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
    thumbnail: string;
  };
}

const WishlistList = ({ wishlist }: { wishlist: WishlistItem[] }) => {
  const [items, setItems] = useState<WishlistItem[]>(wishlist);

  if (items.length === 0) {
    return (
      <div className="text-center mt-4">
        <p className="text-gray-600">No items in your wishlist yet.</p>
        {/* You can add a button or link to redirect users to add items to wishlist */}
        <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Add Items to Wishlist
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Brand</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id} className="text-center border-b">
              <td className="px-4 py-2">
                <img
                  src={item.product.thumbnail}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="px-4 py-2">{item.product.brand}</td>
              <td className="px-4 py-2">{item.product.name}</td>
              <td className="px-4 py-2">${item.product.price}</td>
              <td className="px-4 py-2">
                <RemoveFromWishlistButton id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistList;
