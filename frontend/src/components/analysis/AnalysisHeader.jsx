import {
  BarChart3,
  Search,
  RefreshCw,
  Download,
  Share2,
} from "lucide-react";

export default function AnalysisHeader() {
  return (
    <header className="rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
            <BarChart3 size={30} className="text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              Repository Analysis
            </h1>

            <p className="text-slate-400">
              AI-powered insights for your repository
            </p>

            <p className="mt-2 text-cyan-400 text-sm">
              Forge AI • Last analyzed 2 minutes ago
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">

          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3">
            <Search size={18} className="text-slate-400" />

            <input
              placeholder="Search files..."
              className="w-64 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>

          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white hover:scale-105 transition">
            Analyze Again
          </button>

          <button className="rounded-xl border border-slate-700 p-3 hover:bg-slate-800">
            <RefreshCw size={18} className="text-white" />
          </button>

          <button className="rounded-xl border border-slate-700 p-3 hover:bg-slate-800">
            <Download size={18} className="text-white" />
          </button>

          <button className="rounded-xl border border-slate-700 p-3 hover:bg-slate-800">
            <Share2 size={18} className="text-white" />
          </button>

        </div>

      </div>
    </header>
  );
}