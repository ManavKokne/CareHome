import HeroSection from "@/components/custom/Details_Page/Hero/Details_Hero";
import Services from "@/components/custom/Details_Page/Details_Services/Services";
import EnquiryForm from "@/components/custom/Details_Page/Enquiry/Enquiry";
import Features from "@/components/custom/Details_Page/Features/Features";
import Description from "@/components/custom/Details_Page/Description/Description";
import NearMap from "@/components/custom/Details_Page/NearMap/NearMap";
import RatingsAndReviews from "@/components/custom/Details_Page/RatingsAndReviews/RatingAndReviews";

async function fetchCareHomeDetails(documentId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/care-homes/${documentId}?populate[amenities][populate]=*&populate[address][populate]=*&populate=images`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch care home details");
  }

  return res.json();
}

const Page = async ({ params }) => {
  const { id: documentId } = await params;

  const response = await fetchCareHomeDetails(documentId);
  const careHome = response.data;

  const {
    care_home_name,
    address,
    capacity,
    contact_phone,
    contact_email,
    price,
    features,
    description,
    ratings,
    amenities,
    images,
  } = careHome;
  // console.log(features)
  const fullAddress = `${address.street}, ${address.landmark}, ${address.city}, ${address.state} - ${address.pin_code}`;

   // Construct full image URL like in listing
  const imageUrl = images?.[0]?.url ?? "/fallback.jpg";
  const imageFullUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL.replace(
    "/api",
    ""
  )}${imageUrl}`;

  console.log(imageFullUrl);

  return (
    <div>
      <HeroSection
        title={care_home_name}
        address={`${address.city}, ${address.state}`}
        size={`${capacity} Beds`}
        location={`${address.landmark}`}
        distance="Nearby" // placeholder, if available from data you can update
        priceRange={`₹${price}/month`}
        phone={contact_phone}
        email={contact_email}
        image={imageFullUrl}  // Replace with image if available from Strapi
      />

      <section className="w-full bg-white pt-5 pb-15 flex justify-center">
        <div className="max-w-7xl flex gap-6 w-full">
          <Services data={careHome} />
          <EnquiryForm data={careHome} />
        </div>
      </section>

      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl items-left">
          <Features features={features} />
          <Description description={description} />
          <RatingsAndReviews data={careHome} careHomeId={careHome.documentId} />
        </div>
      </div>

      <NearMap data={careHome} />
    </div>
  );
};

export default Page;



// "use client"

// import Details_Hero from "@/components/custom/Details_Page/Hero/Details_Hero";
// import Services from "@/components/custom/Details_Page/Details_Services/Services";
// import EnquiryForm from "@/components/custom/Details_Page/Enquiry/Enquiry";
// import Features from "@/components/custom/Details_Page/Features/Features";
// import Description from "@/components/custom/Details_Page/Description/Description";
// import NearMap from "@/components/custom/Details_Page/NearMap/NearMap";
// import RatingsAndReviews from "@/components/custom/Details_Page/RatingsAndReviews/RatingAndReviews";


// const page = () => {
//   return (
//     <div>
//       <Details_Hero />
//       <section className="w-full bg-white pt-5 pb-15 flex justify-center">
//         <div className="max-w-7xl flex gap-6 w-full">
//           <Services />
//           <EnquiryForm />
//         </div>
//       </section>
//       <div className="mx-auto max-w-7xl">
//         <div className="max-w-5xl items-left">
//           <Features />
//           <Description />
//           <RatingsAndReviews />
//         </div>
//       </div>
//       <NearMap />
//     </div>
//   )
// }

// export default page
