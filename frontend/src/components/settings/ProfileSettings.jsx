import { useState } from "react";
import { User, Mail, Building2, Briefcase, Save, Pencil } from "lucide-react";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    username: "@johndoe",
    organization: "Forge AI",
    role: "Software Engineer",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8 shadow-xl backdrop-blur">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl font-bold text-white">
          JD
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Profile Settings
          </h2>
          <p className="text-sm text-slate-400">
            Update your personal information and workspace profile.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            <User size={16} />
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            <Mail size={16} />
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Username */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            <User size={16} />
            Username
          </label>

          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Organization */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            <Building2 size={16} />
            Organization
          </label>

          <input
            type="text"
            name="organization"
            value={profile.organization}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Role */}
        <div className="md:col-span-2">
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            <Briefcase size={16} />
            Role
          </label>

          <input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105">
          <Save size={18} />
          Save Changes
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-white">
          <Pencil size={18} />
          Edit Profile
        </button>
      </div>
    </div>
  );
}