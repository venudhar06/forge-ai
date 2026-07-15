import { FolderGit2, ExternalLink, Clock3 } from "lucide-react";

function RecentRepositories() {
  const repositories = [
    {
      id: 1,
      name: "Forge AI",
      language: "React + FastAPI",
      updated: "2 min ago",
      status: "Analyzed",
    },
    {
      id: 2,
      name: "Portfolio Website",
      language: "React",
      updated: "Yesterday",
      status: "Pending",
    },
    {
      id: 3,
      name: "Chat Application",
      language: "Node.js",
      updated: "3 days ago",
      status: "Completed",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-gray-800 bg-[#111827] p-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <FolderGit2 size={28} className="text-blue-500" />

          <div>

            <h2 className="text-2xl font-bold text-white">
              Recent Repositories
            </h2>

            <p className="text-gray-400">
              Recently uploaded repositories.
            </p>

          </div>

        </div>

        <button className="text-blue-400 hover:text-blue-300">
          View All
        </button>

      </div>

      {/* Repository List */}

      <div className="mt-8 space-y-4">

        {repositories.map((repo) => (

          <div
            key={repo.id}
            className="flex items-center justify-between rounded-xl border border-gray-700 bg-[#0F172A] p-5 hover:border-blue-500 transition"
          >

            {/* Left */}

            <div>

              <h3 className="text-lg font-semibold text-white">
                {repo.name}
              </h3>

              <p className="text-gray-400 mt-1">
                {repo.language}
              </p>

            </div>

            {/* Right */}

            <div className="flex items-center gap-8">

              <div className="flex items-center gap-2 text-gray-400">

                <Clock3 size={18} />

                {repo.updated}

              </div>

              <span
                className={`rounded-full px-4 py-1 text-sm ${
                  repo.status === "Analyzed"
                    ? "bg-green-500/20 text-green-400"
                    : repo.status === "Completed"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {repo.status}
              </span>

              <button className="text-blue-400 hover:text-blue-300">

                <ExternalLink size={22} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentRepositories;