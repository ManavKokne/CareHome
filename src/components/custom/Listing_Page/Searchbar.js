"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SearchIcon, MapPin, ListFilter } from "lucide-react";
export default function SearchBar() {
  const [mapView, setMapView] = useState(false);

  return (
    <div className="bg-white w-full py-2 flex mb-10">
      {/* Desktop View */}
      <div className="hidden lg:flex gap-5 rounded-full w-full">
        {/* Location Input */}
        <div className="relative flex items-center rounded-full border w-full">
          <SearchIcon className="absolute left-4 w-5 h-5 text-gray-500" />
          <Input
            placeholder="Pune, Maharashtra, India"
            className="border-none rounded-full focus:ring-0 pl-10 pr-20 py-6 w-full"
          />
          <Button size="sm" className="absolute right-2 bg-[#3A0CA3] text-white rounded-full px-3 flex items-center gap-1">
            <MapPin className="w-4 h-4" /> Pune
          </Button>
        </div>
      
        {/* Map View Toggle */}
       <div
  onClick={() => setMapView((prev) => !prev)}
  className="bg-white border rounded-full shadow w-46 px-4 flex items-center gap-1 text-gray-700 cursor-pointer select-none"
>
  <span className="text-gray-700 font-semibold text-sm">Map View</span>
  <Switch checked={mapView} onCheckedChange={setMapView} />
</div>


        {/* Search Button */}
        <Button className="bg-[#3A0CA3] text-white rounded-full px-6 py-6">Search</Button>
      </div>

      {/* Tablet View (md breakpoint) */}
      <div className="hidden sm:flex lg:hidden items-center gap-3 w-full justify-between px-4">
        {/* Location Input */}
        <div className="relative flex items-center bg-white rounded-full border w-1/2">
          <SearchIcon className="absolute left-4 w-5 h-5 text-gray-500" />
          <Input
            placeholder="Pune, Maharashtra, India"
            className="border-none rounded-full focus:ring-0 pl-10 pr-20 py-6 w-full "
          />
        </div>

        {/* Map View Toggle */}
            
       <div
  onClick={() => setMapView((prev) => !prev)}
  className="bg-white border rounded-full shadow w-46 px-4 flex items-center gap-1 text-gray-700 cursor-pointer select-none"
>
  <span className="text-gray-700 font-semibold text-sm">Map View</span>
  <Switch checked={mapView} onCheckedChange={setMapView} />
</div>


        {/* Search Button */}
        <Button className="bg-[#3A0CA3] text-white rounded-full px-6 py-6 hover:bg-gray-800">
          Search
        </Button>
      </div>
      {/* Mobile View (sm breakpoint remains unchanged) */}
      <div className="sm:hidden w-full bg-muted rounded-xl flex items-center gap-2">
        <div className="relative w-full">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Search"
            className="bg-transparent border-none focus:ring-0 text-sm text-muted-foreground rounded-xl pl-10 pr-10"
          />
          <ListFilter
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}
