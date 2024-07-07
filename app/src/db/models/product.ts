import { Product } from "@/types";
import { getDb } from "../config";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "Products";

export const getProducts = async () => {
  const db = await getDb();

  const products = (await db
    .collection(COLLECTION_NAME)
    .find()
    .toArray()) as Product[];

  return products;
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  const db = await getDb();
  const product = await db.collection(COLLECTION_NAME).findOne({ slug });
  return product as Product | null;
};

export const getProductsWithPagination = async (
  page: number,
  limit: number
) => {
  const db = await getDb();

  const products = await db
    .collection(COLLECTION_NAME)
    .find()
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();

  return products;
};

export const getProductByName = async (
  name: string
): Promise<Product | null> => {
  const db = await getDb();
  const product = await db.collection(COLLECTION_NAME).findOne({ name });
  return product as Product | null;
};
