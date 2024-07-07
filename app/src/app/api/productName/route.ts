import { getProductByName } from "@/db/models/product";
import { Product } from "@/types";
import { NextRequest, NextResponse } from "next/server";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T | null;
  error?: string;
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name) {
    return NextResponse.json<MyResponse<Product>>({
      statusCode: 400,
      message: "Name query parameter is required",
      data: null,
    });
  }

  const product = await getProductByName(name);
  console.log(name);

  console.log(product);

  if (product === null) {
    return NextResponse.json<MyResponse<Product>>({
      statusCode: 404,
      message: `Product not found with name: ${name}`,
      data: null,
    });
  }

  return NextResponse.json<MyResponse<Product>>({
    statusCode: 200,
    message: `Product found with name: ${name}`,
    data: product,
  });
};
