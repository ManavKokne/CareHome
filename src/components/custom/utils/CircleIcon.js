
const CircleIcon = ({ icon: Icon, sizeClasses = "w-10 h-10" }) => {
  return (
    <div className={`flex items-center justify-center rounded-full border-2 border-purple-700 bg-purple-50 ${sizeClasses}`}>
      <Icon className="w-5 h-5 text-purple-700" />
    </div>
  );
};

export default CircleIcon;

// import React from "react";
// import {
//   AirVent,
//   Cctv,
//   Stethoscope,
//   Utensils,
//   Flame,
//   Star,
//   MapPin,
//   HeartPulse,
//   Gamepad2,
//   Dumbbell,
//   BookOpenText,
// } from "lucide-react";

// // Icon mapping for facilities
// const facilityIconsMap = {
//   "Air Conditioning": AirVent,
//   "CCTV": Cctv,
//   "Medical Support": Stethoscope,
//   "Dining Services": Utensils,
//   "Fire Safety": Flame,
//   "Star Rated": Star,
//   "Location Pin": MapPin,
//   "24/7 Medical Assistance": Stethoscope,
//   "Wellness Programs": HeartPulse,
//   "In-House Dining": Utensils,
//   "Recreational Lounge": Gamepad2,
//   "Physiotherapy Center": Dumbbell,
//   "Library & Reading Room": BookOpenText,
// };

// // This is the actual CircleIcon component
// const CircleIcon = () => {
//   const facilities = [
//     "Air Conditioning",
//     "CCTV",
//     "Medical Support",
//     "Dining Services",
//     "Fire Safety",
//     "Star Rated",
//     "Location Pin",
//     "24/7 Medical Assistance",
//     "Wellness Programs",
//     "In-House Dining",
//     "Recreational Lounge",
//     "Physiotherapy Center",
//     "Library & Reading Room",
//   ];

//   // Inner icon renderer
//   const IconWrapper = ({ icon: Icon, sizeClasses = "w-10 h-10" }) => (
//     <div className={`flex items-center justify-center rounded-full border-2 border-purple-700 bg-purple-50 ${sizeClasses}`}>
//       <Icon className="w-5 h-5 text-purple-700" />
//     </div>
//   );

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
//       {facilities.map((facility) => {
//         const IconComponent = facilityIconsMap[facility];
//         return IconComponent ? (
//           <div key={facility} className="flex flex-col items-center text-center space-y-2">
//             <IconWrapper icon={IconComponent} />
//             <span className="text-sm font-medium text-gray-700">{facility}</span>
//           </div>
//         ) : null;
//       })}
//     </div>
//   );
// };

// export default CircleIcon;

