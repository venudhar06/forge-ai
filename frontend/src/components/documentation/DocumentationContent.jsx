import { Info, AlertTriangle, CheckCircle2, Copy } from "lucide-react";

export default function DocumentationContent() {
  return (
    <main className="flex-1 overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
      {/* Header */}
      <div className="border-b border-slate-700 p-8">
        <h1 className="text-4xl font-bold text-white">
          Forge AI Documentation
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Automatically generated technical documentation for your repository.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-400">
            React
          </span>

          <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
            FastAPI
          </span>

          <span className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-400">
            PostgreSQL
          </span>

          <span className="rounded-full bg-orange-500/20 px-4 py-2 text-sm text-orange-400">
            OpenAI API
          </span>
        </div>
      </div>

      <div className="space-y-10 p-8">

        {/* Overview */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Project Overview
          </h2>

          <p className="leading-8 text-slate-300">
            Forge AI is an AI-powered software engineering workspace that
            enables developers to upload repositories, analyze project
            architecture, generate technical documentation, identify bugs,
            perform security analysis, and interact with their codebase
            through conversational AI.
          </p>
        </section>

        {/* Info */}
        <div className="flex items-start gap-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5">
          <Info className="mt-1 text-cyan-400" size={22} />

          <div>
            <h3 className="font-semibold text-cyan-400">
              AI Generated Documentation
            </h3>

            <p className="mt-2 text-slate-300">
              This documentation is automatically generated from the uploaded
              repository using static code analysis, repository indexing,
              architecture detection, and AI summarization.
            </p>
          </div>
        </div>

        {/* Folder Structure */}
        <section>
          <h2 className="mb-5 text-2xl font-bold text-white">
            Project Structure
          </h2>

          <div className="rounded-xl bg-slate-950 p-6 font-mono text-sm text-slate-300 overflow-x-auto">
{`src/
├── components/
│   ├── dashboard/
│   ├── repository/
│   ├── codeviewer/
│   └── documentation/
│
├── pages/
│   ├── DashboardPage.jsx
│   ├── RepositoryPage.jsx
│   ├── CodeViewerPage.jsx
│   └── DocumentationPage.jsx
│
├── services/
├── hooks/
├── assets/
└── App.jsx`}
          </div>
        </section>

        {/* Installation */}
        <section>
          <h2 className="mb-5 text-2xl font-bold text-white">
            Installation
          </h2>

          <div className="relative rounded-xl bg-slate-950 p-6">
            <button className="absolute right-5 top-5 rounded-lg border border-slate-700 p-2 hover:bg-slate-800">
              <Copy size={16} className="text-slate-300" />
            </button>

            <pre className="overflow-x-auto text-sm text-green-400">
{`git clone https://github.com/username/forge-ai.git

cd forge-ai

npm install

npm run dev`}
            </pre>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">
            System Architecture
          </h2>

          <div className="rounded-xl border border-slate-700 bg-slate-950 p-6">
            <div className="space-y-4 text-slate-300">

              <div>Frontend (React)</div>

              <div className="pl-8">↓</div>

              <div>FastAPI Backend</div>

              <div className="pl-8">↓</div>

              <div>Repository Parser</div>

              <div className="pl-8">↓</div>

              <div>AI Analysis Engine</div>

              <div className="pl-8">↓</div>

              <div>Documentation Generator</div>

            </div>
          </div>
        </section>

        {/* Success */}
        <div className="flex items-start gap-4 rounded-xl border border-green-500/30 bg-green-500/10 p-5">
          <CheckCircle2
            className="mt-1 text-green-400"
            size={22}
          />

          <div>
            <h3 className="font-semibold text-green-400">
              Repository Successfully Analyzed
            </h3>

            <p className="mt-2 text-slate-300">
              Documentation generation completed successfully. All repository
              modules have been indexed and summarized.
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="flex items-start gap-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5">
          <AlertTriangle
            className="mt-1 text-yellow-400"
            size={22}
          />

          <div>
            <h3 className="font-semibold text-yellow-400">
              Recommendations
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              <li>Add API authentication documentation.</li>
              <li>Include deployment guide.</li>
              <li>Document environment variables.</li>
              <li>Generate UML diagrams.</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}