const properties = [
  { id: 1, city: "New York City, NY", count: 216, image: "/assets/Rectangle1.png" },
  { id: 2, city: "Houston, TX", count: 141, image: "/assets/Rectangle2.png" },
  { id: 3, city: "San Diego, CA", count: 212, image: "/assets/Rectangle3.png" },
  { id: 4, city: "Philadelphia, PA", count: 183, image: "/assets/Rectangle4.png" },
  { id: 5, city: "San Francisco, CA", count: 11, image: "/assets/Rectangle5.png" },
];

export default function Nearby() {
  return (
    <section className="py-12 max-w-7xl mx-auto">
    <div>
    <h3 className="text-lg tracking-wide text-indigo-700 font-medium uppercase mt-10">
        Popular Areas
      </h3>
      <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">
        Explore Neighborhoods
      </h2>
    </div>
    

      <div className="w-[1000px] flex flex-col gap-2 justify-center items-center w-full mt-10">
        <div className="flex gap-2">
          <div className="relative bg-[url('/assets/Rect1.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-[240px] w-[270px]"></div>
          <div className="relative bg-[url('/assets/Rect2.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-[240px] w-[270px]"></div>
          <div className="relative bg-[url('/assets/Rect3.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-[240px] w-[460px]"></div>
          {/* <div className="w-[270px] h-[240px] bg-gray-200 rounded-2xl">NY</div>
          <div className="w-[270px] h-[240px] bg-gray-200 rounded-2xl">Houston</div>
          <div className="w-[460px] h-[240px] bg-gray-200 rounded-2xl">San Diego</div> */}
        </div>
        <div className="flex gap-2">
          <div className="relative bg-[url('/assets/Rect4.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-[240px] w-[370px]"></div>
          <div className="relative bg-[url('/assets/Rect5.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-[240px] w-[630px]"></div>
          {/* <div className="w-[370px] h-[240px] bg-gray-300 rounded-2xl">Philadelphia</div>
          <div className="w-[630px]  h-[240px] bg-gray-300 rounded-2xl">San Francisco</div> */}
        </div>
      </div>
    </section>
  );
}


// const properties = [
//   { id: 1, city: "New York City, NY", count: 216, image: "/assets/Rectangle1.png" },
//   { id: 2, city: "Houston, TX", count: 141, image: "/assets/houston.jpg" },
//   { id: 3, city: "San Diego, CA", count: 212, image: "/assets/sandiego.jpg" },
//   { id: 4, city: "Philadelphia, PA", count: 183, image: "/assets/philly.jpg" },
//   { id: 5, city: "San Francisco, CA", count: 11, image: "/assets/sf.jpg" },
// ];

// export default function Nearby() {
//   return (
//     <section className="px-6 py-12 lg:px-20 max-w-7xl mx-auto">
//       <h3 className="text-lg tracking-wide text-indigo-700 font-medium uppercase">
//         Popular Areas
//       </h3>
//       <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">
//         Explore Neighborhoods
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {properties.map((property) => (
//           <Card key={property.id} className="relative h-64 rounded-xl overflow-hidden shadow-md">
//             <img
//               src={property.image}
//               alt={property.city}
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40"></div>
//             <CardContent className="absolute bottom-4 left-4 text-white">
//               <p className="text-4xl font-extrabold">{property.count}</p>
//               <p className="text-sm font-medium">{property.city}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/ui/card';