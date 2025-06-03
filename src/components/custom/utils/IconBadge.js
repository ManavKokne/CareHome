// components/custom/utils/FacilityBadge.jsx

import {
  AirVent,
  Cctv,
  Stethoscope,
  Utensils,
  Flame,
  Star,
  MapPin,
  HeartPulse,
  Gamepad2,
  Dumbbell,
  BookOpenText,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Icon mapping for facilities
export const facilityIconsMap = {
  "Air Conditioning": AirVent,
  "CCTV": Cctv,
  "Medical Support": Stethoscope,
  "Dining Services": Utensils,
  "Fire Safety": Flame,
  "Star Rated": Star,
  "Location Pin": MapPin,

  // New facility icons
  "24/7 Medical Assistance": Stethoscope,
  "Wellness Programs": HeartPulse,
  "In-House Dining": Utensils,
  "Recreational Lounge": Gamepad2,
  "Physiotherapy Center": Dumbbell,
  "Library & Reading Room": BookOpenText,
};

// Custom badge component with tooltip
const CustomBadge = ({ icon: Icon = null, text }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-1 p-2 rounded-md bg-[#F6F6F6] text-black hover:bg-[#E7E7E7] transition-all w-fit cursor-default">
            {Icon && <Icon className="w-5 h-5" />}
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <span className="text-sm">{text}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomBadge;




// // import { Badge } from "@/components/ui/badge";

// const CustomBadge = ({ icon: Icon = null, text }) => {
//   return (
//     <div className="inline-flex items-center p-2 rounded-md bg-[#F6F6F6] text-black hover:bg-[#E7E7E7] transition-all w-fit">
//       {Icon && <Icon className="w-5 h-5" />} 
//       {/* <Badge className="bg-transparent text-black font-medium">{text}</Badge> */}
//     </div>
//   );
// };

// export default CustomBadge;