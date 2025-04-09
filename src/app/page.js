"use client"
import About from "@/components/custom/Landing_Page/About/About";
import Featured from "@/components/custom/Landing_Page/Featured/Featured";
import Hero from "@/components/custom/Landing_Page/Hero/Hero";
import Nearby from "@/components/custom/Landing_Page/Nearby/Nearby";

const page = () => {
  return (
    <div>
      <Hero/>
      <Featured/>    
      <Nearby/>  
      <About/>
    </div>
  )
}

export default page
