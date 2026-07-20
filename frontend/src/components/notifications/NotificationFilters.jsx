const filters = [
  "All",
  "Unread",
  "Security",
  "Repositories",
  "AI",
];

export default function NotificationFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter, index) => (
        <button
          key={filter}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            index === 0
              ? "bg-cyan-500 text-white"
              : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-500"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}