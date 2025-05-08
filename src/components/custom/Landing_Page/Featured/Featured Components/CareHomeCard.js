import { Star, Flame, MapPin, AirVent, Cctv, Stethoscope, Utensils, Mail, Map, MessagesSquare, ArrowRight } from "lucide-react";

import IconBadge from "@/components/custom/utils/IconBadge";
import CustomButton from "@/components/custom/utils/CustomButton";
import TagBadge from "@/components/custom/utils/TagBadge";
import { useRouter } from 'next/navigation';

const CareHomeCard = ({ title, address, image, tag, rating }) => {
    const router = useRouter();

const handleNavigation = () => {
  router.push("/carehome/1");
};
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute top-3 left-3 bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                    <Star className="w-4 h-4" /> {rating}
                </div>
                {tag && (
                    <div className="absolute top-3 right-3">
                        <TagBadge tag={tag} />
                    </div>
                )}
            </div>
            <div className="p-0">
                <div className="border-b mt-4 px-4 py-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600 flex items-center gap-1 mt-1 text-sm">
                        <MapPin className="w-4 h-4" /> {address}
                    </p>
                </div>

                <div className="px-4 py-2">
                    <p className="text-gray-500 text-sm mt-2">A modern and elegant care home offering a range of living options...</p>

                    <div className="flex items-center gap-1 mt-5">
                        <span className="text-sm">Facilities :</span>
                        <div className="flex gap-2">
                            <IconBadge icon={AirVent} />
                            <IconBadge icon={Cctv} />
                            <IconBadge icon={Stethoscope} />
                            <IconBadge icon={Utensils} />
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center border-t px-4 py-2">
                <CustomButton icon={ArrowRight} text="Learn more" onClick={handleNavigation} />

                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <Map className="w-5 h-5 text-gray-600" />
                        <MessagesSquare className="w-5 h-5 text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareHomeCard;
