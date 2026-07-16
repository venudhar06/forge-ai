import {
  GitBranch,
  Bug,
  FileText,
  ShieldCheck,
  Cpu,
  Code2,
} from "lucide-react";

function SuggestedQuestions() {
  const questions = [
    {
      icon: <GitBranch size={18} />,
      text: "Explain Architecture",
    },
    {
      icon: <Bug size={18} />,
      text: "Find Bugs",
    },
    {
      icon: <FileText size={18} />,
      text: "Generate Documentation",
    },
    {
      icon: <ShieldCheck size={18} />,
      text: "Review Security",
    },
    {
      icon: <Cpu size={18} />,
      text: "Improve Performance",
    },
    {
      icon: <Code2 size={18} />,
      text: "Generate Unit Tests",
    },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-gray-800 bg-[#111827] p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            Suggested Questions
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Start with one of these AI-powered prompts.
          </p>

        </div>

        <button className="text-sm text-blue-400 hover:text-blue-300 transition">
          Clear
        </button>

      </div>

      <div className="mt-6 flex flex-wrap gap-4">

        {questions.map((question) => (

          <button
            key={question.text}
            className="flex items-center gap-3 rounded-xl border border-gray-700 bg-[#0F172A] px-5 py-3 text-gray-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:scale-105"
          >

            {question.icon}

            {question.text}

          </button>

        ))}

      </div>

    </div>
  );
}

export default SuggestedQuestions;