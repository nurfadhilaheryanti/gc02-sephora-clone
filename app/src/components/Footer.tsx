// components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-8">
      <div
        className=" flex justify-center items-center h-14"
        style={{ backgroundColor: "#CCCCCC" }}
      >
        <p className="font-bold text-black">Website feedback? Let us know</p>
      </div>
      <div className="flex justify-evenly gap-8 py-4">
        <p>
          <Link href="#">Find a Store</Link>
        </p>
        <p>
          <Link href="#">Customer Service</Link>
        </p>
        <p>
          <Link href="#">Get the App</Link>
        </p>
        <p>
          <Link href="#">Get Sephora Text Alerts</Link>
        </p>
        <p>
          <Link href="#">Sephora Credit Card Program</Link>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-black gap-2 py-8">
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <div className="flex flex-col items-start mx-4">
            <h3 className="font-bold">About Sephora</h3>
            <p>
              <Link href="#">Newsroom</Link>
            </p>
            <p>
              <Link href="#">Careers</Link>
            </p>
            <p>
              <Link href="#">Sephora Values</Link>
            </p>
            <p>
              <Link href="#">Supply Chain Transparency</Link>
            </p>
            <p>
              <Link href="#">Affiliates</Link>
            </p>
            <p>
              <Link href="#">Sephora Events</Link>
            </p>
          </div>
          <div className="flex flex-col items-start mx-4">
            <h3 className="font-bold">My Sephora</h3>
            <p>
              <Link href="#">Beauty Insider</Link>
            </p>
            <p>
              <Link href="#">Sephora Credit Card</Link>
            </p>
            <p>
              <Link href="#">Community Profile</Link>
            </p>
            <p>
              <Link href="#">Order Status</Link>
            </p>
            <p>
              <Link href="#">Purchase History</Link>
            </p>
            <p>
              <Link href="#">Account Settings</Link>
            </p>
            <p>
              <Link href="#">Beauty Advisor Recommendations</Link>
            </p>
          </div>
          <div className="flex flex-col items-start mx-4">
            <h3 className="font-bold">Help</h3>
            <p>
              <Link href="#">Customer Service</Link>
            </p>
            <p>
              <Link href="#">Returns & Exchanges</Link>
            </p>
            <p>
              <Link href="#">Delivery and Pickup Options</Link>
            </p>
            <p>
              <Link href="#">Shipping</Link>
            </p>
            <p>
              <Link href="#">Billing</Link>
            </p>
          </div>
          <div className="flex flex-col items-start mx-4">
            <h3 className="font-bold">Region & Language</h3>
            <p>
              <Link href="#">United States - English</Link>
            </p>
            <p>
              <Link href="#">Canada - English</Link>
            </p>
            <p>
              <Link href="#">Canada - Français</Link>
            </p>
          </div>
          <div className="text-left">
            <p style={{ fontSize: 28 }} className="text-start">
              We Belong to
            </p>
            <p style={{ fontSize: 28 }}>Something Beautiful</p>
            <p style={{ fontSize: 12 }} className="font-bold mt-24">
              Sign up for Sephora text updates
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Mobile Phone Number"
                className="bg-white text-white px-4 py-2 rounded"
              />
              <button className="bg-black border border-white text-white px-4 py-2 rounded-full">
                <p style={{ fontSize: 12 }}>Continue</p>
              </button>
            </div>
            <p style={{ fontSize: 12 }} className="font-bold mt-4">
              Sign up for Sephora Emails
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-white 0 text-white px-4 py-2 rounded "
              />
              <button className="bg-black border border-white text-white px-4 py-2 rounded-full">
                <p style={{ fontSize: 12 }}>Sign Up</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 py-4">
          <p>
            <Link href="#">Privacy Policy</Link>
          </p>
          <p>
            <Link href="#">Terms of Use</Link>
          </p>
          <p>
            <Link href="#">Accessibility</Link>
          </p>
          <p>
            <Link href="#">Sitemap</Link>
          </p>
          <p>
            <Link href="#">Your Privacy Choices</Link>
          </p>
        </div>
        <div className="text-center py-4">
          <p>© 2024 Sephora USA, Inc. All rights reserved.</p>
          <p>1-877-737-4672 TTY: 1-888-866-9845</p>
        </div>
        <div className="flex justify-center gap-4 py-4">
          <p>
            <Link href="#">Instagram</Link>
          </p>
          <p>
            <Link href="#">Facebook</Link>
          </p>
          <p>
            <Link href="#">Twitter</Link>
          </p>
          <p>
            <Link href="#">YouTube</Link>
          </p>
          <p>
            <Link href="#">Pinterest</Link>
          </p>
          <p>
            <Link href="#">Snapchat</Link>
          </p>
          <p>
            <Link href="#">TikTok</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
