"use client"

import Details_Hero from "@/components/custom/Details_Page/Hero/Details_Hero";
import Services from "@/components/custom/Details_Page/Details_Services/Services";
import EnquiryForm from "@/components/custom/Details_Page/Enquiry/Enquiry";
import Features from "@/components/custom/Details_Page/Features/Features";
import Description from "@/components/custom/Details_Page/Description/Description";
import NearMap from "@/components/custom/Details_Page/NearMap/NearMap";
import RatingsAndReviews from "@/components/custom/Details_Page/RatingsAndReviews/RatingAndReviews";


const page = () => {
  return (
    <div>
      <Details_Hero />
      <section className="w-full bg-white pt-5 pb-15 flex justify-center">
        <div className="max-w-7xl flex gap-6 w-full">
          <Services />
          <EnquiryForm />
        </div>
      </section>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl items-left">
          <Features />
          <Description />
          <RatingsAndReviews />
        </div>
      </div>
      <NearMap />
    </div>
  )
}

export default page
