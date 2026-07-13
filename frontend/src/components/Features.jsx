import FeatureCard from "./FeatureCard";

function Features() {

  const features = [
    {
      icon: "📂",
      title: "Repository Upload",
      description:
        "Upload GitHub repositories or ZIP files for intelligent AI analysis."
    },
    {
      icon: "🤖",
      title: "AI Code Review",
      description:
        "Automatically detect bugs, code smells, and suggest improvements."
    },
    {
      icon: "🧠",
      title: "Architecture Analysis",
      description:
        "Understand project structure, modules, and dependencies instantly."
    },
    {
      icon: "📄",
      title: "Documentation",
      description:
        "Generate professional documentation and README files using AI."
    },
    {
      icon: "💬",
      title: "AI Chat",
      description:
        "Ask questions about any repository and receive intelligent answers."
    },
    {
      icon: "⚡",
      title: "REST API Backend",
      description:
        "FastAPI-powered backend with scalable REST APIs and authentication."
    }
  ];

  return (
    <section
  id="features"
  className="bg-[#030712] py-24 px-6"
>

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center text-white">
          Powerful Features
        </h2>

        <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto">
          Everything required to understand, analyze and improve software
          repositories using AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;