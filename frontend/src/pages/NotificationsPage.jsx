import NotificationsHeader from "../components/notifications/NotificationsHeader";
import NotificationStats from "../components/notifications/NotificationStats";
import NotificationFilters from "../components/notifications/NotificationFilters";
import NotificationList from "../components/notifications/NotificationList";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <div className="mx-auto max-w-7xl space-y-8">

        <NotificationsHeader />

        <NotificationStats />

        <NotificationFilters />

        <NotificationList />

      </div>

    </div>
  );
}