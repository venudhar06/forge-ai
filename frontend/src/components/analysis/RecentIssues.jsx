import {
  AlertTriangle,
  Copy,
  FileWarning,
  Layers3,
} from "lucide-react";

const issues = [
  {
    title: "High Complexity",
    file: "Dashboard.jsx",
    icon: AlertTriangle,
    color: "text-red-400",
  },
  {
    title: "Duplicate Code",
    file: "RepositoryService.py",
    icon: Copy,
    color: "text-yellow-400",
  },
  {
    title: "Unused Import",
    file: "ChatPage.jsx",
    icon: FileWarning,
    color: "text-cyan-400",
  },
  {
    title: "Large Component",
    file: "SettingsPage.jsx",
    icon: Layers3,
    color: "text-purple-400",
  },
];

export default function RecentIssues() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Issues
      </h2>

      <div className="space-y-4">

        {issues.map((issue) => {
          const Icon = issue.icon;

          return (
            <div
              key={issue.title}
              className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-cyan-500"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-slate-900 p-3">
                  <Icon
                    className={issue.color}
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {issue.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {issue.file}
                  </p>

                </div>

              </div>

              <button className="rounded-lg bg-cyan-500/10 px-3 py-2 text-sm text-cyan-400 hover:bg-cyan-500/20">
                Inspect
              </button>

            </div>
          );
        })}

      </div>

    </section>
  );
}