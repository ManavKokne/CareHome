"use client";

import { useState } from "react";
import {
  FaSlidersH,
  FaSpa,
  FaAmbulance,
  FaUserNurse,
  FaWheelchair,
  FaMusic,
  FaBed,
  FaUtensils,
  FaBroom,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import CustomButton from "../utils/CustomButton";
import { ListFilter, X } from "lucide-react";
import { Slider } from "../../ui/slider"; // Importing the shadcn slider

const features = [
  { icon: <FaSpa className="w-5 h-5" />, label: "Wellness Programs" },
  { icon: <FaAmbulance className="w-5 h-5" />, label: "Emergency Services" },
  { icon: <FaUserNurse className="w-5 h-5" />, label: "24/7 Nurse" },
  { icon: <FaWheelchair className="w-5 h-5" />, label: "Wheelchair Access" },
  { icon: <FaMusic className="w-5 h-5" />, label: "Recreational Activities" },
  { icon: <FaBed className="w-5 h-5" />, label: "Private Rooms" },
  { icon: <FaUtensils className="w-5 h-5" />, label: "Meals Provided" },
  { icon: <FaBroom className="w-5 h-5" />, label: "Housekeeping" },
];

const filtersList = [
  "City / Area",
  "Availability",
  "Ratings",
  "Sort By",
];

export default function SidebarFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]); // Default price range [min, max]

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <>
      {/* Toggle Button for smaller screens */}
      <div className="lg:hidden flex justify-end mb-4">
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <ListFilter className="w-4 h-4 mr-2" />
          Open Filters
        </Button>
      </div>

      {/* Sidebar Drawer for < md screens */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-64px)] px-4 pb-6">
          {/* Filters Content */}
          <h2 className="text-2xl font-semibold text-center">Filters</h2>

          {/* Dropdowns */}
          <div className="space-y-3">
            {filtersList.map((label, index) => (
              <Select key={index}>
                <SelectTrigger className="w-full rounded-full border border-gray-300 focus:ring-purple-500 focus:outline-none">
                  <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">{label} Option 1</SelectItem>
                  <SelectItem value="option2">{label} Option 2</SelectItem>
                </SelectContent>
              </Select>
            ))}
          </div>

          {/* Price Range Slider */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Price Range</h3>
            <Slider
              value={priceRange}
              onValueChange={handlePriceChange}
              min={0}
              max={1000}
              step={10}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {features.map(({ icon, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center text-xs text-purple-800"
              >
                <div className="border border-purple-700 rounded-full p-2">
                  {icon}
                </div>
                <span className="mt-1">{label}</span>
              </div>
            ))}
          </div>

          {/* Apply Button */}
          <div className="flex justify-center mt-4">
            <CustomButton icon={ListFilter} text="Apply Now" />
          </div>
        </div>
      </div>

      {/* Sidebar - Always visible on larger screens */}
      <aside className="hidden lg:block p-4 bg-white rounded-2xl shadow-xl space-y-6 sticky top-30">
        <h2 className="text-xl font-semibold text-left">Filters</h2>

        {/* Dropdowns */}
        <div className="space-y-3">
          {filtersList.map((label, index) => (
            <Select key={index}>
              <SelectTrigger className="w-full rounded-full border border-gray-300 focus:ring-purple-500 focus:outline-none">
                <SelectValue placeholder={label} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">{label} Option 1</SelectItem>
                <SelectItem value="option2">{label} Option 2</SelectItem>
              </SelectContent>
            </Select>
          ))}
        </div>

        {/* Price Range Slider */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Price Range</h3>
          <Slider
            value={priceRange}
            onValueChange={handlePriceChange}
            min={0}
            max={1000}
            step={10}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {features.map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-xs text-purple-800"
            >
              <div className="border border-purple-700 rounded-full p-2">
                {icon}
              </div>
              <span className="mt-1">{label}</span>
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-4">
          <CustomButton icon={ListFilter} text="Apply Now" />
        </div>
      </aside>
    </>
  );
}



// "use client";

// import { useState } from "react";
// import {
//   FaSlidersH,
//   FaSpa,
//   FaAmbulance,
//   FaUserNurse,
//   FaWheelchair,
//   FaMusic,
//   FaBed,
//   FaUtensils,
//   FaBroom,
// } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import CustomButton from "../utils/CustomButton";
// import { ListFilter, X } from "lucide-react";

// const features = [
//   { icon: <FaSpa className="w-5 h-5" />, label: "Wellness Programs" },
//   { icon: <FaAmbulance className="w-5 h-5" />, label: "Emergency Services" },
//   { icon: <FaUserNurse className="w-5 h-5" />, label: "24/7 Nurse" },
//   { icon: <FaWheelchair className="w-5 h-5" />, label: "Wheelchair Access" },
//   { icon: <FaMusic className="w-5 h-5" />, label: "Recreational Activities" },
//   { icon: <FaBed className="w-5 h-5" />, label: "Private Rooms" },
//   { icon: <FaUtensils className="w-5 h-5" />, label: "Meals Provided" },
//   { icon: <FaBroom className="w-5 h-5" />, label: "Housekeeping" },
// ];

// const filtersList = [
//   "City / Area",
//   "Price / Range",
//   "Availability",
//   "Ratings",
//   "Sort By",
// ];

// export default function SidebarFilters() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Toggle Button for smaller screens */}
//       <div className="lg:hidden flex justify-end mb-4">
//         <Button variant="outline" onClick={() => setIsOpen(true)}>
//           <ListFilter className="w-4 h-4 mr-2" />
//           Open Filters
//         </Button>
//       </div>

//       {/* Sidebar Drawer for < md screens */}
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } lg:hidden`}
//       >
//         <div className="flex justify-end p-4">
//           <button onClick={() => setIsOpen(false)}>
//             <X className="w-6 h-6 text-gray-600" />
//           </button>
//         </div>
//         <div className="overflow-y-auto h-[calc(100%-64px)] px-4 pb-6">
//           {/* Filters Content */}
//           <h2 className="text-2xl font-semibold text-center">Filters</h2>

//           {/* Dropdowns */}
//           <div className="space-y-3">
//             {filtersList.map((label, index) => (
//               <Select key={index}>
//                 <SelectTrigger className="w-full rounded-full border border-gray-300 focus:ring-purple-500 focus:outline-none">
//                   <SelectValue placeholder={label} />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="option1">{label} Option 1</SelectItem>
//                   <SelectItem value="option2">{label} Option 2</SelectItem>
//                 </SelectContent>
//               </Select>
//             ))}
//           </div>

//           {/* Feature Icons */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
//             {features.map(({ icon, label }, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center text-xs text-purple-800"
//               >
//                 <div className="border border-purple-700 rounded-full p-2">
//                   {icon}
//                 </div>
//                 <span className="mt-1">{label}</span>
//               </div>
//             ))}
//           </div>

//           {/* Apply Button */}
//           <div className="flex justify-center mt-4">
//             <CustomButton icon={ListFilter} text="Apply Now" />
//           </div>
//         </div>
//       </div>

//       {/* Sidebar - Always visible on larger screens */}
//       <aside className="hidden lg:block p-4 bg-white rounded-2xl shadow-xl space-y-6 sticky top-30">
//         <h2 className="text-xl font-semibold text-left">Filters</h2>

//         {/* Dropdowns */}
//         <div className="space-y-3">
//           {filtersList.map((label, index) => (
//             <Select key={index}>
//               <SelectTrigger className="w-full rounded-full border border-gray-300 focus:ring-purple-500 focus:outline-none">
//                 <SelectValue placeholder={label} />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="option1">{label} Option 1</SelectItem>
//                 <SelectItem value="option2">{label} Option 2</SelectItem>
//               </SelectContent>
//             </Select>
//           ))}
//         </div>

//         {/* Feature Icons */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
//           {features.map(({ icon, label }, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center text-xs text-purple-800"
//             >
//               <div className="border border-purple-700 rounded-full p-2">
//                 {icon}
//               </div>
//               <span className="mt-1">{label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Apply Button */}
//         <div className="flex justify-center mt-4">
//           <CustomButton icon={ListFilter} text="Apply Now" />
//         </div>
//       </aside>
//     </>
//   );
// }
