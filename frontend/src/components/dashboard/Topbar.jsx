import { Search, Bell, UserCircle } from "lucide-react";

function Topbar() {
  return (
    <header className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#111827] px-8 py-5">

      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-1 text-gray-400">
          Manage your repositories with AI assistance.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center rounded-xl border border-gray-700 bg-[#0F172A] px-4 py-3">

          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search repositories..."
            className="ml-3 w-72 bg-transparent text-white outline-none placeholder:text-gray-500"
          />

        </div>

        {/* Notification */}

        <button className="rounded-xl border border-gray-700 bg-[#0F172A] p-3 text-gray-300 hover:bg-gray-800 transition">
          <Bell size={22} />
        </button>

        {/* Profile */}

        <button className="rounded-xl border border-gray-700 bg-[#0F172A] p-3 text-gray-300 hover:bg-gray-800 transition">
          <UserCircle size={24} />
        </button>

      </div>

    </header>
  );
}

export default Topbar;