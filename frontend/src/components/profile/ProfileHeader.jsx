import {
  User,
  Edit3,
  Camera,
  Settings,
} from "lucide-react";

export default function ProfileHeader() {
  return (
    <header className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

        <div className="flex items-center gap-6">

          <div className="relative">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">

              <User size={54} className="text-white" />

            </div>

            <button className="absolute bottom-1 right-1 rounded-full bg-slate-800 p-2 hover:bg-slate-700">

              <Camera size={16} className="text-white" />

            </button>

          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">
              Venudhar
            </h1>

            <p className="mt-2 text-slate-400">
              AI & Software Engineering Enthusiast
            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                React
              </span>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                FastAPI
              </span>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                AI
              </span>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                Open Source
              </span>

            </div>

          </div>

        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-white hover:bg-slate-800">

            <Edit3 size={18} />

            Edit Profile

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white">

            <Settings size={18} />

            Account

          </button>

        </div>

      </div>

    </header>
  );
}