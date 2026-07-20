import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileCard from "../components/profile/ProfileCard";
import StatsCards from "../components/profile/StatsCards";
import ConnectedAccounts from "../components/profile/ConnectedAccounts";
import RecentRepositories from "../components/profile/RecentRepositories";
import ActivityTimeline from "../components/profile/ActivityTimeline";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <ProfileHeader />

        <StatsCards />

        <div className="grid gap-8 lg:grid-cols-3">
          <ProfileCard />

          <div className="space-y-8 lg:col-span-2">
            <ConnectedAccounts />

            <RecentRepositories />
          </div>
        </div>

        <ActivityTimeline />
      </div>
    </div>
  );
}