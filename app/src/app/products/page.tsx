"use client";
import Header from "@/components/Header";
import ProductsList from "@/components/requirement/ProductList";
import { ShowErrorComponent } from "@/components/ShowError";
import newLogo from "@/assets/stars-star-svgrepo-com.svg";
import bestLogo from "@/assets/medal-gold-winner-2-svgrepo-com.svg";
import cleanLogo from "@/assets/accept-check-good-mark-ok-tick-svgrepo-com.svg";
import veganlogo from "@/assets/wheat-svgrepo-com.svg";
import animalLogo from "@/assets/animal-domestic-footstep-svgrepo-com.svg";

const categories = [
  { name: "New Arrivals", logo: newLogo },
  { name: "Bestsellers", logo: bestLogo },
  { name: "Clean Beauty", logo: cleanLogo },
  { name: "Vegan", logo: veganlogo },
  { name: "Cruelty-Free", logo: animalLogo },
];

const Products = () => {
  return (
    <>
      <ShowErrorComponent />
      <Header />
      <div className="h-screen w-screen flex">
        <div className="w-1/4 p-4 mt-4 flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-6">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li className="mb-2" key={index}>
                <a href="#" className="text-black">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-3/4">
          <div className="mt-4 flex py-4 gap-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="w-48 h-10 bg-white shadow-lg flex items-center justify-between"
                style={{ borderRadius: 3 }}
              >
                <p className="ml-4" style={{ fontSize: 14 }}>
                  {category.name}
                </p>
                <img
                  src={category.logo.src}
                  alt={category.name}
                  className="w-8 h-8 mr-2"
                />
              </div>
            ))}
          </div>
          <ProductsList />
        </div>
      </div>
    </>
  );
};

export default Products;
