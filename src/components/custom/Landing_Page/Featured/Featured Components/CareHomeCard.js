import { Star, Flame, MapPin, AirVent, Cctv, Stethoscope, Utensils, Mail, Map, MessagesSquare, ArrowRight } from "lucide-react";

import IconBadge, { facilityIconsMap } from "@/components/custom/utils/IconBadge";
import CustomButton from "@/components/custom/utils/CustomButton";
import TagBadge from "@/components/custom/utils/TagBadge";
import { useRouter } from 'next/navigation';
import CustomBadge from "@/components/custom/utils/IconBadge";

const CareHomeCard = ({ title, address, image, tag, ratings, amenities = [], description, documentId }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/carehome/${documentId}`);
    };

    return (
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden w-80 
             transform transition duration-300 ease-in-out
             hover:-translate-y-2 hover:scale-101 hover:shadow-2xl cursor-pointer"
        >

            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute top-3 left-3 bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                    <Star className="w-4 h-4" /> {ratings}
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
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                        {description}
                    </p>

                    {amenities.length > 0 && (
                        <div className="flex items-center gap-1 mt-3">
                            <span className="text-sm">Facilities:</span>
                            <div className="flex gap-2 flex-wrap">
                                {amenities.slice(0, 5).map((amenity) => {
                                    const Icon = facilityIconsMap[amenity.title] || null;
                                    return (
                                        <CustomBadge key={amenity.id} icon={Icon} text={amenity.title} />
                                    );
                                })}
                            </div>
                        </div>
                    )}

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
