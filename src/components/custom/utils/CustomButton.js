import { Button as ShadButton } from "@/components/ui/button";

const CustomButton = ({ icon: Icon, text }) => {
  return (
    <ShadButton className="bg-[#3A0CA3] text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#2A078C] transition-all">
      {Icon && <Icon className="w-5 h-5" />} 
      <span>{text}</span>
    </ShadButton>
  );
};

export default CustomButton;
