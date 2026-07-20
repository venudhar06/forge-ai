import { SearchX } from "lucide-react";

export default function EmptySearch() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-16 text-center">

      <SearchX
        size={60}
        className="mx-auto text-slate-500"
      />

      <h2 className="mt-6 text-2xl font-bold text-white">
        No Results Found
      </h2>

      <p className="mt-2 text-slate-400">
        Try searching for repositories, files,
        documentation, or AI conversations.
      </p>

    </div>
  );
}