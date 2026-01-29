export default function AIMentorCard() {
  return (
    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
      <h3 className="text-slate-900 font-semibold mb-2">
        AI Mentor Suggestions
      </h3>

      <p className="text-slate-700 mb-4">
        Revise SQL Joins to improve backend readiness.
      </p>

      <div className="flex gap-3">
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
          View Courses
        </button>
        <button className="border border-teal-300 text-teal-700 px-4 py-2 rounded-lg">
          Ask AI Mentor
        </button>
      </div>
    </div>
  );
}
