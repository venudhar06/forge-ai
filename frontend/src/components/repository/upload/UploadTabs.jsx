import { Link2, Upload } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function UploadTabs({ activeTab, setActiveTab }) {
  return (
    <div className="mt-10">

      <div className="flex rounded-2xl bg-[#111827] p-2 border border-gray-800">

        <button
          onClick={() => setActiveTab("github")}
          className={`flex-1 rounded-xl py-4 font-semibold transition ${
            activeTab === "github"
              ? "bg-blue-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <FaGithub size={20} />
            GitHub
          </div>
        </button>

        <button
          onClick={() => setActiveTab("url")}
          className={`flex-1 rounded-xl py-4 font-semibold transition ${
            activeTab === "url"
              ? "bg-blue-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <Link2 size={20} />
            Repository URL
          </div>
        </button>

        <button
          onClick={() => setActiveTab("zip")}
          className={`flex-1 rounded-xl py-4 font-semibold transition ${
            activeTab === "zip"
              ? "bg-blue-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <Upload size={20} />
            ZIP Upload
          </div>
        </button>

      </div>

    </div>
  );
}

export default UploadTabs;