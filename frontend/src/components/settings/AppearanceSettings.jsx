import { useState } from "react";
import {
  Palette,
  Sun,
  Moon,
  Monitor,
  LayoutGrid,
  Check,
} from "lucide-react";

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("Dark");
  const [density, setDensity] = useState("Comfortable");
  const [accent, setAccent] = useState("Cyan");

  const accents = [
    { name: "Cyan", color: "bg-cyan-500" },
    { name: "Blue", color: "bg-blue-500" },
    { name: "Purple", color: "bg-purple-500" },
    { name: "Green", color: "bg-green-500" },
    { name: "Orange", color: "bg-orange-500" },
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8 shadow-xl backdrop-blur">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500">
          <Palette className="text-white" size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Appearance
          </h2>

          <p className="text-sm text-slate-400">
            Personalize the look and feel of Forge AI.
          </p>
        </div>
      </div>

      {/* Theme */}
      <div className="mb-8">
        <label className="mb-4 block text-sm font-medium text-slate-300">
          Theme
        </label>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Light", icon: Sun },
            { name: "Dark", icon: Moon },
            { name: "System", icon: Monitor },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => setTheme(item.name)}
                className={`rounded-2xl border p-5 transition ${
                  theme === item.name
                    ? "border-cyan-500 bg-cyan-500/20"
                    : "border-slate-600 bg-slate-900 hover:border-cyan-500"
                }`}
              >
                <Icon
                  size={28}
                  className="mx-auto mb-3 text-white"
                />

                <p className="font-medium text-white">
                  {item.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Density */}
      <div className="mb-8">
        <label className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-300">
          <LayoutGrid size={16} />
          Interface Density
        </label>

        <div className="grid gap-3 md:grid-cols-3">
          {["Compact", "Comfortable", "Spacious"].map((item) => (
            <button
              key={item}
              onClick={() => setDensity(item)}
              className={`rounded-xl border py-3 transition ${
                density === item
                  ? "border-cyan-500 bg-cyan-500/20 text-cyan-400"
                  : "border-slate-600 bg-slate-900 text-slate-300 hover:border-cyan-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Accent Color */}
      <div className="mb-8">
        <label className="mb-4 block text-sm font-medium text-slate-300">
          Accent Color
        </label>

        <div className="flex flex-wrap gap-4">
          {accents.map((item) => (
            <button
              key={item.name}
              onClick={() => setAccent(item.name)}
              className={`relative flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
            >
              {accent === item.name && (
                <Check size={20} className="text-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <h3 className="mb-3 text-lg font-semibold text-white">
          Current Appearance
        </h3>

        <div className="space-y-2 text-sm text-slate-400">
          <p>
            <span className="text-white">Theme:</span> {theme}
          </p>

          <p>
            <span className="text-white">Density:</span> {density}
          </p>

          <p>
            <span className="text-white">Accent:</span> {accent}
          </p>
        </div>
      </div>

      <button className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105">
        Save Appearance
      </button>
    </div>
  );
}