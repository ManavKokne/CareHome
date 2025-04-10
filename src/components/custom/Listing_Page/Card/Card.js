"use client";

import { Star, MapPin, ArrowRight, Mail, Map, MessagesSquare } from "lucide-react";
import TagBadge from "@/components/custom/utils/TagBadge";
import CustomButton from "@/components/custom/utils/CustomButton";
import CircleIcon from "@/components/custom/utils/CircleIcon";
import { useRouter } from 'next/navigation';

const Card = ({
  title,
  address,
  image,
  tag,
  rating,
  facilities = [],
  typeOfCare,
  distance,
  price
}) => {

  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/carehome/1`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md" onClick={handleNavigation}>

      {/* Image Section */}
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover sm:h-56 md:h-64" />

          {/* Rating */}
          <div className="absolute top-3 left-3 bg-yellow-400 text-white text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1 shadow">
            {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            fill={i < Math.floor(rating) ? "#fff" : "none"}
            stroke="#fff"
            className="w-4 h-4"
          />
            ))}
          </div>

          {/* Tag */}
        {tag && (
          <div className="absolute top-3 right-3">
            <TagBadge tag={tag} />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-4">

        {/* Title and Address */}
        <div className="border-b pb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 flex items-center gap-1 mt-1 text-sm">
            <MapPin className="w-4 h-4" /> {address}
          </p>
        </div>

        {/* Facilities */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Facilities:</p>
          <div className="flex items-center gap-2 flex-wrap">
            {facilities.map((facility, index) => (
              <CircleIcon
                key={index}
                icon={facility}
                sizeClasses="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Type Of Care: <span className="font-medium">{typeOfCare}</span>
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-500" /> {distance}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t flex flex-col sm:flex-row justify-between gap-3 sm:items-center">
          {/* CTA Button */}
          <CustomButton icon={ArrowRight} text="Learn More" />

          {/* Price + Icons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-lg font-bold text-gray-800 whitespace-nowrap">
              ₹ {price}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Mail className="w-5 h-5 text-gray-600" />
              <Map className="w-5 h-5 text-gray-600" />
              <MessagesSquare className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
