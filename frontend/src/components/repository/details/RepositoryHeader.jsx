import { ArrowLeft, Star, GitFork, FolderOpen, Bot } from "lucide-react";
import { Link } from "react-router-dom";

function RepositoryHeader() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          <h1 className="mt-5 text-4xl font-black text-white">
            Forge AI
          </h1>

          <p className="mt-2 text-gray-400">
            venudhar / Forge-AI
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-xl bg-[#0F172A] px-4 py-2">
              <Star size={18} className="text-yellow-400" />
              <span className="text-white">245 Stars</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-[#0F172A] px-4 py-2">
              <GitFork size={18} className="text-cyan-400" />
              <span className="text-white">42 Forks</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-[#0F172A] px-4 py-2">
              <FolderOpen size={18} className="text-green-400" />
              <span className="text-white">186 Files</span>
            </div>

            <div className="rounded-xl bg-green-500/10 px-4 py-2 text-green-400 font-semibold">
              Analysis Complete
            </div>

          </div>

        </div>

        <div>

          <Link
            to="/ai-chat"
            className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-500 transition"
          >
            <Bot size={22} />
            Open AI Chat
          </Link>

        </div>

      </div>

    </div>
  );
}

export default RepositoryHeader;