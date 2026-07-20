import {
  BookOpen,
  FolderTree,
  Rocket,
  Code2,
  Shield,
  Database,
  CheckCircle2,
} from "lucide-react";

const contents = [
  {
    title: "Project Overview",
    icon: BookOpen,
  },
  {
    title: "Project Structure",
    icon: FolderTree,
  },
  {
    title: "Installation",
    icon: Rocket,
  },
  {
    title: "System Architecture",
    icon: Code2,
  },
  {
    title: "Database",
    icon: Database,
  },
  {
    title: "Security",
    icon: Shield,
  },
  {
    title: "Recommendations",
    icon: CheckCircle2,
  },
];

export default function TableOfContents() {
  return (
    <aside className="w-72 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
        Table of Contents
      </h2>

      <nav className="space-y-2">
        {contents.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </nav>

      {/* Progress */}
      <div className="mt-8 rounded-xl bg-slate-800 p-4">
        <h3 className="font-semibold text-white">
          Documentation Progress
        </h3>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-700">
          <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>

        <p className="mt-3 text-sm text-slate-400">
          92% documentation coverage
        </p>
      </div>
    </aside>
  );
}