const repositories = [
  {
    name: "Forge AI",
    language: "React",
    updated: "2 hours ago",
  },
  {
    name: "CodeGuard AI",
    language: "Python",
    updated: "Yesterday",
  },
  {
    name: "Packet Verification System",
    language: "Python",
    updated: "3 days ago",
  },
];

export default function RecentRepositories() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Repositories
      </h2>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="rounded-xl border border-slate-700 p-4 transition hover:border-cyan-500"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">
                {repo.name}
              </h3>

              <span className="text-xs text-slate-500">
                {repo.updated}
              </span>
            </div>

            <p className="mt-2 text-sm text-cyan-400">
              {repo.language}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}