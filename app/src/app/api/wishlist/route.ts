// pages/api/wishlist.ts
import { NextRequest, NextResponse } from "next/server";
import { Wishlist } from "@/types";
import { createWishlist, fetchWishlistByUser } from "@/db/models/wishlist";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { deleteWishlist } from "@/db/models/wishlist";

export const POST = async (request: NextRequest) => {
  const { productId } = await request.json();
  const userIdCookie = cookies().get("userId");

  const userId = new ObjectId(userIdCookie?.value);
  const createdAt = new Date();
  const updatedAt = new Date();

  const wishlistItem: Wishlist = {
    _id: new ObjectId(),
    productId: new ObjectId(productId),
    userId,
    createdAt,
    updatedAt,
  };

  const result = await createWishlist(wishlistItem);

  console.log(`Wishlist item created: ${result.insertedId}`);

  return NextResponse.json("Wishlist item added successfully");
};

export async function GET(request: NextRequest) {
  const userIdCookie = cookies().get("userId");
  const userId = new ObjectId(userIdCookie?.value);

  const data = await fetchWishlistByUser(userId);

  return NextResponse.json(data, {
    status: 200,
  });
}

export async function DELETE(request: NextRequest) {
  // console.log(await request.json(), "ini dari api loh");
  const { _id } = await request.json();

  const objectId = new ObjectId(_id); // Convert string to ObjectId
  const result = await deleteWishlist(objectId);
  // console.log(result);

  return NextResponse.json(result, {
    status: 200,
  });
}
