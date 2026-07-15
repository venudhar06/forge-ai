import {
  Upload,
  Bot,
  FileText,
  Network,
  Bug,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

function QuickActions() {
  const actions = [
    {
      title: "Connect GitHub",
      icon: <FaGithub size={28} />,
      description: "Import repositories",
    },
    {
      title: "Upload ZIP",
      icon: <Upload size={28} />,
      description: "Upload local project",
    },
    {
      title: "AI Chat",
      icon: <Bot size={28} />,
      description: "Ask questions",
    },
    {
      title: "Generate Docs",
      icon: <FileText size={28} />,
      description: "Create documentation",
    },
    {
      title: "Architecture",
      icon: <Network size={28} />,
      description: "Visualize system",
    },
    {
      title: "Bug Detection",
      icon: <Bug size={28} />,
      description: "Find issues",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-gray-800 bg-[#111827] p-8">

      <h2 className="text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <p className="mt-2 text-gray-400">
        Start working with your repositories using AI-powered tools.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {actions.map((action) => (

          <button
            key={action.title}
            className="rounded-2xl border border-gray-700 bg-[#0F172A] p-6 text-left transition-all hover:border-blue-500 hover:bg-[#172033]"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">

              {action.icon}

            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">

              {action.title}

            </h3>

            <p className="mt-2 text-gray-400">

              {action.description}

            </p>

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;