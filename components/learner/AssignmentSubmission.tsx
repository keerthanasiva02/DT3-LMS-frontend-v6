export default function AssignmentSubmission() {
    return (
      <div className="card">
        <h3 className="section-title">Submit Assignment</h3>
        <input
          type="text"
          placeholder="GitHub Repo URL"
          className="border rounded px-3 py-2 w-full text-sm"
        />
        <button className="mt-3 bg-teal-600 text-white px-4 py-2 rounded">
          Submit New Version
        </button>
      </div>
    );
  }
  