const courses = [
  {
    title: "Full Stack Development",
    lesson: "REST APIs",
    progress: 68,
  },
  {
    title: "Data Structures",
    lesson: "Binary Trees",
    progress: 42,
  },
];

export default function ContinueLearning() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">
        Continue Learning
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-2xl border border-slate-200 p-6"
          >
            <p className="text-slate-900 font-semibold text-lg">
              {c.title}
            </p>

            <p className="text-slate-600 mb-4">
              Lesson: {c.lesson}
            </p>

            <div className="h-2 bg-slate-200 rounded-full mb-6">
              <div
                className="h-2 bg-teal-500 rounded-full"
                style={{ width: `${c.progress}%` }}
              />
            </div>

            <button className="w-full bg-teal-600 text-white py-3 rounded-xl text-lg hover:bg-teal-700 transition">
              Resume
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

