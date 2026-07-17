import { useState } from "react";
import {
  Bell,
  ShieldAlert,
  FileText,
  Bot,
  Mail,
  Calendar,
} from "lucide-react";

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    repositoryAnalysis: true,
    securityAlerts: true,
    documentation: true,
    aiChat: false,
    emailUpdates: true,
    weeklySummary: false,
  });

  const toggleSetting = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const settings = [
    {
      key: "repositoryAnalysis",
      icon: Bell,
      title: "Repository Analysis",
      description: "Notify when repository analysis is completed.",
    },
    {
      key: "securityAlerts",
      icon: ShieldAlert,
      title: "Security Alerts",
      description: "Receive notifications for detected vulnerabilities.",
    },
    {
      key: "documentation",
      icon: FileText,
      title: "Documentation Generation",
      description: "Notify when AI finishes generating documentation.",
    },
    {
      key: "aiChat",
      icon: Bot,
      title: "AI Chat Updates",
      description: "Receive updates related to AI assistant responses.",
    },
    {
      key: "emailUpdates",
      icon: Mail,
      title: "Email Notifications",
      description: "Receive important notifications via email.",
    },
    {
      key: "weeklySummary",
      icon: Calendar,
      title: "Weekly Summary",
      description: "Get a weekly report of repository activity.",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8 shadow-xl backdrop-blur">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600">
          <Bell className="text-white" size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Notifications
          </h2>

          <p className="text-sm text-slate-400">
            Choose which notifications Forge AI should send.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {settings.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.key}
              className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-5"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-slate-800 p-3">
                  <Icon className="text-cyan-400" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => toggleSetting(item.key)}
                className={`relative h-7 w-14 rounded-full transition ${
                  notifications[item.key]
                    ? "bg-cyan-500"
                    : "bg-slate-600"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    notifications[item.key]
                      ? "left-8"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <h3 className="mb-3 text-lg font-semibold text-white">
          Notification Summary
        </h3>

        <p className="text-sm text-slate-400">
          Enabled Notifications:{" "}
          <span className="font-semibold text-cyan-400">
            {
              Object.values(notifications).filter(Boolean).length
            }
          </span>{" "}
          / {Object.keys(notifications).length}
        </p>
      </div>

      <button className="mt-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 font-semibold text-white transition hover:scale-105">
        Save Notification Preferences
      </button>
    </div>
  );
}