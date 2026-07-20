import {
  Bell,
  ShieldAlert,
  Bot,
  FolderGit2,
} from "lucide-react";

const stats = [
  {
    title: "Total",
    value: "36",
    icon: Bell,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Unread",
    value: "8",
    icon: ShieldAlert,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "AI",
    value: "14",
    icon: Bot,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Repositories",
    value: "12",
    icon: FolderGit2,
    color: "from-green-500 to-emerald-500",
  },
];

export default function NotificationStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg"
        >
          <div
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.color}`}
          >
            <item.icon className="text-white" size={22} />
          </div>

          <h2 className="text-3xl font-bold text-white">
            {item.value}
          </h2>

          <p className="mt-1 text-slate-400">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}