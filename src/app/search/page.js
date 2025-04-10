"use client";

import {
  Home,
  Stethoscope,
  Accessibility,
  HeartPulse
} from "lucide-react";

import Card from "@/components/custom/Listing_Page/Card/Card";

const cards = new Array(8).fill(null); // to render 8 cards

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-sm text-purple-600 font-semibold mb-1">
        Our Featured Care Homes
      </h2>
      <h1 className="text-2xl md:text-3xl font-bold mb-8">
        Discover Reliable Care and Comfort Nearby.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((_, i) => (
          <Card
            key={i}
            title="Golden Years Retreat"
            address="103 Wright Court, Burien, WA 98168"
            image="/assets/Trust.png"
            tag={i % 3 === 0 ? "Affordable" : i % 3 === 1 ? "Premium" : "New"}
            rating={4.5}
            facilities={[Home, Stethoscope, Accessibility, HeartPulse]}
            typeOfCare="Elderly, Assisted Living, etc"
            distance="3.5 km"
            price={3499}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;


