import {
  Mail,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <h2 className="mb-6 text-xl font-bold text-white">
        Profile Information
      </h2>

      <div className="space-y-5">

        <InfoRow
          icon={Mail}
          label="Email"
          value="venudhar@example.com"
        />

        <InfoRow
  icon={FaGithub}
  label="GitHub"
  value="github.com/venudhar06"
/>

        <InfoRow
          icon={Calendar}
          label="Joined"
          value="July 2026"
        />

        <InfoRow
          icon={MapPin}
          label="Location"
          value="India"
        />

        <InfoRow
          icon={Award}
          label="Repositories"
          value="12"
        />

      </div>

    </section>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <Icon className="text-cyan-400" size={18} />

        <span className="text-slate-300">
          {label}
        </span>

      </div>

      <span className="font-medium text-white">
        {value}
      </span>

    </div>
  );
}