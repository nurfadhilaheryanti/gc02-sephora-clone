import { getUserByEmail } from "@/db/models/user";
import { compare } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateToken } from "@/db/utils/jwt";
import { ObjectId } from "mongodb";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const loginInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();

    const parsedData = loginInputSchema.safeParse(data);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    const findUser = await getUserByEmail(parsedData.data.email);

    if (!findUser) {
      return NextResponse.json<MyResponse<never>>(
        {
          statusCode: 401,
          error: "Invalid email/password",
        },
        {
          status: 401,
        }
      );
    }

    const validPass = await compare(
      parsedData.data.password,
      findUser.password
    );

    if (!validPass) {
      return NextResponse.json<MyResponse<never>>(
        {
          statusCode: 401,
          error: "Invalid email/password",
        },
        {
          status: 401,
        }
      );
    }

    const token = generateToken({
      id: findUser._id,
      email: findUser.email,
    });

    return NextResponse.json<MyResponse<{ userId: ObjectId; token: string }>>(
      {
        statusCode: 200,
        message: "Login successful",
        data: { userId: findUser._id, token },
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err);

      const errPath = err.issues[0].path[0];
      const errMessage = err.issues[0].message;

      return NextResponse.json<MyResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json<MyResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};
