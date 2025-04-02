import { Mail, Instagram, Dribbble, Twitter, Youtube ,Landmark} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#15002b] text-white py-8 px-6">
      <div className="container mx-auto max-w-7xl grid gap-6 md:grid-cols-3 text-center md:text-left">
        {/* Left Section */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex justify-center items-center gap-2"><Landmark className="w-12 h-12 text-white" /><span className="text-2xl">Company</span></div>
      
          <p className="text-sm">Copyright © 2025. <br /> All rights reserved</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 hover:text-white rounded-full">
              <Instagram className="w-8 h-8 sm:w-10 sm:h-10" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 hover:text-white rounded-full">
              <Dribbble className="w-8 h-8 sm:w-10 sm:h-10" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 hover:text-white rounded-full">
              <Twitter className="w-8 h-8 sm:w-10 sm:h-10" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 hover:text-white rounded-full">
              <Youtube className="w-8 h-8 sm:w-10 sm:h-10" />
            </Button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center md:text-left sm:text-center">
          <div>
            <h4 className="font-semibold text-xl">Company</h4>
            <ul className="text-sm mt-1">
              <li><Button variant="link" className="text-white">About us</Button></li>
              <li><Button variant="link" className="text-white">Blog</Button></li>
              <li><Button variant="link" className="text-white">Contact us</Button></li>
              <li><Button variant="link" className="text-white">Pricing</Button></li>
              <li><Button variant="link" className="text-white">Testimonials</Button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xl">Support</h4>
            <ul className="text-sm mt-1">
              <li><Button variant="link" className="text-white">Help center</Button></li>
              <li><Button variant="link" className="text-white">Terms of service</Button></li>
              <li><Button variant="link" className="text-white">Legal</Button></li>
              <li><Button variant="link" className="text-white">Privacy policy</Button></li>
              <li><Button variant="link" className="text-white">Status</Button></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-xl">Stay up to date</h4>
          <div className="flex w-full max-w-md items-center bg-white/10 rounded-lg mt-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-0 text-sm placeholder-white flex-grow focus:outline-none"
            />
            <Button variant="ghost" size="icon">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}