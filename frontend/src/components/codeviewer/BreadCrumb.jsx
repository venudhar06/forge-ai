import { Home, ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const path = [
    "Repository",
    "src",
    "components",
    "Button.jsx",
  ];

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 text-sm shadow-lg">
      <Home size={18} className="text-cyan-400" />

      {path.map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <ChevronRight
            size={16}
            className="text-slate-500"
          />

          <span
            className={`${
              index === path.length - 1
                ? "font-semibold text-cyan-400"
                : "text-slate-300"
            }`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}