import {
  FileText,
  Download,
  Copy,
  RefreshCw,
  Search,
  Sparkles,
} from "lucide-react";

export default function DocumentationHeader() {
  return (
    <header className="rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
            <FileText size={30} className="text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              AI Documentation
            </h1>

            <p className="text-sm text-slate-400">
              Automatically generated project documentation
            </p>

            <p className="mt-2 text-sm text-cyan-400">
              Forge AI Repository
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 focus-within:border-cyan-500">
            <Search size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search documentation..."
              className="w-64 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>

          {/* AI Generate */}
          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105">
            <Sparkles size={18} />
            Regenerate
          </button>

          {/* Download */}
          <button className="rounded-xl border border-slate-700 p-3 hover:border-cyan-500 hover:bg-slate-800">
            <Download size={18} className="text-white" />
          </button>

          {/* Copy */}
          <button className="rounded-xl border border-slate-700 p-3 hover:border-cyan-500 hover:bg-slate-800">
            <Copy size={18} className="text-white" />
          </button>

          {/* Refresh */}
          <button className="rounded-xl border border-slate-700 p-3 hover:border-cyan-500 hover:bg-slate-800">
            <RefreshCw size={18} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}