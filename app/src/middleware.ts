import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./db/utils/jwt";
import { cookies } from "next/headers";

export const middleware = async (request: NextRequest) => {
  if (request.url.includes("/wishlist")) {
    const cookiesStore = cookies();
    const token = cookiesStore.get("token");

    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const tokenData = await verifyToken<{ id: string; email: string }>(
        token.value
      );

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-user-id", tokenData.id);
      requestHeaders.set("x-user-email", tokenData.email);

      return NextResponse.next({
        headers: requestHeaders,
      });
    } catch (error) {
      console.error("Token verification failed:", error);
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
};
