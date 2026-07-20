import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search repositories, files, functions..."
        className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-4 pl-14 pr-28 text-white outline-none focus:border-cyan-500"
      />

      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-slate-600 px-3 py-1 text-xs text-slate-400"
      >
        Ctrl K
      </span>

    </div>
  );
}