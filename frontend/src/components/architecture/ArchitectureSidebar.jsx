import {
  LayoutDashboard,
  FolderTree,
  Boxes,
  Database,
  Cpu,
  Shield,
  Globe,
  ChevronRight,
} from "lucide-react";

const modules = [
  {
    name: "Frontend",
    icon: LayoutDashboard,
    active: true,
  },
  {
    name: "Backend",
    icon: Cpu,
  },
  {
    name: "Database",
    icon: Database,
  },
  {
    name: "Components",
    icon: Boxes,
  },
  {
    name: "Folder Tree",
    icon: FolderTree,
  },
  {
    name: "Security",
    icon: Shield,
  },
  {
    name: "API",
    icon: Globe,
  },
];

export default function ArchitectureSidebar() {
  return (
    <aside className="h-full w-72 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">

      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
        Architecture
      </h2>

      <div className="space-y-2">

        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <button
              key={module.name}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition ${
                module.active
                  ? "bg-cyan-500/10 text-cyan-400"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                {module.name}
              </div>

              <ChevronRight size={16} />
            </button>
          );
        })}

      </div>

      {/* Stats */}

      <div className="mt-8 rounded-xl bg-slate-800 p-4">

        <h3 className="font-semibold text-white">
          Repository Metrics
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex justify-between">
            <span className="text-slate-400">Modules</span>
            <span className="text-cyan-400">18</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Components</span>
            <span className="text-cyan-400">42</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Services</span>
            <span className="text-cyan-400">9</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Dependencies</span>
            <span className="text-cyan-400">61</span>
          </div>

        </div>

      </div>

    </aside>
  );
}