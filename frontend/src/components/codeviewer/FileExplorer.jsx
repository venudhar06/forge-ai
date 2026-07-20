import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  FileJson,
} from "lucide-react";

export default function FileExplorer() {
  const [openFolders, setOpenFolders] = useState({
    src: true,
    components: true,
    pages: false,
    public: false,
  });

  const toggleFolder = (folder) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  return (
    <aside className="h-full w-72 overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-lg">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
        Explorer
      </h2>

      {/* SRC */}
      <div>
        <button
          onClick={() => toggleFolder("src")}
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left transition hover:bg-slate-800"
        >
          {openFolders.src ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}

          {openFolders.src ? (
            <FolderOpen size={18} className="text-yellow-400" />
          ) : (
            <Folder size={18} className="text-yellow-400" />
          )}

          <span className="text-slate-200">src</span>
        </button>

        {openFolders.src && (
          <div className="ml-6 mt-1 space-y-1">
            {/* Components */}
            <button
              onClick={() => toggleFolder("components")}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-slate-800"
            >
              {openFolders.components ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}

              {openFolders.components ? (
                <FolderOpen size={18} className="text-yellow-400" />
              ) : (
                <Folder size={18} className="text-yellow-400" />
              )}

              <span className="text-slate-300">components</span>
            </button>

            {openFolders.components && (
              <div className="ml-6 space-y-1">
                <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-800">
                  <FileCode size={16} className="text-cyan-400" />
                  <span className="text-cyan-300">Button.jsx</span>
                </div>

                <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-800">
                  <FileCode size={16} className="text-cyan-400" />
                  <span className="text-slate-300">Navbar.jsx</span>
                </div>

                <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-800">
                  <FileCode size={16} className="text-cyan-400" />
                  <span className="text-slate-300">Footer.jsx</span>
                </div>
              </div>
            )}

            {/* Pages */}
            <button
              onClick={() => toggleFolder("pages")}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-slate-800"
            >
              {openFolders.pages ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}

              {openFolders.pages ? (
                <FolderOpen size={18} className="text-yellow-400" />
              ) : (
                <Folder size={18} className="text-yellow-400" />
              )}

              <span className="text-slate-300">pages</span>
            </button>

            {openFolders.pages && (
              <div className="ml-6 space-y-1">
                <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-800">
                  <FileCode size={16} className="text-cyan-400" />
                  <span className="text-slate-300">Home.jsx</span>
                </div>

                <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-800">
                  <FileCode size={16} className="text-cyan-400" />
                  <span className="text-slate-300">Dashboard.jsx</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* PUBLIC */}
      <div className="mt-2">
        <button
          onClick={() => toggleFolder("public")}
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-slate-800"
        >
          {openFolders.public ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}

          {openFolders.public ? (
            <FolderOpen size={18} className="text-yellow-400" />
          ) : (
            <Folder size={18} className="text-yellow-400" />
          )}

          <span className="text-slate-300">public</span>
        </button>

        {openFolders.public && (
          <div className="ml-6 mt-1">
            <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-800">
              <FileText size={16} className="text-slate-400" />
              <span className="text-slate-300">favicon.ico</span>
            </div>
          </div>
        )}
      </div>

      {/* ROOT FILES */}
      <div className="mt-5 border-t border-slate-700 pt-4 space-y-2">
        <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-800">
          <FileJson size={16} className="text-green-400" />
          <span className="text-slate-300">package.json</span>
        </div>

        <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-800 px-2 py-2">
          <FileCode size={16} className="text-cyan-400" />
          <span className="font-medium text-cyan-300">vite.config.js</span>
        </div>

        <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-800">
          <FileText size={16} className="text-slate-400" />
          <span className="text-slate-300">README.md</span>
        </div>
      </div>
    </aside>
  );
}