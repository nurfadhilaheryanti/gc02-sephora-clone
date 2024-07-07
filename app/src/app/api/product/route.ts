import { getProductsWithPagination } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "8", 10);

  const data = await getProductsWithPagination(page, limit);
  return NextResponse.json(data, {
    status: 200,
  });
}
