"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
import { Product, Wishlist } from "@/types";
import { ObjectId } from "mongodb";
import { getWishlistByProductId } from "@/db/models/wishlist";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const handleFetchError = async (response: Response, redirectTo: string) => {
  if (!response.ok) {
    const errorText = await response.text();
    const errorMessage = errorText || `HTTP error! Status: ${response.status}`;
    redirect(`${redirectTo}?error=${encodeURIComponent(errorMessage)}`);
    throw new Error(errorMessage);
  }
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/api/products`);
  handleFetchError(response, "/");
  const responseJson: Product[] = await response.json();
  return responseJson;
};

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/api/products/${slug}`);
  handleFetchError(response, "/");
  const { data } = await response.json();
  return data;
};

export const onRegist = async (formData: FormData): Promise<void> => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  const RegisterSchema = z.object({
    username: z.string().nonempty({ message: "Username is required" }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    name: z.string().nonempty({ message: "Name is required" }),
  });

  const RegisterPayload = RegisterSchema.safeParse({
    username,
    email,
    password,
    name,
  });

  if (!RegisterPayload.success) {
    const message = RegisterPayload.error.issues
      .map((issue) => issue.message)
      .join(", ");
    redirect(`/register?error=${encodeURIComponent(message)}`);
    return;
  }

  const response = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(RegisterPayload.data),
  });
  handleFetchError(response, "/register");
  redirect("/login");
};

export async function Login(formData: FormData): Promise<void> {
  const email = formData.get("email");
  const password = formData.get("password");

  const LoginSchema = z.object({
    email: z
      .string({ message: "Required email" })
      .email({ message: "Invalid email format" }),
    password: z.string({ message: "Required password" }),
  });

  const LoginPayload = LoginSchema.safeParse({ email, password });

  if (!LoginPayload.success) {
    const message = LoginPayload.error.issues[0].message;
    redirect(`/login?error=${encodeURIComponent(message)}`);
    return;
  }

  const response = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(LoginPayload.data),
  });

  await handleFetchError(response, "/login");

  const responseJSON = await response.json();
  cookies().set("token", responseJSON.data.token);
  cookies().set("userId", responseJSON.data.userId);
  redirect("/");
}

export const fetchUsers = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/api/users`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  handleFetchError(response, "/users");
  const data = await response.json();
  return data;
};

export const fetchUserById = async (id: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/api/users/${id}`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  handleFetchError(response, "/users");
  const data = await response.json();
  return data;
};

export const handleAddToWishlist = async (
  productId: ObjectId
): Promise<void> => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");

  if (!token) {
    redirect(
      "/wishlist?error=" + encodeURIComponent("You have to login first.")
    );
    return;
  }

  const existingProduct = await getWishlistByProductId(productId);

  if (existingProduct) {
    redirect(
      "/wishlist?error=" +
        encodeURIComponent("Product is already in the wishlist.")
    );
    return;
  }

  const response = await fetch(`${BASE_URL}/api/wishlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookiesStore.toString(),
    },
    body: JSON.stringify({ productId }),
  });

  if (!response.ok) {
    const error = await response.json();
    redirect(
      "/wishlist?error=" +
        encodeURIComponent("Failed to add to wishlist: " + error.message)
    );
    return;
  }

  redirect("/wishlist");
};

export const fetchWishlist = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/api/wishlist`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  handleFetchError(response, "/wishlist");

  const responseJson = await response.json();
  return responseJson;
};

export const removeWishlist = async (_id: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/api/wishlist`, {
    method: "DELETE",
    headers: {
      Cookie: cookies().toString(),
    },
    body: JSON.stringify({ _id }),
  });

  handleFetchError(response, "/wishlist");

  const responseJson = await response.json();
  redirect("/wishlist");
  return responseJson;
};
