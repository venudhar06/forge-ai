import {
  ShieldCheck,
  AlertTriangle,
  Bug,
  CheckCircle2,
} from "lucide-react";

function BugReportCard() {
  const findings = [
    {
      icon: <ShieldCheck size={20} className="text-green-400" />,
      title: "Authentication",
      status: "Secure",
      color: "text-green-400",
    },
    {
      icon: <Bug size={20} className="text-red-400" />,
      title: "Critical Bugs",
      status: "0 Found",
      color: "text-red-400",
    },
    {
      icon: <AlertTriangle size={20} className="text-yellow-400" />,
      title: "Warnings",
      status: "2 Improvements",
      color: "text-yellow-400",
    },
    {
      icon: <CheckCircle2 size={20} className="text-cyan-400" />,
      title: "Code Quality",
      status: "Excellent",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Security Report
          </h2>

          <p className="text-gray-400 mt-1">
            AI-generated repository health analysis
          </p>
        </div>

        <span className="rounded-full bg-green-500/10 px-4 py-2 text-green-400 font-semibold">
          Overall Healthy
        </span>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {findings.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-gray-800 bg-[#0F172A] p-5 hover:border-blue-500 transition"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                {item.icon}

                <div>
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>

                  <p className={`text-sm ${item.color}`}>
                    {item.status}
                  </p>
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

      <div className="mt-8 rounded-xl bg-[#0F172A] border border-gray-800 p-5">

        <h3 className="text-white font-semibold mb-3">
          AI Recommendations
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li>• Add automated unit tests for authentication routes.</li>

          <li>• Configure Docker for production deployment.</li>

          <li>• Enable API response caching for better performance.</li>

          <li>• Improve logging for exception handling.</li>

        </ul>

      </div>

    </div>
  );
}

export default BugReportCard;