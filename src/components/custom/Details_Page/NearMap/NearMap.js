import { Card } from "@/components/ui/card";

const Nearby = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          What's Nearby?
        </h2>
        <Card className="mt-6 h-56 bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 text-lg shadow-sm rounded-lg">
          Map Placeholder
        </Card>
      </div>
    </section>
  );
};

export default Nearby;