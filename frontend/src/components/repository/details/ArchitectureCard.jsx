import {
  Monitor,
  Server,
  Database,
  BrainCircuit,
  ArrowDown,
} from "lucide-react";

function ArchitectureCard() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        System Architecture
      </h2>

      <div className="flex flex-col items-center space-y-3">

        {/* Frontend */}
        <div className="w-full rounded-xl bg-[#0F172A] border border-gray-800 p-4 flex items-center gap-4">
          <Monitor className="text-blue-400" size={26} />
          <div>
            <h3 className="text-white font-semibold">
              React Frontend
            </h3>
            <p className="text-gray-400 text-sm">
              Dashboard • Upload • AI Chat
            </p>
          </div>
        </div>

        <ArrowDown className="text-gray-500" />

        {/* Backend */}
        <div className="w-full rounded-xl bg-[#0F172A] border border-gray-800 p-4 flex items-center gap-4">
          <Server className="text-green-400" size={26} />
          <div>
            <h3 className="text-white font-semibold">
              FastAPI Backend
            </h3>
            <p className="text-gray-400 text-sm">
              Authentication • APIs • Analysis Engine
            </p>
          </div>
        </div>

        <ArrowDown className="text-gray-500" />

        {/* Database */}
        <div className="w-full rounded-xl bg-[#0F172A] border border-gray-800 p-4 flex items-center gap-4">
          <Database className="text-purple-400" size={26} />
          <div>
            <h3 className="text-white font-semibold">
              PostgreSQL Database
            </h3>
            <p className="text-gray-400 text-sm">
              Users • Repositories • Analysis Results
            </p>
          </div>
        </div>

        <ArrowDown className="text-gray-500" />

        {/* AI */}
        <div className="w-full rounded-xl bg-[#0F172A] border border-gray-800 p-4 flex items-center gap-4">
          <BrainCircuit className="text-yellow-400" size={26} />
          <div>
            <h3 className="text-white font-semibold">
              AI Analysis Engine
            </h3>
            <p className="text-gray-400 text-sm">
              Code Understanding • Documentation • Chat
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ArchitectureCard;