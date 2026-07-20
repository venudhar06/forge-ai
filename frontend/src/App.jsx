import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import RepositoryDetailsPage from "./pages/RepositoryDetailsPage";
import ChatPage from "./pages/ChatPage";

import SignupPage from "./pages/SignupPage";
import RepositoryUploadPage from "./pages/RepositoryUploadPage";
import SettingsPage from "./pages/SettingsPage";
import DocumentationPage from "./pages/DocumentationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CodeViewerPage from "./pages/CodeViewerPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import ProfilePage from "./pages/ProfilePage";
import AnalysisDashboardPage from "./pages/AnalysisDashboardPage";
import NotificationsPage from "./pages/NotificationsPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServerErrorPage from "./pages/ServerErrorPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
<Route
    path="/analysis"
    element={<AnalysisDashboardPage />}
/>
      
      <Route
    path="/repository/:id"
    element={<RepositoryDetailsPage />}
/>

      <Route
    path="/ai-chat"
    element={<ChatPage />}
/>

      
      <Route path="/signup" element={<SignupPage />} />
<Route path="/upload" element={<RepositoryUploadPage />} />
<Route path="/settings" element={<SettingsPage />} />

<Route path="/documentation" element={<DocumentationPage />} />
<Route
  path="/500"
  element={<ServerErrorPage />}
/>

<Route
  path="/401"
  element={<UnauthorizedPage />}
/>

<Route
  path="*"
  element={<NotFoundPage />}
/>
<Route path="/forgot-password" element={<ForgotPasswordPage />} />
 <Route path="/code-viewer" element={<CodeViewerPage />} />
    <Route
    path="/architecture"
    element={<ArchitecturePage />}
/>
<Route
  path="/profile"
  element={<ProfilePage />}
/>
<Route
  path="/notifications"
  element={<NotificationsPage />}
/>
<Route
  path="/search"
  element={<SearchPage />}
/>
    </Routes>
  );
}

export default App;