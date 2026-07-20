import {
  HeartPulse,
  ShieldCheck,
  BadgeCheck,
  Brain,
} from "lucide-react";

const cards = [
  {
    title: "Repository Health",
    value: "94%",
    subtitle: "Excellent",
    icon: HeartPulse,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Security Score",
    value: "91%",
    subtitle: "Low Risk",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Code Quality",
    value: "A+",
    subtitle: "Clean Code",
    icon: BadgeCheck,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "AI Confidence",
    value: "97%",
    subtitle: "High",
    icon: Brain,
    color: "from-orange-500 to-red-500",
  },
];

export default function HealthOverview() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition hover:border-cyan-500 hover:-translate-y-1"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color}`}
            >
              <Icon className="text-white" size={26} />
            </div>

            <h3 className="mt-5 text-sm font-medium text-slate-400">
              {card.title}
            </h3>

            <p className="mt-2 text-4xl font-bold text-white">
              {card.value}
            </p>

            <p className="mt-3 text-sm text-cyan-400">
              {card.subtitle}
            </p>

            {/* Progress Bar */}
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                style={{
                  width:
                    card.title === "Repository Health"
                      ? "94%"
                      : card.title === "Security Score"
                      ? "91%"
                      : card.title === "AI Confidence"
                      ? "97%"
                      : "100%",
                }}
              />
            </div>
          </div>
        );
      })}

    </section>
  );
}