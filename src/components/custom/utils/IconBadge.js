

// import { Badge } from "@/components/ui/badge";

const CustomBadge = ({ icon: Icon = null, text }) => {
  return (
    <div className="inline-flex items-center p-2 rounded-md bg-[#F6F6F6] text-black hover:bg-[#E7E7E7] transition-all w-fit">
      {Icon && <Icon className="w-5 h-5" />} 
      {/* <Badge className="bg-transparent text-black font-medium">{text}</Badge> */}
    </div>
  );
};

export default CustomBadge;