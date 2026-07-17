import { useState } from "react";
import {
  Shield,
  Lock,
  KeyRound,
  Laptop,
  Bell,
  Trash2,
  LogOut,
} from "lucide-react";

export default function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8 shadow-xl backdrop-blur">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600">
          <Shield className="text-white" size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Security
          </h2>

          <p className="text-sm text-slate-400">
            Manage your account security and privacy.
          </p>
        </div>
      </div>

      {/* Change Password */}
      <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <div className="flex items-center gap-4">
          <Lock className="text-cyan-400" size={24} />

          <div>
            <h3 className="font-semibold text-white">
              Change Password
            </h3>

            <p className="text-sm text-slate-400">
              Update your account password regularly.
            </p>
          </div>
        </div>

        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-600">
          Change
        </button>
      </div>

      {/* Two Factor */}
      <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <div className="flex items-center gap-4">
          <KeyRound className="text-green-400" size={24} />

          <div>
            <h3 className="font-semibold text-white">
              Two-Factor Authentication
            </h3>

            <p className="text-sm text-slate-400">
              Protect your account with an extra verification step.
            </p>
          </div>
        </div>

        <button
          onClick={() => setTwoFactor(!twoFactor)}
          className={`relative h-7 w-14 rounded-full transition ${
            twoFactor ? "bg-green-500" : "bg-slate-600"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
              twoFactor ? "left-8" : "left-1"
            }`}
          />
        </button>
      </div>

      {/* Login Alerts */}
      <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <div className="flex items-center gap-4">
          <Bell className="text-yellow-400" size={24} />

          <div>
            <h3 className="font-semibold text-white">
              Login Alerts
            </h3>

            <p className="text-sm text-slate-400">
              Receive notifications when someone logs into your account.
            </p>
          </div>
        </div>

        <button
          onClick={() => setLoginAlerts(!loginAlerts)}
          className={`relative h-7 w-14 rounded-full transition ${
            loginAlerts ? "bg-yellow-500" : "bg-slate-600"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
              loginAlerts ? "left-8" : "left-1"
            }`}
          />
        </button>
      </div>

      {/* Active Sessions */}
      <div className="mb-5 rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <div className="mb-4 flex items-center gap-3">
          <Laptop className="text-blue-400" size={24} />

          <h3 className="font-semibold text-white">
            Active Sessions
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <p className="font-medium text-white">
            Windows • Chrome
          </p>

          <p className="text-sm text-slate-400">
            Hyderabad, India • Active Now
          </p>
        </div>

        <button className="mt-4 flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-2 text-slate-300 transition hover:border-red-500 hover:text-red-400">
          <LogOut size={18} />
          Sign Out of All Devices
        </button>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-6">
        <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-red-400">
          <Trash2 size={22} />
          Danger Zone
        </h3>

        <p className="mb-5 text-sm text-slate-400">
          Permanently delete your Forge AI account and all associated data.
          This action cannot be undone.
        </p>

        <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
}