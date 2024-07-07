import { getProducts } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = await getProducts();
  return NextResponse.json(data, {
    status: 200,
  });
}
