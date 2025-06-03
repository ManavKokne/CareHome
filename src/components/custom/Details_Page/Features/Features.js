const Features = ({ features }) => {
  // console.log("Features component rendered with features:", features);
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Features
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {features}
        </p>
      </div>
    </section>
  );
};

export default Features;
