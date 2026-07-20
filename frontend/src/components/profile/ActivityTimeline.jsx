const activities = [
  "Uploaded Forge AI repository",
  "Generated architecture diagram",
  "Completed security scan",
  "Created AI documentation",
  "Started AI chat session",
];

export default function ActivityTimeline() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex gap-4"
          >
            <div className="mt-1 h-3 w-3 rounded-full bg-cyan-500" />

            <div>
              <p className="font-medium text-white">
                {activity}
              </p>

              <p className="text-sm text-slate-500">
                {index + 1} day ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}