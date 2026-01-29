export default function ReadinessOverviewCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="w-28 h-28 rounded-full border-8 border-teal-300 flex items-center justify-center">
          <span className="text-teal-600 text-2xl font-bold">72%</span>
        </div>

        <div>
          <p className="text-slate-600 text-sm">Overall Readiness</p>
          <p className="text-slate-900 text-xl font-semibold">
            Backend Developer
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="space-y-4">
        {[
          { label: "Backend", value: 80 },
          { label: "DSA", value: 65 },
          { label: "Databases", value: 55 },
          { label: "Cloud", value: 35 },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-sm text-slate-700 mb-1">
              <span>{s.label}</span>
              <span>{s.value}%</span>
            </div>

            <div className="h-2 bg-slate-200 rounded-full">
              <div
                className="h-2 bg-teal-500 rounded-full"
                style={{ width: `${s.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

