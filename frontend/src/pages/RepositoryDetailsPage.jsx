import RepositoryHeader from "../components/repository/details/RepositoryHeader";
import FileExplorer from "../components/repository/details/FileExplorer";
import AISummary from "../components/repository/details/AISummary";
import RepositoryStats from "../components/repository/details/RepositoryStats";
import DocumentationCard from "../components/repository/details/DocumentationCard";
import ArchitectureCard from "../components/repository/details/ArchitectureCard";
import BugReportCard from "../components/repository/details/BugReportCard";

function RepositoryDetailsPage() {
  return (
    <div className="min-h-screen bg-[#030712]">

      <div className="mx-auto max-w-7xl px-8 py-10">

        <RepositoryHeader />

        <div className="mt-8 grid grid-cols-12 gap-6">

          {/* Left Side */}
          <div className="col-span-4">
            <FileExplorer />
          </div>

          {/* Right Side */}
          <div className="col-span-8 space-y-6">

            <AISummary />

            <RepositoryStats />

            <div className="grid md:grid-cols-2 gap-6">

              <DocumentationCard />

              <ArchitectureCard />

            </div>

            <BugReportCard />

          </div>

        </div>

      </div>

    </div>
  );
}

export default RepositoryDetailsPage;