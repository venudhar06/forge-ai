function LoginPage() {
  return (
    <div className="min-h-screen bg-[#030712] flex">

      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-20">

        <div className="mb-8">
          <h1 className="text-5xl font-black text-white">
            Forge <span className="text-blue-500">AI</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-md">
            AI-powered software engineering workspace that helps developers
            understand, document, and improve any GitHub repository.
          </p>
        </div>

        <div className="space-y-5">

          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">✓</span>
            <span className="text-gray-300">
              AI Repository Analysis
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">✓</span>
            <span className="text-gray-300">
              Architecture Visualization
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">✓</span>
            <span className="text-gray-300">
              AI Chat with your Codebase
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">✓</span>
            <span className="text-gray-300">
              Automatic Documentation
            </span>
          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-[#111827] rounded-3xl p-10 border border-gray-800 shadow-2xl">

          <h2 className="text-4xl font-bold text-white text-center">
            Welcome Back
          </h2>

          <p className="text-gray-400 text-center mt-3">
            Sign in to continue to Forge AI
          </p>

          <div className="mt-12 h-72 rounded-2xl border-2 border-dashed border-gray-700 flex items-center justify-center">

            <span className="text-gray-500 text-lg">
              Login Form Coming Next →
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;