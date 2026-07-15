import {
  Upload,
  Bot,
  FileText,
  Network,
  CheckCircle,
} from "lucide-react";

function ActivityTimeline() {

  const activities = [
    {
      icon: <Upload size={20} />,
      title: "Repository Uploaded",
      description: "Forge AI repository imported successfully.",
      time: "2 min ago",
      color: "text-blue-400",
    },

    {
      icon: <Bot size={20} />,
      title: "AI Analysis Started",
      description: "Repository structure is being analyzed.",
      time: "1 min ago",
      color: "text-cyan-400",
    },

    {
      icon: <FileText size={20} />,
      title: "Documentation Generated",
      description: "README and documentation created.",
      time: "Just now",
      color: "text-green-400",
    },

    {
      icon: <Network size={20} />,
      title: "Architecture Generated",
      description: "System architecture diagram prepared.",
      time: "Just now",
      color: "text-purple-400",
    },

    {
      icon: <CheckCircle size={20} />,
      title: "Analysis Completed",
      description: "Repository is ready for AI Chat.",
      time: "Now",
      color: "text-green-500",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-gray-800 bg-[#111827] p-8">

      <h2 className="text-2xl font-bold text-white mb-8">
        Activity Timeline
      </h2>

      <div className="space-y-6">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex items-start gap-5"
          >

            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F172A] ${activity.color}`}
            >
              {activity.icon}
            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between">

                <h3 className="text-white font-semibold">
                  {activity.title}
                </h3>

                <span className="text-sm text-gray-500">
                  {activity.time}
                </span>

              </div>

              <p className="mt-1 text-gray-400">
                {activity.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityTimeline;