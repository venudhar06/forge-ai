import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import RepositoryDetailsPage from "./pages/RepositoryDetailsPage";
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/NotFound";
import SignupPage from "./pages/SignupPage";
import RepositoryUploadPage from "./pages/RepositoryUploadPage";
import SettingsPage from "./pages/SettingsPage";
import DocumentationPage from "./pages/DocumentationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CodeViewerPage from "./pages/CodeViewerPage";
import ArchitecturePage from "./pages/ArchitecturePage";
function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      
      <Route
    path="/repository/:id"
    element={<RepositoryDetailsPage />}
/>

      <Route
    path="/ai-chat"
    element={<ChatPage />}
/>

      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<SignupPage />} />
<Route path="/upload" element={<RepositoryUploadPage />} />
<Route path="/settings" element={<SettingsPage />} />

<Route path="/documentation" element={<DocumentationPage />} />

<Route path="/forgot-password" element={<ForgotPasswordPage />} />
 <Route path="/code-viewer" element={<CodeViewerPage />} />
    <Route
    path="/architecture"
    element={<ArchitecturePage />}
/>
    </Routes>
  );
}

export default App;