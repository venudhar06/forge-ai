import { Link2 } from "lucide-react";

function URLPanel() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-10">

      <div className="flex flex-col items-center text-center">

        <Link2 size={55} className="text-blue-400" />

        <h2 className="mt-6 text-3xl font-bold text-white">
          Analyze GitHub Repository
        </h2>

        <p className="mt-3 max-w-xl text-gray-400">
          Paste a public GitHub repository URL and let Forge AI analyze your
          project.
        </p>

        <input
          type="text"
          placeholder="https://github.com/user/repository"
          className="mt-8 w-full max-w-3xl rounded-xl border border-gray-700 bg-[#0F172A] px-5 py-4 text-white outline-none focus:border-blue-500"
        />

        <button className="mt-6 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-500 transition">
          Analyze Repository
        </button>

      </div>

    </div>
  );
}

export default URLPanel;