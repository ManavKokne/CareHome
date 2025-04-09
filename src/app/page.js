"use client"
import Featured from "@/components/custom/Featured/Featured";
import Hero from "@/components/custom/Hero/Hero";
import Nearby from "@/components/custom/Nearby/Nearby";
import Blog from "@/components/custom/Blog/Blog";

const page = () => {
  return (
    <div>
      <Hero/>
      <Featured/>    
      <Nearby/>  
      <Blog/>
    </div>
  )
}

export default page
