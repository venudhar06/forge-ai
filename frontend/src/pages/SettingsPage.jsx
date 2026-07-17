import SettingsHeader from "../components/settings/SettingsHeader";
import ProfileSettings from "../components/settings/ProfileSettings";
import AISettings from "../components/settings/AISettings";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SettingsHeader />

        {/* Settings Sections */}
        <div className="mt-8 space-y-8">
          <ProfileSettings />

          <AISettings />

          <AppearanceSettings />

          <NotificationSettings />

          <SecuritySettings />

          <ConnectedAccounts />
        </div>
      </div>
    </div>
  );
}