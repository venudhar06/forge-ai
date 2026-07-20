import { TriangleAlert, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10">

          <TriangleAlert
            size={52}
            className="text-red-400"
          />

        </div>

        <h1 className="mt-8 text-7xl font-extrabold text-white">
          404
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/dashboard"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white"
          >
            <Home size={18} />
            Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}