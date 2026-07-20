import { BellOff } from "lucide-react";

export default function EmptyNotifications() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-16 text-center">

      <BellOff
        className="mx-auto text-slate-500"
        size={60}
      />

      <h2 className="mt-6 text-2xl font-bold text-white">
        No Notifications
      </h2>

      <p className="mt-2 text-slate-400">
        You're all caught up. New notifications will appear here.
      </p>

    </div>
  );
}