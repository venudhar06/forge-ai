import {
  GitBranch,
  CheckCircle,
  AlertCircle,
  Wifi,
} from "lucide-react";

export default function BottomStatusBar() {
  return (
    <footer className="mt-4 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm shadow-lg">
      {/* Left */}
      <div className="flex items-center gap-6 text-slate-300">
        <div className="flex items-center gap-2">
          <GitBranch size={16} />
          <span>main</span>
        </div>

        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle size={16} />
          <span>No Issues</span>
        </div>

        <div className="flex items-center gap-2">
          <AlertCircle size={16} />
          <span>0 Warnings</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-slate-400">
        <span>UTF-8</span>
        <span>JavaScript React</span>

        <div className="flex items-center gap-2">
          <Wifi size={16} />
          <span>Connected</span>
        </div>
      </div>
    </footer>
  );
}