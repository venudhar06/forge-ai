import { Link } from "react-router-dom";
import { ArrowLeft, Settings } from "lucide-react";

export default function SettingsHeader() {
  return (
    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <Link
          to="/dashboard"
          className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
            <Settings className="text-white" size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              Settings
            </h1>

            <p className="mt-1 text-slate-400">
              Manage your Forge AI workspace preferences and account settings.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 px-5 py-4 backdrop-blur">
        <p className="text-sm text-slate-400">
          Workspace
        </p>

        <h3 className="mt-1 font-semibold text-white">
          Forge AI
        </h3>
      </div>
    </div>
  );
}