import { Bug, ShieldCheck, FileText, Network } from "lucide-react";

function AIInsights() {
  const insights = [
    {
      title: "Bugs Found",
      value: "12",
      icon: <Bug size={28} />,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      title: "Security Issues",
      value: "2",
      icon: <ShieldCheck size={28} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Documentation",
      value: "82%",
      icon: <FileText size={28} />,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Architecture",
      value: "Ready",
      icon: <Network size={28} />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        AI Insights
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {insights.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-gray-800 bg-[#111827] p-6 hover:border-blue-500 transition"
          >

            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}
            >
              {item.icon}
            </div>

            <h3 className="mt-5 text-gray-400">
              {item.title}
            </h3>

            <p className={`mt-2 text-3xl font-bold ${item.color}`}>
              {item.value}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsights;