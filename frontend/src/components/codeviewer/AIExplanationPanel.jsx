import {
  Sparkles,
  Lightbulb,
  Shield,
  Bug,
  ArrowRight,
} from "lucide-react";

export default function AIExplanationPanel() {
  return (
    <aside className="flex w-96 flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
      {/* Header */}
      <div className="border-b border-slate-700 p-5">
        <div className="flex items-center gap-3">
          <Sparkles className="text-cyan-400" size={22} />

          <div>
            <h2 className="font-semibold text-white">
              AI Analysis
            </h2>

            <p className="text-sm text-slate-400">
              Repository Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6 overflow-y-auto p-5">
        {/* Summary */}
        <div className="rounded-xl bg-slate-800 p-4">
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-cyan-400">
            <Lightbulb size={18} />
            Summary
          </h3>

          <p className="text-sm leading-6 text-slate-300">
            This React component creates a reusable button using
            Tailwind CSS. It accepts children as props and promotes
            component reusability across the application.
          </p>
        </div>

        {/* Security */}
        <div className="rounded-xl bg-slate-800 p-4">
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-green-400">
            <Shield size={18} />
            Security
          </h3>

          <p className="text-sm text-slate-300">
            No security issues detected.
          </p>
        </div>

        {/* Suggestions */}
        <div className="rounded-xl bg-slate-800 p-4">
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-yellow-400">
            <Bug size={18} />
            Suggestions
          </h3>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Add prop validation.</li>
            <li>• Improve accessibility.</li>
            <li>• Add loading state support.</li>
          </ul>
        </div>

        {/* CTA */}
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 font-semibold text-white transition hover:scale-105">
          Generate Documentation
          <ArrowRight size={18} />
        </button>
      </div>
    </aside>
  );
}