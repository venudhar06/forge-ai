function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-gray-800 bg-[#0F172A] p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

      <div className="text-4xl mb-5">
        {icon}
      </div>

      <h3 className="text-white text-xl font-bold">
        {title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;