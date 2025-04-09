import { User, Phone } from "lucide-react";
import CustomButton from "@/components/custom/utils/CustomButton";

export default function EnquiryForm() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full lg:w-[300px] shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-10">Enquire Now</h2>
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-purple-300 rounded-md px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <User className="absolute left-3 top-2.5 h-5 w-5 text-purple-700" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Phone Number"
            className="mb-5 w-full border border-purple-300 rounded-md px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Phone className="absolute left-3 top-2.5 h-5 w-5 text-purple-700" />
        </div>
        <CustomButton text="Enquire" />
      </div>
    </div>
  );
}
