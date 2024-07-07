import { NextRequest, NextResponse } from "next/server";
import { getUserById } from "@/db/models/user";
import { User } from "@/types";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const user: User | null = await getUserById(id);

  if (!user) {
    return NextResponse.json<MyResponse<null>>({
      statusCode: 404,
      error: "User not found",
    });
  }

  const userId = request.headers.get("x-user-id");
  const userEmail = request.headers.get("x-user-email");

  console.log("User ID:", userId);
  console.log("User Email:", userEmail);

  return NextResponse.json<MyResponse<User>>({
    statusCode: 200,
    message: `Pong from GET /api/users/${id} !`,
    data: user,
  });
};
