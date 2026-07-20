import {
  Brain,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const recommendations = [
  {
    title: "Reduce Duplicate Utilities",
    description:
      "Several helper functions appear multiple times across the project. Consolidating them into a shared utility module can reduce maintenance effort by approximately 12%.",
    impact: "High",
  },
  {
    title: "Move Authentication to Middleware",
    description:
      "Authentication logic is repeated across multiple routes. Centralizing it in middleware improves maintainability and security.",
    impact: "High",
  },
  {
    title: "Optimize API Requests",
    description:
      "Multiple sequential API calls can be combined to reduce latency and improve dashboard responsiveness.",
    impact: "Medium",
  },
  {
    title: "Split Large Components",
    description:
      "Dashboard.jsx exceeds the recommended size. Splitting it into reusable components improves readability and testing.",
    impact: "Medium",
  },
];

export default function AIRecommendations() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <div className="mb-6 flex items-center gap-3">
        <Brain className="text-cyan-400" />
        <h2 className="text-xl font-bold text-white">
          AI Recommendations
        </h2>
      </div>

      <div className="space-y-5">

        {recommendations.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition hover:border-cyan-500"
          >
            <div className="flex items-start justify-between">

              <div className="flex gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3">
                  <Lightbulb
                    className="text-cyan-400"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                {item.impact}
              </span>

            </div>

            <button className="mt-5 flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
              View Suggestion
              <ArrowRight size={16} />
            </button>

          </div>
        ))}

      </div>

      <div className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5">

        <div className="flex items-center gap-3">
          <Sparkles className="text-white" />
          <h3 className="font-semibold text-white">
            AI Summary
          </h3>
        </div>

        <p className="mt-3 text-sm leading-7 text-white/90">
          Overall architecture is modular and maintainable. Addressing the
          highlighted recommendations could improve maintainability,
          readability, and performance by an estimated 18%.
        </p>

      </div>

    </section>
  );
}