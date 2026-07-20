import NotificationCard from "./NotificationCard";

const notifications = [
  {
    type: "security",
    title: "Critical Vulnerability Detected",
    description:
      "A dependency contains a known security vulnerability.",
    time: "5 min ago",
    unread: true,
  },
  {
    type: "repository",
    title: "Repository Analysis Completed",
    description:
      "Forge AI finished analyzing your repository.",
    time: "20 min ago",
    unread: true,
  },
  {
    type: "ai",
    title: "Documentation Generated",
    description:
      "AI successfully generated documentation.",
    time: "1 hour ago",
    unread: false,
  },
  {
    type: "repository",
    title: "Architecture Diagram Ready",
    description:
      "Repository architecture visualization is available.",
    time: "Yesterday",
    unread: false,
  },
  {
    type: "account",
    title: "Profile Updated",
    description:
      "Your account information was updated successfully.",
    time: "2 days ago",
    unread: false,
  },
];

export default function NotificationList() {
  return (
    <div className="space-y-5">
      {notifications.map((item, index) => (
        <NotificationCard
          key={index}
          {...item}
        />
      ))}
    </div>
  );
}