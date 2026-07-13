import { FolderGit2, BrainCircuit, FileText, MessageSquare } from "lucide-react";

function DemoPreview() {
  return (
    <section
      id="demo"
      className="bg-[#030712] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-white text-center">
          See Forge AI in Action
        </h2>

        <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto">
          A preview of how Forge AI analyzes repositories and helps developers
          understand complex codebases.
        </p>

        <div className="mt-20 rounded-3xl border border-gray-800 bg-[#111827] shadow-2xl overflow-hidden">

          {/* Top Bar */}

          <div className="flex items-center justify-between border-b border-gray-800 px-8 py-5">

            <div className="flex items-center gap-3">

              <FolderGit2 className="text-blue-500" />

              <span className="text-white font-semibold">
                forge-ai
              </span>

            </div>

            <span className="text-gray-400 text-sm">
              Repository Analysis
            </span>

          </div>

          {/* Dashboard */}

          <div className="grid md:grid-cols-2">

            {/* Left */}

            <div className="p-8 border-r border-gray-800">

              <h3 className="text-white text-2xl font-bold mb-8">
                AI Summary
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <BrainCircuit className="text-blue-500" />
                  <span className="text-gray-300">
                    React Frontend Detected
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <FolderGit2 className="text-blue-500" />
                  <span className="text-gray-300">
                    FastAPI Backend
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <FileText className="text-blue-500" />
                  <span className="text-gray-300">
                    Documentation Generated
                  </span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="p-8">

              <h3 className="text-white text-2xl font-bold mb-8">
                AI Chat
              </h3>

              <div className="bg-[#0F172A] rounded-xl p-5 border border-gray-800">

                <div className="flex items-start gap-3 mb-6">

                  <MessageSquare className="text-blue-500 mt-1" />

                  <p className="text-gray-300">
                    Explain the authentication flow in this project.
                  </p>

                </div>

                <div className="rounded-xl bg-blue-600/10 border border-blue-500/20 p-5">

                  <p className="text-blue-300">
                    Authentication begins from the Login component,
                    validates user credentials using JWT,
                    and securely communicates with the FastAPI backend.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DemoPreview;