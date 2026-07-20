import { Bell, CheckCheck } from "lucide-react";

export default function NotificationsHeader() {
  return (
    <header className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="flex items-center gap-3 text-3xl font-bold text-white">
            <Bell className="text-cyan-400" />
            Notifications
          </h1>

          <p className="mt-2 text-slate-400">
            Stay updated with repository activity, AI insights, and security
            alerts.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:opacity-90">
          <CheckCheck size={18} />
          Mark All as Read
        </button>
      </div>
    </header>
  );
}