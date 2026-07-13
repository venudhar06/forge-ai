import { Globe, Mail, Code2 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Forge AI
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              AI-powered software engineering workspace that helps developers
              understand, analyze and improve repositories with intelligent
              code assistance.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#demo"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Demo
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Connect
            </h3>

            <div className="flex gap-5">

              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Code2 size={24} />
              </a>

              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Globe size={24} />
              </a>

              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Mail size={24} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          © 2026 Forge AI. Built with React, FastAPI and ❤️.
        </div>

      </div>
    </footer>
  );
}

export default Footer;