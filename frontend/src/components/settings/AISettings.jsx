import { useState } from "react";
import { Bot, BrainCircuit, SlidersHorizontal, Sparkles } from "lucide-react";

export default function AISettings() {
  const [model, setModel] = useState("GPT-5");
  const [temperature, setTemperature] = useState(0.7);
  const [responseLength, setResponseLength] = useState("Balanced");

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8 shadow-xl backdrop-blur">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600">
          <Bot className="text-white" size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Preferences
          </h2>

          <p className="text-sm text-slate-400">
            Configure how Forge AI responds while analyzing your repositories.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* AI Model */}
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300">
            <BrainCircuit size={16} />
            Preferred AI Model
          </label>

          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-purple-500"
          >
            <option>GPT-5</option>
            <option>Claude 4</option>
            <option>Gemini 2.5</option>
            <option>DeepSeek</option>
          </select>
        </div>

        {/* Temperature */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <SlidersHorizontal size={16} />
              Temperature
            </label>

            <span className="rounded-lg bg-slate-900 px-3 py-1 text-sm text-cyan-400">
              {temperature}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full accent-cyan-500"
          />
        </div>

        {/* Response Length */}
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300">
            <Sparkles size={16} />
            Response Length
          </label>

          <div className="grid gap-3 md:grid-cols-3">
            {["Short", "Balanced", "Detailed"].map((option) => (
              <button
                key={option}
                onClick={() => setResponseLength(option)}
                className={`rounded-xl border px-5 py-3 transition ${
                  responseLength === option
                    ? "border-cyan-500 bg-cyan-500/20 text-cyan-400"
                    : "border-slate-600 bg-slate-900 text-slate-300 hover:border-cyan-500"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Current Configuration
          </h3>

          <div className="space-y-2 text-sm text-slate-400">
            <p>
              <span className="text-white">Model:</span> {model}
            </p>

            <p>
              <span className="text-white">Temperature:</span> {temperature}
            </p>

            <p>
              <span className="text-white">Response Length:</span>{" "}
              {responseLength}
            </p>
          </div>
        </div>

        <button className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 font-semibold text-white transition hover:scale-105">
          Save AI Preferences
        </button>
      </div>
    </div>
  );
}