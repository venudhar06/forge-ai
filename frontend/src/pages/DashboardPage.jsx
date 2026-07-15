import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import UploadCard from "../components/dashboard/UploadCard";
import RecentRepositories from "../components/dashboard/RecentRepositories";
function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#030712]">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />
        <UploadCard/>
<RecentRepositories/>
      </main>

    </div>
  );
}

export default DashboardPage;