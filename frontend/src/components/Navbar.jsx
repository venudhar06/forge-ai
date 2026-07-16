import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
            F
          </div>
<a
  href="#home"
  className="font-bold text-white text-2xl"
>
  Forge AI
</a>
        </div>

       <div className="hidden md:flex items-center gap-8 text-gray-300">
  <a
  href="#features"
  className="text-gray-300 hover:text-white transition"
>
  Features
</a>
  <a
  href="#docs"
  className="text-gray-300 hover:text-white transition"
>
  Docs
</a>
  <a
  href="#pricing"
  className="text-gray-300 hover:text-white transition"
>
  Pricing
</a>
  <Link
  to="/login"
  className="rounded-xl border border-gray-700 px-5 py-2 text-white hover:border-blue-500 transition"
>
  Login
</Link>
<Link
  to="/login"
  className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-500 transition"
>
  Get Started
</Link>
</div>

<Menu className="text-white md:hidden" />

      </div>
    </nav>
  );
}

export default Navbar;