import {
  BookOpen,
  FileCode,
  Shield,
  FolderTree,
  Rocket,
  Database,
  Settings,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    title: "Overview",
    icon: BookOpen,
    active: true,
  },
  {
    title: "Installation",
    icon: Rocket,
  },
  {
    title: "Project Structure",
    icon: FolderTree,
  },
  {
    title: "API Reference",
    icon: FileCode,
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
    title: "Configuration",
    icon: Settings,
  },
];

export default function DocumentationSidebar() {
  return (
    <aside className="h-full w-72 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
        Documentation
      </h2>

      <nav className="space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.title}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition ${
                section.active
                  ? "bg-cyan-500/10 text-cyan-400"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{section.title}</span>
              </div>

              <ChevronRight size={16} />
            </button>
          );
        })}
      </nav>

      {/* AI Summary Card */}
      <div className="mt-8 rounded-2xl bg-slate-800 p-4">
        <h3 className="text-lg font-semibold text-white">
          Project Summary
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Forge AI is an AI-powered software engineering platform
          that analyzes repositories, generates documentation,
          visualizes architecture, and provides intelligent
          development assistance.
        </p>

        <div className="mt-5 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Pages</span>
            <span className="text-cyan-400">28</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Components</span>
            <span className="text-cyan-400">42</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">APIs</span>
            <span className="text-cyan-400">17</span>
          </div>
        </div>
      </div>
    </aside>
  );
}