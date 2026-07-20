import {
  FileDown,
  Download,
  Copy,
  Printer,
  Sparkles,
  Share2,
} from "lucide-react";

export default function DocumentationActions() {
  return (
    <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">
      <div className="flex flex-wrap items-center justify-center gap-4">

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:bg-slate-800">
          <FileDown size={18} />
          Export PDF
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:bg-slate-800">
          <Download size={18} />
          Download Markdown
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:bg-slate-800">
          <Copy size={18} />
          Copy
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:bg-slate-800">
          <Printer size={18} />
          Print
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:bg-slate-800">
          <Share2 size={18} />
          Share
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105">
          <Sparkles size={18} />
          Regenerate with AI
        </button>

      </div>
    </div>
  );
}