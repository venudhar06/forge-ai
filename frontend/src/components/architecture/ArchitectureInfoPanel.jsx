import {
  Brain,
  Shield,
  Boxes,
  Layers3,
  Activity,
  Cpu,
} from "lucide-react";

export default function ArchitectureInfoPanel() {
  return (
    <aside className="w-80 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        AI Insights
      </h2>

      {/* Repository Health */}
      <div className="rounded-xl bg-slate-800 p-5">
        <div className="flex items-center gap-3">
          <Activity className="text-green-400" size={22} />
          <h3 className="font-semibold text-white">
            Repository Health
          </h3>
        </div>

        <p className="mt-4 text-4xl font-bold text-cyan-400">
          94%
        </p>

        <p className="mt-2 text-sm text-slate-400">
          Overall project quality score.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mt-6 rounded-xl bg-slate-800 p-5">
        <div className="flex items-center gap-3">
          <Layers3 className="text-cyan-400" size={22} />
          <h3 className="font-semibold text-white">
            Technology Stack
          </h3>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "React",
            "FastAPI",
            "Tailwind",
            "JWT",
            "PostgreSQL",
            "OpenAI",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* AI Summary */}
      <div className="mt-6 rounded-xl bg-slate-800 p-5">
        <div className="flex items-center gap-3">
          <Brain className="text-purple-400" size={22} />
          <h3 className="font-semibold text-white">
            AI Summary
          </h3>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          Forge AI follows a modular architecture with a clear
          separation between frontend, backend, AI services,
          authentication, and repository analysis modules.
        </p>
      </div>

      {/* Security */}
      <div className="mt-6 rounded-xl bg-slate-800 p-5">
        <div className="flex items-center gap-3">
          <Shield className="text-green-400" size={22} />
          <h3 className="font-semibold text-white">
            Security Status
          </h3>
        </div>

        <p className="mt-4 text-sm text-slate-300">
          ✔ No critical vulnerabilities detected.
        </p>
      </div>

      {/* Components */}
      <div className="mt-6 rounded-xl bg-slate-800 p-5">
        <div className="flex items-center gap-3">
          <Boxes className="text-orange-400" size={22} />
          <h3 className="font-semibold text-white">
            Components
          </h3>
        </div>

        <div className="mt-4 space-y-2 text-sm text-slate-300">
          <div className="flex justify-between">
            <span>Pages</span>
            <span>12</span>
          </div>

          <div className="flex justify-between">
            <span>Components</span>
            <span>48</span>
          </div>

          <div className="flex justify-between">
            <span>Services</span>
            <span>9</span>
          </div>

          <div className="flex justify-between">
            <span>APIs</span>
            <span>17</span>
          </div>
        </div>
      </div>

      {/* AI Engine */}
      <div className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5">
        <div className="flex items-center gap-3">
          <Cpu className="text-white" size={22} />
          <h3 className="font-semibold text-white">
            AI Engine
          </h3>
        </div>

        <p className="mt-3 text-sm text-white/90">
          Repository graph successfully generated and analyzed.
        </p>
      </div>
    </aside>
  );
}