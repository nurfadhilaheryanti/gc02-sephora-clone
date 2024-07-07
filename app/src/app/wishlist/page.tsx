"use server";

import React from "react";
import Header from "@/components/Header";
import WishlistList from "@/components/requirement/ListWishlist";
import { fetchUserById, fetchUsers, fetchWishlist } from "../action";

const Wishlist = async () => {
  const data = await fetchWishlist();

  // console.log(data, "ini di log dari page wishlist");

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
        {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
        <WishlistList wishlist={data} />
      </div>
    </>
  );
};

export default Wishlist;
