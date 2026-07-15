import { Upload } from "lucide-react";

function ZIPPanel() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-10">

      <div className="rounded-2xl border-2 border-dashed border-gray-700 py-20 text-center">

        <Upload size={55} className="mx-auto text-blue-400" />

        <h2 className="mt-6 text-3xl font-bold text-white">
          Upload ZIP File
        </h2>

        <p className="mt-3 text-gray-400">
          Drag & drop your ZIP file here or browse from your computer.
        </p>

        <button className="mt-8 rounded-xl border border-blue-500 px-8 py-4 text-blue-400 hover:bg-blue-500 hover:text-white transition">
          Browse ZIP
        </button>

      </div>

    </div>
  );
}

export default ZIPPanel;