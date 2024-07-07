"use client";
import React, { useState, useEffect, useRef } from "react";
import girlLogo from "@/assets/girl-svgrepo-com (1).svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const res = await fetch("/api/checkAuth");
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
    };

    checkAuthStatus();
  }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (res.ok) {
      router.push("/login");
    } else {
      console.error("Failed to log out");
    }
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <img src={girlLogo.src} alt="Logo" className="w-8 h-8 mr-2" />
        </div>
        <div>
          <p className="text-black font-semibold" style={{ fontSize: 13 }}>
            {isAuthenticated ? "Account" : "Sign In"}
          </p>
          {!isAuthenticated && (
            <p className="text-black font-light" style={{ fontSize: 13 }}>
              For free shipping
            </p>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white shadow-2xl rounded-md p-4 z-10 flex flex-col"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <div className="flex flex-row mb-4">
            <div>
              <img src={girlLogo.src} alt="Logo" className="w-10 h-10 mr-2" />
            </div>
            <div>
              <p style={{ fontSize: 14 }} className="font-bold">
                {isAuthenticated
                  ? "Welcome Back!"
                  : "Good Afternoon, Beautiful👋"}
              </p>
              {!isAuthenticated && (
                <p style={{ fontSize: 12 }}>
                  Sign in for{" "}
                  <span className="font-bold">FREE standard shipping </span>
                  on all orders
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            {!isAuthenticated ? (
              <>
                <div className="flex flex-row justify-evenly mt-2 gap-4">
                  <Link
                    className="w-36 h-8 bg-black text-white rounded-full mb-2 flex justify-center items-center text-center"
                    href="/login"
                  >
                    <p className="font-bold" style={{ fontSize: 12 }}>
                      Sign in
                    </p>
                  </Link>
                  <Link
                    className="w-36 bg-white text-black rounded-full mb-2 flex justify-center items-center text-center border-2 border-black"
                    href="/register"
                  >
                    <p className="font-bold" style={{ fontSize: 12 }}>
                      Create account
                    </p>
                  </Link>
                </div>
              </>
            ) : (
              <button
                className="w-36 h-8 bg-red-500 text-white rounded-full mb-2 flex justify-center items-center text-center"
                onClick={handleLogout}
              >
                <p className="font-bold" style={{ fontSize: 12 }}>
                  Logout
                </p>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInDropdown;
