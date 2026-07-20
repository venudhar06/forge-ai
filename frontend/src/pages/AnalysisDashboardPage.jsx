import AnalysisHeader from "../components/analysis/AnalysisHeader";
import HealthOverview from "../components/analysis/HealthOverview";
import MetricsGrid from "../components/analysis/MetricsGrid";
import LanguageDistribution from "../components/analysis/LanguageDistribution";
import DependencyAnalysis from "../components/analysis/DependencyAnalysis";
import SecurityPanel from "../components/analysis/SecurityPanel";
import AIRecommendations from "../components/analysis/AIRecommendations";
import ComplexityChart from "../components/analysis/ComplexityChart";
import RecentIssues from "../components/analysis/RecentIssues";

export default function AnalysisDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">

      <div className="mx-auto max-w-7xl space-y-6">

        {/* Header */}
        <AnalysisHeader />

        {/* Health Cards */}
        <HealthOverview />

        {/* Metrics + Languages */}
        <div className="grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <MetricsGrid />
          </div>

          <LanguageDistribution />

        </div>

        {/* Dependencies + Security */}
        <div className="grid gap-6 lg:grid-cols-2">

          <DependencyAnalysis />

          <SecurityPanel />

        </div>

        {/* AI Recommendations */}
        <AIRecommendations />

        {/* Complexity + Recent Issues */}
        <div className="grid gap-6 lg:grid-cols-2">

          <ComplexityChart />

          <RecentIssues />

        </div>

      </div>

    </div>
  );
}