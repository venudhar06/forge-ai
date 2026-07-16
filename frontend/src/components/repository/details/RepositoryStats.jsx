import {
  FolderOpen,
  FileCode2,
  GitBranch,
  ShieldCheck,
  Bug,
  Clock3,
} from "lucide-react";

function RepositoryStats() {
  const stats = [
    {
      title: "Files",
      value: "186",
      icon: <FolderOpen size={22} className="text-blue-400" />,
    },
    {
      title: "Components",
      value: "42",
      icon: <FileCode2 size={22} className="text-cyan-400" />,
    },
    {
      title: "Branches",
      value: "8",
      icon: <GitBranch size={22} className="text-purple-400" />,
    },
    {
      title: "Code Quality",
      value: "94%",
      icon: <ShieldCheck size={22} className="text-green-400" />,
    },
    {
      title: "Issues",
      value: "2",
      icon: <Bug size={22} className="text-red-400" />,
    },
    {
      title: "Last Scan",
      value: "2 min",
      icon: <Clock3 size={22} className="text-yellow-400" />,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Repository Insights
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl bg-[#0F172A] border border-gray-800 p-5 hover:border-blue-500 transition duration-300"
          >
            <div className="flex items-center justify-between">
              {stat.icon}

              <span className="text-3xl font-bold text-white">
                {stat.value}
              </span>
            </div>

            <p className="mt-4 text-gray-400 text-sm">
              {stat.title}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default RepositoryStats;