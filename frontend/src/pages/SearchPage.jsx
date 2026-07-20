import SearchHeader from "../components/search/SearchHeader";
import SearchBar from "../components/search/SearchBar";
import SearchFilters from "../components/search/SearchFilters";
import SearchStats from "../components/search/SearchStats";
import SearchResults from "../components/search/SearchResults";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <div className="mx-auto max-w-7xl space-y-8">

        <SearchHeader />

        <SearchBar />

        <SearchStats />

        <SearchFilters />

        <SearchResults />

      </div>

    </div>
  );
}