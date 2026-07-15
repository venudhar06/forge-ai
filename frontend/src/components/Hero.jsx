
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] px-6">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-8">
          🚀 AI Powered Software Engineering Workspace
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">

          <span className="text-white">
            The AI Software
          </span>

          <br />

          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
            Engineer
          </span>

        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-8">
          Upload any GitHub repository and let AI understand your codebase,
          generate documentation, explain architecture, detect bugs,
          and answer questions about your project.
        </p>

       {/* Buttons */}
<div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

 <Link
  to="/login"
  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-500 transition"
>
  Get Started
  <ArrowRight size={18} />
</Link>

  <button
    onClick={() =>
      document
        .getElementById("demo")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="rounded-xl border border-gray-700 px-8 py-4 text-white font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition"
  >
    Watch Demo
  </button>

</div>

      </div>

    </section>
  );
}

export default Hero;