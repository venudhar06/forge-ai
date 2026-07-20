import DocumentationHeader from "../components/documentation/DocumentationHeader";
import DocumentationSidebar from "../components/documentation/DocumentationSidebar";
import DocumentationContent from "../components/documentation/DocumentationContent";
import TableOfContents from "../components/documentation/TableOfContents";
import DocumentationActions from "../components/documentation/DocumentationActions";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex h-screen flex-col">
        {/* Header */}
        <div className="border-b border-slate-800 bg-slate-950 px-6 pt-6">
          <DocumentationHeader />
        </div>

        {/* Main Workspace */}
        <main className="flex flex-1 gap-6 overflow-hidden p-6">
          {/* Sidebar */}
          <div className="w-72 flex-shrink-0">
            <DocumentationSidebar />
          </div>

          {/* Documentation */}
          <div className="flex-1 overflow-hidden">
            <DocumentationContent />
          </div>

          {/* Table of Contents */}
          <div className="w-72 flex-shrink-0">
            <TableOfContents />
          </div>
        </main>

        {/* Bottom Actions */}
        <div className="border-t border-slate-800 px-6 pb-6">
          <DocumentationActions />
        </div>
      </div>
    </div>
  );
}