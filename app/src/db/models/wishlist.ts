import { Wishlist } from "@/types";
import { getDb } from "../config";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "Wishlists";

export const createWishlist = async (wishlist: Wishlist) => {
  const db = await getDb();
  const result = await db.collection(COLLECTION_NAME).insertOne(wishlist);
  return result;
};

export const fetchWishlistByUser = async (userId: ObjectId) => {
  const db = await getDb();
  const wishlistCollection = db.collection(COLLECTION_NAME);
  userId = new ObjectId(userId);

  const agg = [
    { $match: { userId } },
    {
      $lookup: {
        from: "Products",
        localField: "productId",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: {
        path: "$product",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  const wishlistItems = await wishlistCollection.aggregate(agg).toArray();
  return wishlistItems;
};

export const deleteWishlist = async (_id: ObjectId) => {
  const db = await getDb();

  return await db.collection(COLLECTION_NAME).deleteOne({ _id });
};

export const getWishlistByProductId = async (
  productId: ObjectId
): Promise<Wishlist | null> => {
  const db = await getDb();
  const product = await db.collection(COLLECTION_NAME).findOne({ productId });
  return product as Wishlist | null;
};
