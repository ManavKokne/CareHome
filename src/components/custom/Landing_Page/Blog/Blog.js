import { ArrowRight } from "lucide-react";

const blogs = [
  {
    date: "28",
    day: "Tue",
    image: "/assets/Blog1.png",
    title: "Top 10 Home Buying Mistakes to Avoid",
    description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum."
  },
  {
    date: "08",
    day: "Mon",
    image: "/assets/Blog2.png",
    title: "How to Stage Your Home for a Quick Sale",
    description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
  },
  {
    date: "26",
    day: "Wed",
    image: "/assets/Blog3.png",
    title: "5 Tips for First-Time Home Sellers",
    description: "In hac habitasse platea dictumst. Phasellus velit velit vel augue maximus."
  }
];

export default function LatestBlogs() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 text-center max-w-7xl mx-auto">
      <h3 className="text-xs md:text-sm font-semibold text-purple-500 tracking-wide">WHAT’S TRENDING</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">Latest Blogs & Posts</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-2xl rounded-[24px] overflow-hidden flex flex-col">
            <div className="relative w-full h-60 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-md text-xs font-semibold shadow-md text-gray-800 text-center leading-tight">
                <span className="block text-lg font-bold">{blog.date}</span>
                <span className="text-gray-500">{blog.day}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold leading-tight">{blog.title}</h3>
              <p className="text-gray-500 text-sm mt-3 flex-grow">{blog.description}</p>
              <div className="mt-6 flex justify-end">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-purple-500 rounded-full cursor-pointer hover:bg-purple-100 transition-all duration-300">
                  <ArrowRight className="text-purple-500" size={22} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
