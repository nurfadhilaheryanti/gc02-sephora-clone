import { getProductBySlug } from "@/db/models/product";
import { Product } from "@/types";
import { NextRequest, NextResponse } from "next/server";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T | null;
  error?: string;
};

export const GET = async (
  _request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const slug = params.slug;
  // console.log(slug, "<<<< ini slug");
  const product = await getProductBySlug(slug);

  if (product === null) {
    return NextResponse.json<MyResponse<Product>>({
      statusCode: 404,
      message: `Product not found with slug: ${slug}`,
      data: null,
    });
  }

  return NextResponse.json<MyResponse<Product>>({
    statusCode: 200,
    message: `Pong from GET /api/products/${slug} !`,
    data: product,
  });
};
