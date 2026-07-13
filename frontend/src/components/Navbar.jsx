import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
            F
          </div>

          <h1 className="text-white text-2xl font-bold">
            Forge AI
          </h1>
        </div>

       <div className="hidden md:flex items-center gap-8 text-gray-300">
  <a href="#" className="hover:text-white transition">Features</a>
  <a href="#" className="hover:text-white transition">Docs</a>
  <a href="#" className="hover:text-white transition">Pricing</a>

  <button className="border border-white/20 px-5 py-2 rounded-xl text-white hover:bg-white hover:text-black transition">
    Login
  </button>

  <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl text-white transition">
    Get Started
  </button>
</div>

<Menu className="text-white md:hidden" />

      </div>
    </nav>
  );
}

export default Navbar;