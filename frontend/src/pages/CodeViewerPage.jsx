import CodeViewerHeader from "../components/codeviewer/CodeViewerHeader";
import Breadcrumb from "../components/codeviewer/Breadcrumb";
import FileExplorer from "../components/codeviewer/FileExplorer";
import CodeEditor from "../components/codeviewer/CodeEditor";
import AIExplanationPanel from "../components/codeviewer/AIExplanationPanel";
import BottomStatusBar from "../components/codeviewer/BottomStatusBar";

export default function CodeViewerPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex h-screen flex-col">
        {/* Header */}
        <div className="border-b border-slate-800 bg-slate-950 px-6 pt-6">
          <CodeViewerHeader />
          <div className="mt-4">
            <Breadcrumb />
          </div>
        </div>

        {/* Main Workspace */}
        <main className="flex flex-1 overflow-hidden p-6 gap-6">
          {/* File Explorer */}
          <div className="w-72 flex-shrink-0">
            <FileExplorer />
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor />
          </div>

          {/* AI Panel */}
          <div className="w-96 flex-shrink-0">
            <AIExplanationPanel />
          </div>
        </main>

        {/* Bottom Status Bar */}
        <div className="border-t border-slate-800 px-6 pb-4">
          <BottomStatusBar />
        </div>
      </div>
    </div>
  );
}