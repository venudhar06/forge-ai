import {
  Link2,
  CheckCircle2,
  XCircle,
  KeyRound,
} from "lucide-react";

import { FaGithub, FaGoogle, FaSlack } from "react-icons/fa";

export default function ConnectedAccounts() {
  const accounts = [
  {
    name: "GitHub",
    icon: FaGithub,
    status: "Connected",
    connected: true,
    description: "Import repositories and enable AI-powered repository analysis.",
  },
  {
    name: "Google",
    icon: FaGoogle,
    status: "Coming Soon",
    connected: false,
    description: "Sign in using your Google account and sync your profile.",
  },
  {
    name: "Slack",
    icon: FaSlack,
    status: "Not Connected",
    connected: false,
    description: "Receive Forge AI notifications directly in your Slack workspace.",
  },
];
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8 shadow-xl backdrop-blur">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500">
          <Link2 className="text-white" size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Connected Accounts
          </h2>

          <p className="text-sm text-slate-400">
            Connect external services to unlock additional Forge AI
            capabilities.
          </p>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="space-y-5">
        {accounts.map((account) => {
          const Icon = account.icon;

          return (
            <div
              key={account.name}
              className="flex flex-col gap-6 rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-500 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800">
                  <Icon className="text-cyan-400" size={32} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {account.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {account.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    {account.connected ? (
                      <>
                        <CheckCircle2
                          size={18}
                          className="text-green-400"
                        />
                        <span className="text-sm font-medium text-green-400">
                          {account.status}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle
                          size={18}
                          className="text-red-400"
                        />
                        <span className="text-sm font-medium text-red-400">
                          {account.status}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                className={`rounded-xl px-6 py-3 font-semibold transition ${
                  account.connected
                    ? "border border-red-500 text-red-400 hover:bg-red-500/10"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105"
                }`}
              >
                {account.connected ? "Disconnect" : "Connect"}
              </button>
            </div>
          );
        })}
      </div>

      {/* API Keys */}
      <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div className="mb-5 flex items-center gap-3">
          <KeyRound className="text-yellow-400" size={24} />

          <div>
            <h3 className="text-lg font-semibold text-white">
              API Keys
            </h3>

            <p className="text-sm text-slate-400">
              Generate API keys to integrate Forge AI with your own
              applications and workflows.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-slate-600 p-5">
          <p className="text-slate-400">
            No API keys have been generated yet.
          </p>

          <button className="mt-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105">
            Generate API Key
          </button>
        </div>
      </div>
    </div>
  );
}