import ArchitectureHeader from "../components/architecture/ArchitectureHeader";
import ArchitectureSidebar from "../components/architecture/ArchitectureSidebar";
import ArchitectureCanvas from "../components/architecture/ArchitectureCanvas";
import ArchitectureInfoPanel from "../components/architecture/ArchitectureInfoPanel";
import ArchitectureControls from "../components/architecture/ArchitectureControls";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex h-screen flex-col">

        {/* Header */}
        <div className="border-b border-slate-800 bg-slate-950 px-6 pt-6">
          <ArchitectureHeader />
        </div>

        {/* Main Content */}
        <main className="flex flex-1 gap-6 overflow-hidden p-6">

          {/* Sidebar */}
          <div className="w-72 flex-shrink-0">
            <ArchitectureSidebar />
          </div>

          {/* Architecture Graph */}
          <div className="flex-1 overflow-hidden">
            <ArchitectureCanvas />
          </div>

          {/* AI Insights */}
          <div className="w-80 flex-shrink-0">
            <ArchitectureInfoPanel />
          </div>

        </main>

        {/* Bottom Controls */}
        <div className="border-t border-slate-800 px-6 pb-6">
          <ArchitectureControls />
        </div>

      </div>
    </div>
  );
}