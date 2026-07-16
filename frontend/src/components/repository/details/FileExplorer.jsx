import {
  Folder,
  FolderOpen,
  FileCode,
  FileText,
} from "lucide-react";

function FileExplorer() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6 h-full">

      <h2 className="text-xl font-bold text-white mb-6">
        Repository Files
      </h2>

      <div className="space-y-2 text-sm">

        {/* src */}
        <div className="flex items-center gap-2 text-blue-400 font-medium">
          <FolderOpen size={18} />
          src
        </div>

        <div className="ml-6 space-y-2">

          {/* components */}
          <div className="flex items-center gap-2 text-yellow-400">
            <FolderOpen size={17} />
            components
          </div>

          <div className="ml-6 space-y-1">

            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
              <FileCode size={16} />
              Sidebar.jsx
            </div>

            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
              <FileCode size={16} />
              Topbar.jsx
            </div>

            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
              <FileCode size={16} />
              UploadCard.jsx
            </div>

          </div>

          {/* pages */}

          <div className="flex items-center gap-2 text-yellow-400 mt-4">
            <Folder size={17} />
            pages
          </div>

          <div className="ml-6 space-y-1">

            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
              <FileCode size={16} />
              DashboardPage.jsx
            </div>

            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
              <FileCode size={16} />
              LoginPage.jsx
            </div>

            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
              <FileCode size={16} />
              RepositoryUpload.jsx
            </div>

          </div>

          {/* hooks */}

          <div className="flex items-center gap-2 text-yellow-400 mt-4">
            <Folder size={17} />
            hooks
          </div>

          <div className="ml-6">

            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
              <FileCode size={16} />
              useAuth.js
            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-5" />

        <div className="space-y-2">

          <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
            <FileText size={16} />
            README.md
          </div>

          <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
            <FileCode size={16} />
            package.json
          </div>

          <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
            <FileCode size={16} />
            vite.config.js
          </div>

        </div>

      </div>

    </div>
  );
}

export default FileExplorer;