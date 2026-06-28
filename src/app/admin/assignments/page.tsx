import { prisma } from "@/lib/prisma";
import AddAssignmentModal from "@/components/assignments/add-assignment-modal";
import { deleteAssignment } from "@/actions/assignments/delete-assignment";
import EditAssignmentModal from "@/components/assignments/edit-assignment-modal";

export default async function AssignmentsPage() {
  const assignments = await prisma.assignment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Assignments
          </h1>
  
          <p className="mt-1 text-slate-500">
            Manage assignments
          </p>
        </div>
  
        <AddAssignmentModal />
      </div>
  
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {assignments.map((assignment: any) => (
          <div
            key={assignment.id}
            className="rounded-3xl bg-white p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold text-slate-800">
               {assignment.title}
            </h2>
  
            <p className="mt-3 text-slate-600">
              {assignment.description || "No description"}
            </p>
            {(() => {
  const today = new Date();
  const due = new Date(assignment.dueDate);

  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);

  const diff =
    (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

  if (diff < 0) {
    return (
      <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
        🔴 Overdue
      </span>
    );
  }

  if (diff === 0) {
    return (
      <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
        🟠 Due Today
      </span>
    );
  }

  if (diff <= 2) {
    return (
      <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
        🟡 Due Soon
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
      🟢 Active
    </span>
  );
})()}
           {/* Status Badge */}


<p className="mt-5 text-sm font-medium text-slate-500">
   Due:{" "}
  {new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(assignment.dueDate))}
</p>
            {assignment.fileUrl && (
              <a
                href={assignment.fileUrl}
                target="_blank"
                className="mt-5 inline-block rounded-xl bg-[#35639B] px-4 py-2 text-white hover:bg-[#2D5688]"
              >
                📎 View File
              </a>
            )}
  
  <div className="mt-6 flex gap-3">
  <EditAssignmentModal assignment={assignment} />

  <form action={deleteAssignment}>
    <input
      type="hidden"
      name="id"
      value={assignment.id}
    />

    <button
      type="submit"
      className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Delete
    </button>
  </form>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}