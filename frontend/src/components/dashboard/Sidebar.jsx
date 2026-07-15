import {
  LayoutDashboard,
  FolderGit2,
  Bot,
  FileText,
  Boxes,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#111827] border-r border-gray-800 flex flex-col">

      {/* Logo */}

      <div className="px-8 py-8 border-b border-gray-800">

        <h1 className="text-3xl font-black text-white">
          Forge <span className="text-blue-500">AI</span>
        </h1>

        <p className="text-sm text-gray-400 mt-2">
          AI Software Engineering Workspace
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-5 py-8">

        <ul className="space-y-3">

          <li>
            <button className="w-full flex items-center gap-4 rounded-xl bg-blue-600 px-5 py-4 text-white font-medium transition hover:bg-blue-500">

              <LayoutDashboard size={22} />

              Dashboard

            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-[#1F2937]">

              <FolderGit2 size={22} />

              Repositories

            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-[#1F2937]">

              <Bot size={22} />

              AI Chat

            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-[#1F2937]">

              <FileText size={22} />

              Documentation

            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-[#1F2937]">

              <Boxes size={22} />

              Architecture

            </button>
          </li>

          <li>
            <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-[#1F2937]">

              <Settings size={22} />

              Settings

            </button>
          </li>

        </ul>

      </nav>

      {/* Logout */}

      <div className="border-t border-gray-800 p-5">

        <button className="w-full flex items-center gap-4 rounded-xl px-5 py-4 text-red-400 transition hover:bg-red-500/10">

          <LogOut size={22} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;