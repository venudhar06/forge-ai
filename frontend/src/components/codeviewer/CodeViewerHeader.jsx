import {
  GitBranch,
  Search,
  Download,
  Sparkles,
  Clock,
} from "lucide-react";

import { FaGithub, FaShareAlt } from "react-icons/fa";

export default function CodeViewerHeader() {
  return (
    <header className="flex flex-col gap-6 rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-xl lg:flex-row lg:items-center lg:justify-between">
      {/* Left Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
            <FaGithub className="text-white" size={26} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              Forge AI Repository
            </h1>

            <p className="text-sm text-slate-400">
              AI-Powered Software Engineering Workspace
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <GitBranch size={16} />
            <span>main</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Updated 5 minutes ago</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search files..."
            className="w-48 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        {/* Analyze */}
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition duration-200 hover:scale-105">
          <Sparkles size={18} />
          Analyze
        </button>

        {/* Download */}
        <button className="rounded-xl border border-slate-700 p-3 transition duration-200 hover:border-cyan-500 hover:bg-slate-800">
          <Download className="text-white" size={20} />
        </button>

        {/* Share */}
        <button className="rounded-xl border border-slate-700 p-3 transition duration-200 hover:border-cyan-500 hover:bg-slate-800">
          <FaShareAlt className="text-white" size={18} />
        </button>
      </div>
    </header>
  );
}