import { Upload, BrainCircuit, MessageSquareText, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Upload size={36} />,
    title: "Upload Repository",
    description:
      "Upload a GitHub repository or ZIP file for AI-powered analysis.",
  },
  {
    icon: <BrainCircuit size={36} />,
    title: "AI Understands Code",
    description:
      "Forge AI analyzes your project structure, files, and dependencies.",
  },
  {
    icon: <MessageSquareText size={36} />,
    title: "Ask Questions",
    description:
      "Interact with your repository using natural language.",
  },
  {
    icon: <FileText size={36} />,
    title: "Generate Documentation",
    description:
      "Automatically create documentation, READMEs, and summaries.",
  },
  {
    icon: <Rocket size={36} />,
    title: "Improve Your Project",
    description:
      "Use AI insights to review, optimize, and maintain your codebase.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#030712] py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-white text-center">
          How Forge AI Works
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-3xl mx-auto">
          Analyze any repository in minutes with an AI-assisted workflow.
        </p>

        <div className="mt-20 grid md:grid-cols-5 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center rounded-2xl border border-gray-800 bg-[#111827] p-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-blue-500 flex justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-white text-xl font-bold">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {step.description}
              </p>

              <div className="mt-6 text-blue-400 font-bold text-2xl">
                {index + 1}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;