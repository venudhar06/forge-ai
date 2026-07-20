import {
  FileCode2,
  Code2,
  FunctionSquare,
  Boxes,
  Activity,
  Clock3,
} from "lucide-react";

const metrics = [
  {
    title: "Files",
    value: "128",
    icon: FileCode2,
    color: "text-cyan-400",
  },
  {
    title: "Lines of Code",
    value: "14,320",
    icon: Code2,
    color: "text-green-400",
  },
  {
    title: "Functions",
    value: "312",
    icon: FunctionSquare,
    color: "text-purple-400",
  },
  {
    title: "Classes",
    value: "58",
    icon: Boxes,
    color: "text-orange-400",
  },
  {
    title: "Avg Complexity",
    value: "2.8",
    icon: Activity,
    color: "text-pink-400",
  },
  {
    title: "Technical Debt",
    value: "3h 25m",
    icon: Clock3,
    color: "text-yellow-400",
  },
];

export default function MetricsGrid() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Code Quality Metrics
        </h2>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
          Live Analysis
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition hover:border-cyan-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-400">
                    {metric.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {metric.value}
                  </h3>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 ${metric.color}`}
                >
                  <Icon size={28} />
                </div>

              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}