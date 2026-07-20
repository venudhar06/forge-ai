import {
  Package,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const dependencies = [
  {
    name: "React",
    version: "19.1.0",
    status: "Up to date",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    name: "Tailwind CSS",
    version: "4.1.0",
    status: "Up to date",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    name: "FastAPI",
    version: "0.116",
    status: "Needs Update",
    icon: AlertTriangle,
    color: "text-yellow-400",
  },
  {
    name: "PostgreSQL",
    version: "17",
    status: "Stable",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    name: "OpenAI SDK",
    version: "Latest",
    status: "Stable",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    name: "Legacy Package",
    version: "2.1",
    status: "Deprecated",
    icon: XCircle,
    color: "text-red-400",
  },
];

export default function DependencyAnalysis() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold text-white">
          Dependency Analysis
        </h2>

        <Package className="text-cyan-400" />

      </div>

      <div className="space-y-4">

        {dependencies.map((dependency) => {
          const Icon = dependency.icon;

          return (
            <div
              key={dependency.name}
              className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-cyan-500"
            >
              <div>

                <h3 className="font-semibold text-white">
                  {dependency.name}
                </h3>

                <p className="text-sm text-slate-400">
                  Version {dependency.version}
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Icon
                  className={dependency.color}
                  size={20}
                />

                <span
                  className={`text-sm ${dependency.color}`}
                >
                  {dependency.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}