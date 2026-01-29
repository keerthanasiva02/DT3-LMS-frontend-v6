const path = [
  { title: "HTML & CSS", status: "completed" },
  { title: "JavaScript", status: "completed" },
  { title: "React", status: "current" },
  { title: "Backend", status: "locked" },
  { title: "Cloud", status: "locked" },
];

export default function LearningPathStepper() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200">
      <h3 className="text-slate-900 font-semibold mb-4">
        Learning Path
      </h3>

      <div className="space-y-3">
        {path.map((step) => (
          <div key={step.title} className="flex items-center gap-3">
            <div
              className={`w-3 h-3 rounded-full ${
                step.status === "completed"
                  ? "bg-teal-600"
                  : step.status === "current"
                  ? "bg-teal-400"
                  : "bg-slate-300"
              }`}
            />
            <span className="text-slate-700">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
