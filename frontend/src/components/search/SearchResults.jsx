import SearchResultCard from "./SearchResultCard";

const results = [
  {
    type: "repository",
    title: "Forge AI",
    description: "AI-powered software engineering workspace.",
    location: "Repositories",
  },
  {
    type: "file",
    title: "AnalysisDashboardPage.jsx",
    description: "Repository analysis dashboard page.",
    location: "src/pages",
  },
  {
    type: "docs",
    title: "Architecture Documentation",
    description: "Generated documentation for project architecture.",
    location: "Documentation",
  },
  {
    type: "ai",
    title: "Repository Security Analysis",
    description: "AI explanation of detected vulnerabilities.",
    location: "AI Chat",
  },
];

export default function SearchResults() {
  return (
    <div className="space-y-5">

      {results.map((result, index) => (
        <SearchResultCard
          key={index}
          {...result}
        />
      ))}

    </div>
  );
}