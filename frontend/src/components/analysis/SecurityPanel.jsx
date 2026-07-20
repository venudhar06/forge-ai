import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Lock,
  KeyRound,
  Bug,
} from "lucide-react";

const findings = [
  {
    label: "Critical",
    value: 0,
    icon: ShieldCheck,
    color: "text-green-400",
  },
  {
    label: "High",
    value: 2,
    icon: ShieldAlert,
    color: "text-red-400",
  },
  {
    label: "Medium",
    value: 5,
    icon: ShieldAlert,
    color: "text-yellow-400",
  },
  {
    label: "Low",
    value: 8,
    icon: ShieldX,
    color: "text-cyan-400",
  },
];

const checks = [
  {
    title: "JWT Authentication",
    status: "Configured",
    icon: Lock,
  },
  {
    title: "HTTPS",
    status: "Enabled",
    icon: ShieldCheck,
  },
  {
    title: "Secrets Detected",
    status: "None",
    icon: KeyRound,
  },
  {
    title: "Known Vulnerabilities",
    status: "2 High",
    icon: Bug,
  },
];

export default function SecurityPanel() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <h2 className="mb-6 text-xl font-bold text-white">
        Security Findings
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {findings.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-xl border border-slate-700 bg-slate-800 p-4"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    {item.value}
                  </h3>
                </div>

                <Icon
                  size={28}
                  className={item.color}
                />

              </div>
            </div>
          );
        })}

      </div>

      <div className="mt-8 space-y-4">

        {checks.map((check) => {
          const Icon = check.icon;

          return (
            <div
              key={check.title}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
            >
              <div className="flex items-center gap-3">

                <Icon
                  className="text-cyan-400"
                  size={20}
                />

                <span className="text-white">
                  {check.title}
                </span>

              </div>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                {check.status}
              </span>

            </div>
          );
        })}

      </div>

    </section>
  );
}