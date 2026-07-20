import { BarChart3 } from "lucide-react";

const modules = [
  { name: "Authentication", complexity: 30 },
  { name: "Dashboard", complexity: 75 },
  { name: "Repository", complexity: 55 },
  { name: "AI Chat", complexity: 60 },
  { name: "Documentation", complexity: 35 },
  { name: "Settings", complexity: 40 },
];

export default function ComplexityChart() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <div className="mb-6 flex items-center gap-3">
        <BarChart3 className="text-cyan-400" />
        <h2 className="text-xl font-bold text-white">
          Module Complexity
        </h2>
      </div>

      <div className="space-y-5">

        {modules.map((module) => (
          <div key={module.name}>

            <div className="mb-2 flex justify-between">

              <span className="text-white">
                {module.name}
              </span>

              <span className="text-cyan-400">
                {module.complexity}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">

              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                style={{
                  width: `${module.complexity}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}