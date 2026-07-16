import {
  FileText,
  CheckCircle2,
  Clock3,
  Download,
} from "lucide-react";

function DocumentationCard() {
  const docs = [
    {
      name: "README.md",
      status: "Generated",
      color: "text-green-400",
      icon: <CheckCircle2 size={18} className="text-green-400" />,
    },
    {
      name: "API.md",
      status: "Generated",
      color: "text-green-400",
      icon: <CheckCircle2 size={18} className="text-green-400" />,
    },
    {
      name: "Architecture.md",
      status: "Generating...",
      color: "text-yellow-400",
      icon: <Clock3 size={18} className="text-yellow-400" />,
    },
    {
      name: "Installation.md",
      status: "Generated",
      color: "text-green-400",
      icon: <CheckCircle2 size={18} className="text-green-400" />,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Generated Documentation
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            AI-generated project documentation
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition">

          <Download size={18} />

          Export

        </button>

      </div>

      <div className="space-y-4">

        {docs.map((doc) => (

          <div
            key={doc.name}
            className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#0F172A] p-4 hover:border-blue-500 transition"
          >

            <div className="flex items-center gap-3">

              <FileText className="text-blue-400" size={22} />

              <div>

                <h3 className="text-white font-medium">
                  {doc.name}
                </h3>

                <p className={`text-sm ${doc.color}`}>
                  {doc.status}
                </p>

              </div>

            </div>

            {doc.icon}

          </div>

        ))}

      </div>

    </div>
  );
}

export default DocumentationCard;