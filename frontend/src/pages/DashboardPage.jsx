import Sidebar from "../components/dashboard/Sidebar";

function DashboardPage() {
  return (
    <div className="flex bg-[#030712] min-h-screen">

      <Sidebar />

      <div className="flex-1 flex items-center justify-center">

        <h1 className="text-5xl font-bold text-white">
          Dashboard
        </h1>

      </div>

    </div>
  );
}

export default DashboardPage;