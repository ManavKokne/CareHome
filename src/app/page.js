"use client";

import About from "@/components/custom/Landing_Page/About/About";
import Featured from "@/components/custom/Landing_Page/Featured/Featured";
import Hero from "@/components/custom/Landing_Page/Hero/Hero";
import Nearby from "@/components/custom/Landing_Page/Nearby/Nearby";
import Blog from "@/components/custom/Landing_Page/Blog/Blog";

const page = () => {
  return (
    <div>
      <Hero/>
      <Featured/>    
      <Nearby/>  
      <About/>
      <Blog/>
    </div>
  )
}

export default page
