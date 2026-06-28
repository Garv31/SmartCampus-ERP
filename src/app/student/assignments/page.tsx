import { prisma } from "@/lib/prisma";

export default async function StudentAssignmentsPage() {
  const assignments = await prisma.assignment.findMany({
    orderBy: {
      dueDate: "asc",
    },
  });

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Assignments
        </h1>

        <p className="mt-2 text-slate-500">
          View all your assignments
        </p>
      </div>

      <div className="grid gap-6">

        {assignments.map((assignment) => {
          const overdue = new Date(assignment.dueDate) < new Date();

          return (
            <div
              key={assignment.id}
              className="rounded-3xl bg-white p-6 shadow-md"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div className="space-y-3">

                  <h2 className="text-2xl font-bold">
                    📘 {assignment.title}
                  </h2>

                  <p className="text-slate-600">
                    {assignment.description || "No description"}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">

                    <span className="text-sm text-slate-500">
                      📅 Due:
                      {" "}
                      {new Date(
                        assignment.dueDate
                      ).toLocaleDateString()}
                    </span>

                    {overdue ? (
                      <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                        🔴 Overdue
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        🟢 Active
                      </span>
                    )}

                  </div>

                </div>

                {assignment.fileUrl && (
                  <a
                    href={assignment.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#35639B] px-5 py-3 text-center text-white hover:bg-[#2D5688]"
                  >
                    📄 View Assignment
                  </a>
                )}

              </div>
            </div>
          );
        })}

        {assignments.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center shadow">
            <p className="text-lg text-slate-500">
              No assignments available.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}