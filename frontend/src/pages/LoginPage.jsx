

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] flex">
      {/* Left Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-20">
        <h1 className="text-5xl font-black text-white">
          Forge <span className="text-blue-500">AI</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-md leading-8">
          AI-powered software engineering workspace for understanding,
          documenting and improving repositories.
        </p>

        <div className="mt-10 space-y-4">
          {[
            "AI Repository Analysis",
            "Architecture Visualization",
            "AI Chat with Codebase",
            "Automatic Documentation",
          ].map((item)=>(
            <div key={item} className="flex gap-3 items-center">
              <span className="text-blue-500">✓</span>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Login Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-[#111827] p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-white text-center">
            Welcome Back
          </h2>

          <p className="text-gray-400 text-center mt-3">
            Sign in to continue to Forge AI
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label className="text-sm text-gray-300">Email Address</label>
              <div className="mt-2 flex items-center rounded-xl border border-gray-700 bg-[#0F172A] px-4 py-3 focus-within:border-blue-500">
                <Mail size={20} className="text-gray-400"/>
                <input className="ml-3 w-full bg-transparent outline-none text-white"
                  placeholder="you@example.com"/>
              </div>
            </div>

            {/* Password */}

<div>
  <label className="block text-sm font-medium text-gray-300 mb-2">
    Password
  </label>

  <div className="flex items-center rounded-xl border border-gray-700 bg-[#0F172A] px-4 py-3 transition-all duration-200 focus-within:border-blue-500">

    <Lock size={20} className="text-gray-400 flex-shrink-0" />

    <input
      type={showPassword ? "text" : "password"}
      placeholder="••••••••"
      className="ml-3 flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition"
    >
      {showPassword ? (
        <EyeOff size={20} />
      ) : (
        <Eye size={20} />
      )}
    </button>

  </div>
</div>

            <div className="flex justify-between text-sm">
              <label className="flex gap-2 text-gray-400">
                <input type="checkbox" className="accent-blue-600"/>
                Remember Me
              </label>

              <button type="button" className="text-blue-400">
                Forgot Password?
              </button>
            </div>

            <button className="w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-500 transition">
              Continue
            </button>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-700"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="h-px flex-1 bg-gray-700"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 rounded-xl border border-gray-700 py-4 text-white hover:bg-gray-800 transition">
              <FaGithub size={22}/>
              Continue with GitHub
            </button>

            <p className="text-center text-gray-400">
              Don't have an account?
              <button type="button" className="ml-2 text-blue-400 hover:text-blue-300">
                Create Account
              </button>
            </p>

            <p className="text-center text-xs text-gray-500 leading-6">
              By continuing you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
