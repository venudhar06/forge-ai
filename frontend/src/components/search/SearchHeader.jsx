import { Search } from "lucide-react";

export default function SearchHeader() {
  return (
    <header className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <h1 className="flex items-center gap-3 text-3xl font-bold text-white">

        <Search className="text-cyan-400"/>

        Global Search

      </h1>

      <p className="mt-2 text-slate-400">

        Search repositories, files, documentation,
        architecture, and AI conversations.

      </p>

    </header>
  );
}