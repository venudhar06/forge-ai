import {
  Monitor,
  Server,
  Database,
  Brain,
  Shield,
  Globe,
  Boxes,
  ArrowRight,
} from "lucide-react";

const nodes = [
  {
    title: "React Frontend",
    icon: Monitor,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "FastAPI Backend",
    icon: Server,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "AI Engine",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Database",
    icon: Database,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Security",
    icon: Shield,
    color: "from-yellow-500 to-amber-600",
  },
  {
    title: "REST APIs",
    icon: Globe,
    color: "from-indigo-500 to-violet-600",
  },
];

export default function ArchitectureCanvas() {
  return (
    <div className="flex-1 overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Repository Architecture
      </h2>

      {/* Top Layer */}
      <div className="flex justify-center">
        <ArchitectureCard node={nodes[0]} />
      </div>

      <Connector />

      {/* Middle Layer */}
      <div className="flex justify-center gap-10">
        <ArchitectureCard node={nodes[1]} />
        <ArchitectureCard node={nodes[2]} />
      </div>

      <Connector />

      {/* Bottom Layer */}
      <div className="flex justify-center gap-8 flex-wrap">
        <ArchitectureCard node={nodes[3]} />
        <ArchitectureCard node={nodes[4]} />
        <ArchitectureCard node={nodes[5]} />
      </div>

      {/* Repository Modules */}
      <div className="mt-14">
        <h3 className="mb-6 text-xl font-semibold text-white">
          Repository Modules
        </h3>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Authentication",
            "Dashboard",
            "Repository",
            "Documentation",
            "Code Viewer",
            "AI Chat",
          ].map((module) => (
            <div
              key={module}
              className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition hover:border-cyan-500 hover:scale-[1.02]"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                <Boxes className="text-cyan-400" />
              </div>

              <h4 className="font-semibold text-white">
                {module}
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                AI analyzed architecture module.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="my-6 flex justify-center">
      <ArrowRight
        className="rotate-90 text-slate-500"
        size={28}
      />
    </div>
  );
}

function ArchitectureCard({ node }) {
  const Icon = node.icon;

  return (
    <div className="w-64 rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg transition hover:scale-105 hover:border-cyan-500">
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${node.color}`}
      >
        <Icon size={30} className="text-white" />
      </div>

      <h3 className="text-lg font-semibold text-white">
        {node.title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        AI detected architecture component.
      </p>
    </div>
  );
}