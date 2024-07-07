import Link from "next/link";
import { onRegist } from "../action";
import { ShowErrorComponent } from "@/components/ShowError";

export default function Register() {
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
            Create Account
          </h2>
          <form action={onRegist} className="space-y-6">
            <div>
              <label
                htmlFor="nameId"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="nameId"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="usernameId"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="usernameId"
                name="username"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
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
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the{" "}
                <Link href="#" className="text-red-500 hover:underline">
                  terms and conditions
                </Link>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition duration-150"
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-red-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
