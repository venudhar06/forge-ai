const languages = [
  {
    name: "React",
    percent: 45,
    color: "bg-cyan-500",
  },
  {
    name: "Python",
    percent: 35,
    color: "bg-green-500",
  },
  {
    name: "CSS",
    percent: 12,
    color: "bg-purple-500",
  },
  {
    name: "JSON",
    percent: 8,
    color: "bg-orange-500",
  },
];

export default function LanguageDistribution() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <h2 className="mb-6 text-xl font-bold text-white">
        Language Distribution
      </h2>

      <div className="space-y-6">

        {languages.map((language) => (
          <div key={language.name}>

            <div className="mb-2 flex justify-between">
              <span className="font-medium text-white">
                {language.name}
              </span>

              <span className="text-cyan-400">
                {language.percent}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">

              <div
                className={`h-full rounded-full ${language.color}`}
                style={{
                  width: `${language.percent}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

      {/* Summary */}

      <div className="mt-8 rounded-xl bg-slate-800 p-5">

        <h3 className="font-semibold text-white">
          AI Summary
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          The repository is primarily composed of a React frontend
          and a Python backend. The language distribution suggests
          a balanced full-stack architecture with minimal configuration
          overhead.
        </p>

      </div>

    </section>
  );
}