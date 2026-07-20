import {
  ShieldAlert,
  Bot,
  FolderGit2,
  User,
} from "lucide-react";

const icons = {
  security: ShieldAlert,
  ai: Bot,
  repository: FolderGit2,
  account: User,
};

const colors = {
  security: "text-red-400",
  ai: "text-purple-400",
  repository: "text-green-400",
  account: "text-cyan-400",
};

export default function NotificationCard({
  type,
  title,
  description,
  time,
  unread,
}) {
  const Icon = icons[type];

  return (
    <div
      className={`rounded-2xl border p-5 shadow-lg transition hover:border-cyan-500 ${
        unread
          ? "border-cyan-500 bg-slate-900"
          : "border-slate-700 bg-slate-900"
      }`}
    >
      <div className="flex justify-between gap-4">
        <div className="flex gap-4">

          <div className="mt-1">
            <Icon
              className={colors[type]}
              size={22}
            />
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h3 className="font-semibold text-white">
                {title}
              </h3>

              {unread && (
                <span className="rounded-full bg-cyan-500 px-2 py-1 text-xs text-white">
                  New
                </span>
              )}

            </div>

            <p className="mt-2 text-slate-400">
              {description}
            </p>

          </div>

        </div>

        <span className="text-sm text-slate-500">
          {time}
        </span>

      </div>
    </div>
  );
}