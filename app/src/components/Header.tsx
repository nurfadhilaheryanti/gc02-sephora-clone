import React from "react";
import SignInDropdown from "./SignInDropdown";
import storeLogo from "@/assets/store-svgrepo-com (1).svg";
import communityLogo from "@/assets/people-community-svgrepo-com.svg";
import heartLogo from "@/assets/heart-svgrepo-com.svg";
import cartLogo from "@/assets/cart-3-svgrepo-com.svg";
import Link from "next/link";
import SearchBar from "./requirement/Search";

const Header = () => {
  return (
    <>
      <div
        className="h-16 flex items-center justify-starts"
        style={{ backgroundColor: "#F1DDE9" }}
      >
        <p className="text-black ml-28 font-semibold" style={{ fontSize: 14 }}>
          Get 5X Points on Sephora Collection.
          <span className="font-thin"> Ends 7/3. Terms apply</span>. JOIN BEAUTY
          INSIDER
        </p>
      </div>
      <div className="h-24 flex flex-row ">
        <Link href="/">
          <p className="text-black text-2xl mt-8 ml-20">S E P H O R A</p>
        </Link>
        <div className="flex-1 h-full">
          {/* ----- */}
          <SearchBar />
        </div>
        <div className="flex-1 h-full flex flex-row gap-2 justify-around items-center">
          <div className="flex items-center">
            <div>
              <img src={storeLogo.src} alt="" className="w-8 h-8 mr-2" />
            </div>
            <div>
              <p className="text-black" style={{ fontSize: 13 }}>
                Stores & Services
              </p>
              <p className="text-black font-light" style={{ fontSize: 13 }}>
                Choose your store
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src={communityLogo.src} alt="" className="w-8 h-8 mr-2" />
            </div>
            <div>
              <p className="text-black " style={{ fontSize: 13 }}>
                Community
              </p>
            </div>
          </div>
          <SignInDropdown />
        </div>
        <div className="w-44 flex flex-row gap-4 items-center ml-4">
          <Link href="/wishlist">
            <div>
              <img src={heartLogo.src} alt="" className="w-8 h-8 " />
            </div>
          </Link>
          <div>
            <img src={cartLogo.src} alt="" className="w-8 h-8 " />
          </div>
        </div>
      </div>
      <div className="h-11 bg-black flex items-center justify-around ">
        <Link href="/products">
          <p className="text-white font-light ml-10" style={{ fontSize: 14 }}>
            New
          </p>
        </Link>
        <Link href="/products">
          <p className="text-white font-light" style={{ fontSize: 14 }}>
            Brands
          </p>
        </Link>
        <p className="text-white font-light" style={{ fontSize: 14 }}>
          Makeup
        </p>
        <p className="text-white font-light" style={{ fontSize: 14 }}>
          Skincare
        </p>
        <p className="text-white font-light" style={{ fontSize: 14 }}>
          Tools & Brushes
        </p>
        <p className="text-white font-light" style={{ fontSize: 14 }}>
          Bath & Body
        </p>
        <p className="text-white font-light" style={{ fontSize: 14 }}>
          Clean Beauty
        </p>
        <p className="text-white font-light mr-10" style={{ fontSize: 14 }}>
          Mini Size
        </p>
      </div>
    </>
  );
};

export default Header;
