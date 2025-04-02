import { Card, CardContent } from "@/components/ui/card";

const properties = [
  { id: 1, city: "New York City, NY", count: 216, image: "/assets/Rectangle1.png" },
  { id: 2, city: "Houston, TX", count: 141, image: "/assets/Rectangle2.png" },
  { id: 3, city: "San Diego, CA", count: 212, image: "/assets/Rectangle3.png" },
  { id: 4, city: "Philadelphia, PA", count: 183, image: "/assets/Rectangle4.png" },
  { id: 5, city: "San Francisco, CA", count: 11, image: "/assets/Rectangle5.png" },
];

export default function Nearby() {
  return (
    <section className="px-6 py-10 lg:px-20 max-w-7xl mx-auto">
      <h3 className="text-xl tracking-wide text-[#3A0CA3] font-medium uppercase">
        Areas Across The Town
      </h3>
      <h2 className="text-3xl font-bold text-gray-800 mt-1 mb-6">
        Neighborhood Properties
      </h2>
      <div className="mt-20 grid grid-cols-6 gap-6 auto-rows-[240px] md:auto-rows-[280px]">
        {properties.map((property, index) => (
          <Card
            key={property.id}
            className={`relative w-full h-full rounded-xl overflow-hidden shadow-md p-0 ${
              index === 0 ? "col-span-3 row-span-1" :
              index === 1 ? "col-span-1 row-span-1" :
              index === 2 ? "col-span-2 row-span-1" :
              index === 3 ? "col-span-2 row-span-1" :
              "col-span-4 row-span-1"
            }`}
          >
            <img
              src={property.image}
              alt={property.city}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <CardContent className="absolute bottom-4 left-4 text-white p-0 m-0">
              <p className="text-4xl font-bold leading-none m-0">{property.count}</p>
              <p className="text-sm font-medium leading-tight m-0">{property.city}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
