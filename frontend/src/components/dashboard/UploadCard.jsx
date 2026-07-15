import { Upload, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
function UploadCard() {
  return (
    <div className="mt-8 rounded-2xl border border-gray-800 bg-[#111827] p-8">

      {/* Heading */}

      <div className="flex items-center gap-3">

        <FolderGit2 size={28} className="text-blue-500" />

        <div>
          <h2 className="text-2xl font-bold text-white">
            Upload Repository
          </h2>

          <p className="text-gray-400 mt-1">
            Import a GitHub repository or upload a ZIP file for AI analysis.
          </p>
        </div>

      </div>

      {/* Buttons */}

      <div className="mt-8 flex flex-wrap gap-5">

        <button className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-500 transition">

          <FaGithub size={22} />

          Connect GitHub

        </button>

        <button className="flex items-center gap-3 rounded-xl border border-gray-700 px-6 py-4 text-gray-300 hover:bg-gray-800 transition">

          <Upload size={22} />

          Upload ZIP

        </button>

      </div>

      {/* Placeholder */}

      <div className="mt-8 rounded-xl border-2 border-dashed border-gray-700 p-12 text-center">

        <Upload size={40} className="mx-auto text-gray-500" />

        <p className="mt-4 text-lg text-gray-300">
          Drag & Drop Repository ZIP Here
        </p>

        <p className="mt-2 text-gray-500">
          or choose a repository from GitHub.
        </p>

      </div>

    </div>
  );
}

export default UploadCard;