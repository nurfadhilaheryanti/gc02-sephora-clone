"use client";
import Link from "next/link";
import { Login } from "../action";
import { ShowErrorComponent } from "@/components/ShowError";

export default function LoginPage() {
  return (
    <>
      <ShowErrorComponent />
      <div className="flex items-center justify-center bg-gray-100 h-screen">
        <div className="bg-white p-8 rounded-md shadow-lg relative w-full max-w-md">
          <Link href="/">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl">
              &times;
            </button>
          </Link>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Sign In
          </h2>
          <form action={Login} className="space-y-6">
            <div>
              <label
                htmlFor="emailId"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="emailId"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="passwordId"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="passwordId"
                name="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition duration-150"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-red-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
