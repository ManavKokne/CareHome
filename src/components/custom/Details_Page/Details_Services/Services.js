import {
  Stethoscope,
  Gamepad2,
  HeartPulse,
  Utensils,
  Bed,
  Brush,
  Accessibility,
  Flower,
  Hospital,
  UserRound,
  Music,
  Dumbbell,
  BookOpenText,
  AirVent,
  Cctv,
  Flame,
  Star,
  MapPin,
} from "lucide-react";
import CircleIcon from "../../utils/CircleIcon";

// Icon mapping for amenity titles
const amenityIconMap = {
  "24/7 Medical Assistance": Stethoscope,
  "Recreational Lounge": Gamepad2,
  "Wellness Programs": HeartPulse,
  "In-House Dining": Utensils,
  "Private Rooms": Bed,
  "Housekeeping": Brush,
  "Wheelchair Access": Accessibility,
  "Emergency Services": Hospital,
  "24/7 Nurse": UserRound,
  "Recreational Activities": Music,
  "Physiotherapy Center": Dumbbell,
  "Library & Reading Room": BookOpenText,
  

    "Air Conditioning": AirVent,
  "CCTV": Cctv,
  "Medical Support": Stethoscope,
  "Dining Services": Utensils,
  "Fire Safety": Flame,
  "Star Rated": Star,
  "Location Pin": MapPin,
  "Recreational Lounge": Gamepad2,
  "Physiotherapy Center": Dumbbell,
};

export default function Services({ data }) {
  const amenities = data?.amenities || [];

  return (
    <div className="bg-white rounded-2xl p-6 w-[75%] flex-1 shadow-lg">
      <p className="text-sm font-semibold text-[#3A0CA3] mb-1 tracking-widest">
        Everything you need for a comfortable and supported stay.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-widest">
        Provided services & amenities
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {amenities.map((amenity, idx) => {
          const IconComponent = amenityIconMap[amenity.title] || Flower; // Default fallback icon
          return (
            <div key={idx} className="flex flex-col items-center text-center">
              <CircleIcon icon={IconComponent} />
              <span className="text-sm mt-2 text-gray-700">{amenity.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


// import {
//     Flower,
//     Hospital,
//     UserRound,
//     Accessibility,
//     Music,
//     Bed,
//     Utensils,
//     Brush,
//   } from "lucide-react";
//   import CircleIcon from "../../utils/CircleIcon";
  
//   const services = [
//     { icon: Flower, label: "Wellness Programs" },
//     { icon: Hospital, label: "Emergency Services" },
//     { icon: UserRound, label: "24/7 Nurse" },
//     { icon: Accessibility, label: "Wheelchair Access" },
//     { icon: Music, label: "Recreational Activities" },
//     { icon: Bed, label: "Private Rooms" },
//     { icon: Utensils, label: "Meals Provided" },
//     { icon: Brush, label: "Housekeeping" },
//   ];
  
//   export default function Services() {
//     return (
//       <div className="bg-white rounded-2xl p-6 w-[75%] flex-1 shadow-lg">
//         <p className="text-sm font-semibold text-[#3A0CA3] mb-1 tracking-widest">
//           Everything you need for a comfortable and supported stay.
//         </p>
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-widest">
//           Provided services & amenities
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {services.map(({ icon, label }, idx) => (
//             <div key={idx} className="flex flex-col items-center text-center">
//               <CircleIcon icon={icon} />
//               <span className="text-sm mt-2 text-gray-700">{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  