function DocumentationPage() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center">
      <div className="rounded-3xl border border-gray-800 bg-[#111827] p-12 text-center shadow-2xl">
        <h1 className="text-5xl font-bold text-white">
          Documentation
        </h1>

        <p className="mt-4 text-gray-400">
          AI-generated documentation, README, API references and
          installation guides will appear here.
        </p>

        <div className="mt-8 inline-block rounded-full bg-blue-600 px-5 py-2 text-white">
          Coming Soon
        </div>
      </div>
    </div>
  );
}

export default DocumentationPage;