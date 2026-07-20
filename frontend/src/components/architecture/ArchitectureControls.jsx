import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize,
  Move,
} from "lucide-react";

export default function ArchitectureControls() {
  return (
    <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">
      <div className="flex flex-wrap items-center justify-center gap-4">

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 hover:border-cyan-500 hover:bg-slate-800">
          <ZoomIn size={18} />
          Zoom In
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 hover:border-cyan-500 hover:bg-slate-800">
          <ZoomOut size={18} />
          Zoom Out
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 hover:border-cyan-500 hover:bg-slate-800">
          <RotateCcw size={18} />
          Reset View
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 hover:border-cyan-500 hover:bg-slate-800">
          <Move size={18} />
          Fit Screen
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white hover:scale-105">
          <Maximize size={18} />
          Full Screen
        </button>

      </div>
    </div>
  );
}