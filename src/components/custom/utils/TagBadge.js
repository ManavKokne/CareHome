
import { DollarSign, Flame, Home } from "lucide-react"; 

const tagStyles = {
  affordable: { icon: DollarSign, textColor: "text-[#00CE3A]", bgColor: "bg-[#F1FFF1]" },
  popular: { icon: Flame, textColor: "text-[#D32F2F]", bgColor: "bg-[#FFF5F5]" },
  "new listing": { icon: Home, textColor: "text-[#007BFF]", bgColor: "bg-[#F1F8FF]" },
  // Add more tags here as needed
};

const TagBadge = ({ tag }) => {
  const { icon: Icon, textColor, bgColor } = tagStyles[tag.toLowerCase()] || {
    icon: null,
    textColor: "text-gray-600",
    bgColor: "bg-gray-200",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md ${bgColor} ${textColor} w-fit`}>
      {Icon && <Icon className="w-5 h-5" />}
      <span className="text-sm font-semibold">{tag}</span>
    </div>
  );
};

export default TagBadge;
