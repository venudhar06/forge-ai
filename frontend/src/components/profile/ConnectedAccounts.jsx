import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

const accounts = [
  {
    name: "GitHub",
    icon: FaGithub,
    status: "Connected",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    status: "Connected",
  },
  {
    name: "Google",
    icon: FaGoogle,
    status: "Connected",
  },
];

export default function ConnectedAccounts() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        Connected Accounts
      </h2>

      <div className="space-y-4">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="flex items-center justify-between rounded-xl border border-slate-700 p-4"
          >
            <div className="flex items-center gap-4">
              <account.icon
                className="text-cyan-400"
                size={28}
              />

              <div>
                <h3 className="font-semibold text-white">
                  {account.name}
                </h3>

                <p className="text-sm text-slate-400">
                  Connected
                </p>
              </div>
            </div>

            <CheckCircle2
              className="text-green-400"
              size={22}
            />
          </div>
        ))}
      </div>
    </section>
  );
}