import ForYouCards from "../components/ForYouCards";
import TrendingCards from "../components/TrendingCards";
import FeaturedCat from "../components/FeaturedCatCards";
import { carouselData } from "../components/CarouselData";
import Header from "@/components/Header";
import { fetchProducts } from "./action";
import Link from "next/link";
import Footer from "../components/Footer";

const Home = async () => {
  const products = await fetchProducts();

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-auto">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="carousel carousel-end p-4">
            {carouselData.map((item, index) => (
              <div
                key={index}
                className="carousel-item flex flex-col h-full p-1"
              >
                <div>
                  <img
                    src={item.imgSrc}
                    alt="Product"
                    className="h-80 object-cover rounded-t"
                  />
                </div>
                <div
                  className="p-3 h-36 rounded-b"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <h2 className="text-l font-bold mb-2 text-black">
                    {item.title}
                  </h2>
                  <p className="text-black underline" style={{ fontSize: 14 }}>
                    {item.text}
                  </p>
                  <p className="text-l font-bold mt-2 text-black underline">
                    {item.buttonText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-12 mx-20">
          <p className="font-semibold" style={{ fontSize: 20 }}>
            Chosen For You
          </p>
          <Link href="/products">
            <p className="text-blue-500 hover:text-blue-700 font-bold">
              See More
            </p>
          </Link>
        </div>
        <ForYouCards products={products} />
        <div
          className="flex justify-center items-center border border-gray-200 mt-8"
          style={{ height: 500 }}
        >
          <div className="carousel flex gap-4">
            {[
              {
                imgSrc:
                  "https://www.sephora.com/contentimages/2024-summer-deal-week-site-home-page-RWD-marketing-banner-general-us-can-2834-only-image.jpg?imwidth=315",
                bgColor: "#F18180",
                title: "Summer Deals",
                text: "Get the best deals this summer.",
              },
              {
                imgSrc:
                  "https://www.sephora.com/contentimages/2024-7-4-multibranded-new-hair-and-body-fragrance-mists-site-desktop-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=315",
                bgColor: "#E83866",
                title: "Hair & Body Fragrance",
                text: "Explore our new fragrance mists.",
              },
              {
                imgSrc:
                  "https://www.sephora.com/contentimages/2024-06-24-slotting-trending-on-social-site-rwd-home-page-marketing-banner-us_01.jpg?imwidth=315",
                bgColor: "#01BDEA",
                title: "Trending on Social",
                text: "Discover the hottest trends on social media.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="carousel-item flex flex-col justify-between h-full p-1"
              >
                <div>
                  <img
                    src={item.imgSrc}
                    alt="Product"
                    className="w-96 h-64 object-cover rounded-t"
                  />
                </div>
                <div
                  className="p-3 h-36 rounded-b"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <h2 className="text-l font-bold mb-2 text-black">
                    {item.title}
                  </h2>
                  <p className="text-black underline" style={{ fontSize: 14 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-12 mx-20">
          <p className="font-semibold" style={{ fontSize: 20 }}>
            Your Trending Picks
          </p>
          <Link href="/products">
            <p className="text-blue-500 hover:text-blue-700 font-bold">
              See More
            </p>
          </Link>
        </div>
        <TrendingCards products={products} />

        <div
          className="content-center border border-gray-200"
          style={{ height: 220 }}
        >
          <div className="h-40 flex w-full">
            <div className="flex-col ml-20 mt-3">
              <p className="font-semibold" style={{ fontSize: 20 }}>
                Featured Categories
              </p>
              <p className="" style={{ fontSize: 14 }}>
                Shop what's popular now.
              </p>
            </div>
            <FeaturedCat />
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ height: 500 }}
        >
          <div className="carousel flex gap-4">
            {[
              {
                imgSrc:
                  "https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-dei-release.jpg?imwidth=315",
                bgColor: "#F2F2F2",
                title: "DEI Release",
                text: "Latest diversity-focused releases.",
              },
              {
                imgSrc:
                  "https://www.sephora.com/contentimages/2024-06-15-AltPayments-site-desktop-rwd-home-page-marketing-banner-us-image-only.jpg?imwidth=315",
                bgColor: "#8DB8E3",
                title: "Alt Payments",
                text: "New convenient payment options.",
              },
              {
                imgSrc:
                  "https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-beauty-on-demand-release.jpg?imwidth=315",
                bgColor: "#BDDCEE",
                title: "Beauty On Demand",
                text: "Get beauty products anytime.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="carousel-item flex flex-col justify-between h-full p-1"
              >
                <div>
                  <img
                    src={item.imgSrc}
                    alt="Product"
                    className="w-96 h-64 object-cover rounded-t"
                  />
                </div>
                <div
                  className="p-3 h-36 rounded-b"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <h2 className="text-l font-bold mb-2 text-black">
                    {item.title}
                  </h2>
                  <p className="text-black underline" style={{ fontSize: 14 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
