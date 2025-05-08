
import CareHomeCard from "./Featured Components/CareHomeCard";

const Featured = () => {
    return (
        <section className="relative py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center lg:text-left md:text-center">
                    <h2 className="text-xl font-medium text-[#3A0CA3]">Our Featured Care Homes</h2>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                        Discover Reliable Care and Comfort Nearby.
                    </p>
                </div>

                {/* Light Purple Background (Full Width) */}
                <div className="absolute left-0 right-0 top-102 h-[50%] bg-purple-50 -z-10 w-full mx-0" />

                {/* Cards Container - Centered */}
                <div className="relative flex justify-center gap-5 mt-20">
                    <CareHomeCard
                        title="Golden Years Retreat"
                        address="103 Wright Court, Burien, WA 98168"
                        image="/assets/carehome1.png"
                        tag="Affordable"
                        rating="4.5"
                    />
                    <CareHomeCard
                        title="Sunset Haven"
                        address="402 Main St, Bellevue, WA 98004"
                        image="/assets/carehome2.png"
                        tag="Popular"
                        rating="4.8"
                    />
                    <CareHomeCard
                        title="Cozy Living Care"
                        address="225 Oak Avenue, Seattle, WA 98101"
                        image="/assets/carehome3.png"
                        tag="New Listing"
                        rating="4.6"
                    />
                        <CareHomeCard
                        title="Cozy Living Care"
                        address="225 Oak Avenue, Seattle, WA 98101"
                        image="/assets/carehome3.png"
                        tag="New Listing"
                        rating="4.6"
                    />
                </div>

                <p className="mt-20 text-[#3A0CA3] font-semibold cursor-pointer text-center lg:text-left">
                    View all Care Homes ➜
                </p>
            </div>
        </section>
    );
};

export default Featured;
