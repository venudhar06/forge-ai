import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function UploadHeader() {
  return (
    <div>

      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>

      <h1 className="mt-6 text-5xl font-black text-white">
        Upload Repository
      </h1>

      <p className="mt-3 text-lg text-gray-400">
        Choose one method to import your repository.
      </p>

    </div>
  );
}

export default UploadHeader;