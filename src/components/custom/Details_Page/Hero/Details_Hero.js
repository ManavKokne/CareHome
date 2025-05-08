import { MapPin, Ruler, LocateFixed, Navigation, IndianRupee, Phone, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-6 md:py-10">
      <div>
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto">
          {/* Left - Image */}
          <div className="lg:w-[75%] w-full h-[460px] rounded-2xl overflow-hidden bg-red-300">
            <img
              src="/assets/Rect1.png"
              alt="Retreat"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right - Info */}
          <div className="lg:w-[25%] w-full py-6 px-6 flex flex-col justify-between bg-white shadow-lg rounded-2xl">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Golden Years Retreat</h2>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-gray-600" /> Near Conrad Hotel
                </li>
                <li className="flex items-center gap-3">
                  <Ruler size={18} className="text-gray-600" /> 1070 Sq. ft
                </li>
                <li className="flex items-center gap-3">
                  <LocateFixed size={18} className="text-gray-600" /> Pune, Koregaon Park
                </li>
                <li className="flex items-center gap-3">
                  <Navigation size={18} className="text-gray-600" /> 3.5 km from your location
                </li>
                <li className="flex items-center gap-3">
                  <IndianRupee size={18} className="text-gray-600" /> ₹3599 – ₹7499
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="pt-5 border-t mt-5">
              <p className="text-sm font-medium text-gray-900 mb-3">Contact Details</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-600" /> +91 123456789
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-600" /> example@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}