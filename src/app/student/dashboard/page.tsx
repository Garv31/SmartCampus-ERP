import { prisma } from "@/lib/prisma";

export default async function StudentDashboard() {
  const assignments = await prisma.assignment.count();

  const notes = await prisma.note.count();

  const notices = await prisma.notice.count();

  const timetable = await prisma.timetable.count();

  const latestAssignments = await prisma.assignment.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  const latestNotes = await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  const latestNotices = await prisma.notice.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Student Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Welcome to Smart Campus ERP
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl bg-white p-6 shadow">
          <p className="text-slate-500">
            Assignments
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {assignments}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow">
          <p className="text-slate-500">
            Notes
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {notes}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow">
          <p className="text-slate-500">
            Notices
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {notices}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow">
          <p className="text-slate-500">
            Timetable Classes
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {timetable}
          </h2>
        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Assignments */}

        <div className="rounded-3xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            📚 Latest Assignments
          </h2>

          <div className="space-y-4">

            {latestAssignments.map((item) => (
              <div key={item.id} className="rounded-xl border p-4">

                <p className="font-semibold">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  Due:{" "}
                  {new Date(item.dueDate).toLocaleDateString()}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Notes */}

        <div className="rounded-3xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            📝 Latest Notes
          </h2>

          <div className="space-y-4">

            {latestNotes.map((item) => (
              <div key={item.id} className="rounded-xl border p-4">

                <p className="font-semibold">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  {item.subject}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Notices */}

        <div className="rounded-3xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            📢 Latest Notices
          </h2>

          <div className="space-y-4">

            {latestNotices.map((item) => (
              <div key={item.id} className="rounded-xl border p-4">

                <p className="font-semibold">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}