"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Home } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/`);
  };

  return (
    <nav className="w-full border-b bg-white shadow-sm sticky top-0 z-50 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between py-4 max-w-7xl ">
        {/* Logo */}
        <div className="flex items-center gap-2" onClick={handleNavigation}>
          <div className="bg-[#3A0CA3] p-2 rounded-full">
            <Home className="text-white" size={20} />
          </div>
          <span className="text-lg font-semibold">Company</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 items-center">
          <button className="px-3 py-1 rounded-lg bg-indigo-200 text-indigo-800 font-medium">Home</button>
          <Button variant="link" className="hover:underline hover:underline-offset-4 hover:decoration-2">Services</Button>
          <Button variant="link" className="hover:underline hover:underline-offset-4 hover:decoration-2">Listings</Button>
          <Button variant="link" className="hover:underline hover:underline-offset-4 hover:decoration-2">About Us</Button>
          <Button variant="link" className="hover:underline hover:underline-offset-4 hover:decoration-2">Blogs</Button>
          <Button className="bg-[#3A0CA3] text-white rounded-full px-4 py-2">Sign in</Button>
        </div>

        {/* Mobile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="lg:hidden">
              <Menu size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 sm:w-80 md:w-96 p-6 bg-white shadow-lg rounded-lg mt-4">
            <DropdownMenuItem>
              <button className="px-3 py-1 rounded-lg bg-indigo-200 text-indigo-800 font-medium">Home</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="link" className="hover:underline hover:underline-offset-4 hover:decoration-2">Services</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="link" className="hover:underline hover:underline-offset-4 hover:decoration-2">Listings</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="link" className="hover:underline hover:underline-offset-4 hover:decoration-2">About Us</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="link" className="hover:underline hover:underline-offset-4 hover:decoration-2">Blogs</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button className="bg-[#3A0CA3] text-white rounded-full px-4 py-2">Sign in</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
