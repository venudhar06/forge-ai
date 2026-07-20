import { Copy, Check, Download } from "lucide-react";
import { useState } from "react";

const sampleCode = `import React from "react";

export default function Button({ children }) {
  return (
    <button className="rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600">
      {children}
    </button>
  );
}
`;

export default function CodeEditor() {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(sampleCode);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <section className="flex h-full flex-1 flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-700 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

          <span className="ml-3 text-sm text-slate-300">
            Button.jsx
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={copyCode}
            className="rounded-lg p-2 hover:bg-slate-800"
          >
            {copied ? (
              <Check size={18} className="text-green-400" />
            ) : (
              <Copy size={18} className="text-slate-300" />
            )}
          </button>

          <button className="rounded-lg p-2 hover:bg-slate-800">
            <Download size={18} className="text-slate-300" />
          </button>
        </div>
      </div>

      {/* Code */}
      <div className="flex-1 overflow-auto bg-slate-950 p-6 font-mono text-sm leading-7 text-slate-200">
        <pre>{sampleCode}</pre>
      </div>
    </section>
  );
}