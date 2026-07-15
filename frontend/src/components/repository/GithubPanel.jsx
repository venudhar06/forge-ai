import { FaGithub } from "react-icons/fa";

function GitHubPanel() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-10">

      <div className="flex flex-col items-center text-center">

        <FaGithub size={60} className="text-white" />

        <h2 className="mt-6 text-3xl font-bold text-white">
          Connect GitHub
        </h2>

        <p className="mt-3 max-w-xl text-gray-400">
          Connect your GitHub account to browse and analyze your repositories
          directly from Forge AI.
        </p>

        <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-500 transition">
          Connect GitHub
        </button>

      </div>

    </div>
  );
}

export default GitHubPanel;