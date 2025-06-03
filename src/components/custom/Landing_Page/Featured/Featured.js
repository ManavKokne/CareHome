"use client";

import { useEffect, useState } from "react";
import CareHomeCard from "./Featured Components/CareHomeCard";
import { useRouter } from "next/navigation";

const Featured = () => {
  const [careHomes, setCareHomes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCareHomes = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/care-homes?populate[amenities][populate]=*&populate[address][populate]=*&populate=images`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
            cache: "no-store",
          }
        );
        if (!res.ok) throw new Error("Failed to fetch care homes");
        const data = await res.json();
        setCareHomes(data.data || []);
      } catch (err) {
        console.error("Error fetching care homes:", err);
      }
    };

    fetchCareHomes();
  }, []);

  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:text-left md:text-center">
          <h2 className="text-xl font-medium text-[#3A0CA3]">
            Our Featured Care Homes
          </h2>
          <p className="text-3xl font-bold text-gray-800 mt-2">
            Discover Reliable Care and Comfort Nearby.
          </p>
        </div>

        {/* Light Purple Background (Full Width) */}
        <div className="absolute left-0 right-0 top-102 h-[50%] bg-purple-50 -z-10 w-full mx-0" />

        {/* Cards Container - Centered */}
        <div className="relative flex flex-wrap justify-center gap-10 mt-20">
          {careHomes.length === 0 && (
            <p className="text-center w-full text-gray-500">Loading care homes...</p>
          )}

          {careHomes.slice(0, 3).map((home) => {
            const title = home.care_home_name;
            const addressObj = home.address;
            const address = `${addressObj?.street ?? ""}, ${addressObj?.city ?? ""}`;

            // Safely extract image URL for both nested and flat formats
            const imageUrl =
              home.images?.data?.[0]?.attributes?.url ??
              home.images?.[0]?.url ??
              "/fallback.jpg";

            const fullImageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL.replace(
              "/api",
              ""
            )}${imageUrl}`;

            return (
              <div
                key={home.id}
                className="transform transition-transform duration-300 cursor-pointer"
                onClick={() => router.push(`/carehome/${home.documentId}`)}
              >
                <CareHomeCard
                  title={title}
                  address={address}
                  image={fullImageUrl}
                  tag={"Popular"}
                  ratings={home.ratings ?? 0}
                  amenities={home.amenities || []}
                  description={home.description || "No description available."}
                  documentId={home.documentId}
                />
              </div>
            );
          })}
        </div>

        <p
          className="mt-20 text-[#3A0CA3] font-semibold cursor-pointer text-center lg:text-left hover:underline transaition-all duration-300"
          onClick={() => router.push("/search")}
        >
          View all Care Homes ➜
        </p>
      </div>
    </section>
  );
};

export default Featured;


// import CareHomeCard from "./Featured Components/CareHomeCard";

// const Featured = () => {
//     return (
//         <section className="relative py-10 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center lg:text-left md:text-center">
//                     <h2 className="text-xl font-medium text-[#3A0CA3]">Our Featured Care Homes</h2>
//                     <p className="text-3xl font-bold text-gray-800 mt-2">
//                         Discover Reliable Care and Comfort Nearby.
//                     </p>
//                 </div>

//                 {/* Light Purple Background (Full Width) */}
//                 <div className="absolute left-0 right-0 top-102 h-[50%] bg-purple-50 -z-10 w-full mx-0" />

//                 {/* Cards Container - Centered */}
//                 <div className="relative flex justify-center gap-5 mt-20">
//                     <CareHomeCard
//                         title="Golden Years Retreat"
//                         address="103 Wright Court, Burien, WA 98168"
//                         image="/assets/carehome1.png"
//                         tag="Affordable"
//                         rating="4.5"
//                     />
//                     <CareHomeCard
//                         title="Sunset Haven"
//                         address="402 Main St, Bellevue, WA 98004"
//                         image="/assets/carehome2.png"
//                         tag="Popular"
//                         rating="4.8"
//                     />
//                     <CareHomeCard
//                         title="Cozy Living Care"
//                         address="225 Oak Avenue, Seattle, WA 98101"
//                         image="/assets/carehome3.png"
//                         tag="New Listing"
//                         rating="4.6"
//                     />
//                         <CareHomeCard
//                         title="Cozy Living Care"
//                         address="225 Oak Avenue, Seattle, WA 98101"
//                         image="/assets/carehome3.png"
//                         tag="New Listing"
//                         rating="4.6"
//                     />
//                 </div>

//                 <p className="mt-20 text-[#3A0CA3] font-semibold cursor-pointer text-center lg:text-left">
//                     View all Care Homes ➜
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default Featured;
