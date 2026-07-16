import { Bot, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ChatHeader() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#111827] px-8 py-6">

      {/* Left */}

      <div>

        <Link
          to="/repository/1"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
        >
          <ArrowLeft size={18} />
          Back to Repository
        </Link>

        <div className="mt-4 flex items-center gap-4">

          <div className="rounded-xl bg-blue-600/20 p-3">
            <Bot className="text-blue-400" size={28} />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">
              Forge AI Assistant
            </h1>

            <p className="mt-1 text-gray-400">
              Ask anything about your repository.
            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="text-right">

        <p className="text-sm text-gray-500">
          Current Repository
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          Forge AI
        </h3>

        <span className="mt-2 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
          Analysis Complete
        </span>

      </div>

    </div>
  );
}

export default ChatHeader;