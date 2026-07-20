import { ServerCrash, RefreshCcw } from "lucide-react";

export default function ServerErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-500/10">

          <ServerCrash
            size={52}
            className="text-orange-400"
          />

        </div>

        <h1 className="mt-8 text-7xl font-extrabold text-white">
          500
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Internal Server Error
        </h2>

        <p className="mt-4 text-slate-400">
          Something went wrong on our side. Please try again in a few moments.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mx-auto mt-10 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white"
        >
          <RefreshCcw size={18} />
          Retry
        </button>

      </div>

    </div>
  );
}