import { getUsers } from "@/db/models/user";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log("masukkkkkkkkkkk yuyuyuyu");
  const userId = request.headers.get("x-user-id");
  const userEmail = request.headers.get("x-user-email");
  // console.log(request.headers);

  // console.log("User ID:", userId);
  // console.log("User Email:", userEmail);
  const users = await getUsers();

  return Response.json(
    {
      statusCode: 200,
      message: "Pong from GET /api/users !",
      data: users,
    },
    {
      status: 200,
    }
  );
};
