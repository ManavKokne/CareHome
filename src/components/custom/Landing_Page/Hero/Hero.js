"use client";

import { Search, Home, Building2, Landmark, Hospital } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';


export default function HeroSection() {

    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/search`);
    };

    return (
        <section className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/Trust.png')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-6 md:px-12 max-w-7xl text-white">
                <h1 className="pb-10 text-3xl md:text-5xl font-bold leading-tight">
                    Find a perfect <br /> care home you love..!
                </h1>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <div onClick={handleNavigation} className="flex items-center gap-2 px-4 py-2 w-40 bg-white/20 opacity-90 rounded-lg text-white text-sm">
                        <Home size={40} /> Residential Homes
                    </div>
                    <div onClick={handleNavigation} className="flex items-center gap-2 px-4 py-2 w-40 bg-white/20 opacity-90 rounded-lg text-white text-sm">
                        <Building2 size={40} /> Retirement Homes
                    </div>
                    <div onClick={handleNavigation} className="flex items-center gap-2 px-4 py-2 w-40 bg-white/20 opacity-90 rounded-lg text-white text-sm">
                        <Hospital size={40} /> Specialized Homes
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mt-6 flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-2xl mx-auto">
                    <Search size={20} className="text-gray-500" />
                    <Input
                        type="text"
                        placeholder="Search by Town, Zipcode or Home"
                        className="border-none outline-none flex-1 px-2 text-gray-700"
                    />
                    <Button className="bg-[#3A0CA3] text-white px-6 py-2 rounded-full">
                        Search
                    </Button>
                </div>
            </div>
        </section>
    );
}
