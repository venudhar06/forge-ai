import {
  FolderGit2,
  ShieldCheck,
  FileCode2,
  MessageSquare,
} from "lucide-react";

const stats = [
  {
    title: "Repositories",
    value: "12",
    icon: FolderGit2,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Analyses",
    value: "248",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Files Scanned",
    value: "3.8K",
    icon: FileCode2,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "AI Chats",
    value: "421",
    icon: MessageSquare,
    color: "from-orange-500 to-red-600",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg transition hover:-translate-y-1"
        >
          <div
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${stat.color}`}
          >
            <stat.icon size={22} className="text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white">{stat.value}</h2>

          <p className="mt-1 text-slate-400">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}