"use client";

import {
  Home,
  Stethoscope,
  Accessibility,
  HeartPulse
} from "lucide-react";

import Card from "@/components/custom/Listing_Page/Card/Card";
import Sidebar from "@/components/custom/Listing_Page/Sidebar";
import CareHomeCard from "@/components/custom/Landing_Page/Featured/Featured Components/CareHomeCard";
import SearchBar from "@/components/custom/Listing_Page/Searchbar";

const dummyCareHomes = [
  {
    title: "Sunrise Haven",
    address: "123 Maple Ave, Springfield",
    image: "./assets/carehome1.png",
    tag: "Popular",
    rating: 4.8,
  },
  {
    title: "Golden Years Retreat",
    address: "45 Elm St, Lakeside",
    image: "./assets/carehome2.png",
    tag: "New Listing",
    rating: 4.7,
  },
  {
    title: "Peaceful Pines",
    address: "89 Oak Blvd, Riverdale",
    image: "./assets/carehome3.png",
    tag: "Affordable",
    rating: 4.6,
  },
  {
    title: "Harmony House",
    address: "67 Birch Rd, Hillside",
    image: "./assets/carehome2.png",
    tag: "New Listing",
    rating: 4.9,
  },
  {
    title: "Evergreen Estate",
    address: "230 Willow Ln, Greenfield",
    image: "./assets/carehome1.png",
    tag: "Affordable",
    rating: 5.0,
  },
  {
    title: "Silver Springs",
    address: "12 Cedar Ct, Brookville",
    image: "./assets/carehome3.png",
    tag: "Affordable",
    rating: 4.5,
  },
  {
    title: "Tranquil Trails",
    address: "789 Pine St, Westwood",
    image: "./assets/carehome2.png",
    tag: "Popular",
    rating: 4.4,
  },
  {
    title: "Maple Manor",
    address: "234 Aspen Dr, Oakridge",
    image: "./assets/carehome1.png",
    tag: "New Listing",
    rating: 4.8,
  },
  {
    title: "Serenity Sanctuary",
    address: "98 Spruce St, Northview",
    image: "./assets/carehome3.png",
    tag: "Popular",
    rating: 4.6,
  },
  {
    title: "Golden Horizon",
    address: "101 Fir Rd, Sunnyside",
    image: "./assets/carehome2.png",
    tag: "Affordable",
    rating: 4.9,
  },
  {
    title: "Serenity Sanctuary",
    address: "98 Spruce St, Northview",
    image: "./assets/carehome3.png",
    tag: "Popular",
    rating: 4.6,
  },
  {
    title: "Serenity Sanctuary",
    address: "98 Spruce St, Northview",
    image: "./assets/carehome3.png",
    tag: "Popular",
    rating: 4.6,
  },
];

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto ">

      <h2 className="text-sm text-purple-600 font-semibold mb-1">
        Our Featured Care Homes
      </h2>
      <h1 className="text-2xl md:text-3xl font-bold mb-8">
        Discover Reliable Care and Comfort Nearby.
      </h1>

      <div className="flex gap-5">
        <div className="flex flex-col mb-10 w-4/5 ">
          {/* Cards Grid */}
          <SearchBar />
          <div className="w-full lg:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {dummyCareHomes.map((home, index) => (
              <div
                key={index}
                className="transform scale-100 transition-transform duration-300"
              >
                <CareHomeCard
                  title={home.title}
                  address={home.address}
                  image={home.image}
                  tag={home.tag}
                  rating={home.rating}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-1/5">
          <Sidebar />
        </div>
      </div>

    </div>
  );
};

export default Page;
