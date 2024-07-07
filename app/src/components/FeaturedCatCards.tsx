import React from "react";

const FeaturedCat = () => {
  return (
    <>
      <div className="carousel-item gap-2 items-center ml-24 ">
        <div
          className="bg-white w-28 rounded shadow-lg"
          style={{ height: 130 }}
        >
          <p className="p-3" style={{ fontSize: 13 }}>
            Blush
          </p>
          <img
            src="https://www.sephora.com/contentimages/homepage/031524/tools@3x.png?imwidth=48"
            className="ml-12 mt-6 h-14"
          />
        </div>
        <div
          className="bg-white w-28 rounded shadow-lg"
          style={{ height: 130 }}
        >
          <p className="p-3" style={{ fontSize: 13 }}>
            Serums
          </p>
          <img
            src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=48"
            className="ml-12 mt-6 h-14"
          />
        </div>
        <div
          className="bg-white w-28 rounded shadow-lg"
          style={{ height: 130 }}
        >
          <p className="p-3" style={{ fontSize: 13 }}>
            Hair Styling & Treatments
          </p>
          <img
            src="https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/hair%20dryer.JPG?imwidth=48"
            className="ml-12 mt-1 h-14"
          />
        </div>
        <div
          className="bg-white w-28 rounded shadow-lg"
          style={{ height: 130 }}
        >
          <p className="p-3" style={{ fontSize: 13 }}>
            Perfume
          </p>
          <img
            src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=48"
            className="ml-12 mt-6 h-14"
          />
        </div>
        <div
          className="bg-white w-28 rounded shadow-lg"
          style={{ height: 130 }}
        >
          <p className="p-3" style={{ fontSize: 13 }}>
            Minis
          </p>
          <img
            src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_minis_us_ca_rwd_slice.png?imwidth=48"
            className="ml-12 mt-6 h-14"
          />
        </div>
        <div
          className="bg-white w-28 rounded shadow-lg"
          style={{ height: 130 }}
        >
          <p className="p-3" style={{ fontSize: 13 }}>
            Sephora Collection
          </p>
          <img
            src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_sephoracollection_SC_us_ca_rwd_slice.jpg?imwidth=48"
            className="ml-12 mt-2 h-14"
          />
        </div>
        <div
          className="bg-white w-28 rounded shadow-lg"
          style={{ height: 130 }}
        >
          <p className="p-3" style={{ fontSize: 13 }}>
            Trending on Social
          </p>
          <img
            src="https://www.sephora.com/contentimages/homepage/010124/star%20trending.JPG?imwidth=48"
            className="ml-12 mt-2 h-14"
          />
        </div>
        <div
          className="bg-white w-28 rounded shadow-lg"
          style={{ height: 130 }}
        >
          <p className="p-3" style={{ fontSize: 13 }}>
            Sale
          </p>
          <img
            src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/sale%2032@3x.jpg?imwidth=48"
            className="ml-12 mt-6 h-14"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedCat;
