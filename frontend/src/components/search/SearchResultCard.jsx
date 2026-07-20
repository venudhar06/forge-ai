import {
  FolderGit2,
  FileCode2,
  Bot,
  FileText,
} from "lucide-react";

const icons = {
  repository: FolderGit2,
  file: FileCode2,
  docs: FileText,
  ai: Bot,
};

const colors = {
  repository: "text-green-400",
  file: "text-cyan-400",
  docs: "text-orange-400",
  ai: "text-purple-400",
};

export default function SearchResultCard({
  type,
  title,
  description,
  location,
}) {
  const Icon = icons[type];

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg transition hover:border-cyan-500">

      <div className="flex justify-between gap-5">

        <div className="flex gap-4">

          <Icon
            className={colors[type]}
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              {title}
            </h3>

            <p className="mt-2 text-slate-400">
              {description}
            </p>

          </div>

        </div>

        <span className="text-sm text-slate-500 whitespace-nowrap">
          {location}
        </span>

      </div>

    </div>
  );
}