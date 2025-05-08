import {
    Flower,
    Hospital,
    UserRound,
    Accessibility,
    Music,
    Bed,
    Utensils,
    Brush,
  } from "lucide-react";
  import CircleIcon from "../../utils/CircleIcon";
  
  const services = [
    { icon: Flower, label: "Wellness Programs" },
    { icon: Hospital, label: "Emergency Services" },
    { icon: UserRound, label: "24/7 Nurse" },
    { icon: Accessibility, label: "Wheelchair Access" },
    { icon: Music, label: "Recreational Activities" },
    { icon: Bed, label: "Private Rooms" },
    { icon: Utensils, label: "Meals Provided" },
    { icon: Brush, label: "Housekeeping" },
  ];
  
  export default function Services() {
    return (
      <div className="bg-white rounded-2xl p-6 w-[75%] flex-1 shadow-lg">
        <p className="text-sm font-semibold text-[#3A0CA3] mb-1 tracking-widest">
          Everything you need for a comfortable and supported stay.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-widest">
          Provided services & amenities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.map(({ icon, label }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <CircleIcon icon={icon} />
              <span className="text-sm mt-2 text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  