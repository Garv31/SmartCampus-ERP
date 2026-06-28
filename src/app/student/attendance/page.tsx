import { prisma } from "@/lib/prisma";

export default async function StudentAttendancePage() {
    const attendance = await prisma.attendance.findMany({
        include: {
          student: true,
        },
        orderBy: {
          date: "desc",
        },
      });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Attendance
        </h1>

        <p className="mt-2 text-slate-500">
          Track your attendance record
        </p>
      </div>

      {attendance.length === 0 ? (
        <div className="rounded-3xl bg-white p-10 text-center shadow">
          <p className="text-lg text-slate-500">
            No attendance records available.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-3xl bg-white shadow">
          <table className="min-w-full">

            <thead className="bg-[#35639B] text-white">
              <tr>
              <th>Student</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
  {attendance.map((item) => (
    <tr
      key={item.id}
      className="border-b hover:bg-slate-50"
    >
      <td className="px-6 py-4">
        {item.student.name}
      </td>

      <td className="px-6 py-4">
        {new Date(item.date).toLocaleDateString()}
      </td>

      <td className="px-6 py-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            item.present
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.present ? "Present" : "Absent"}
        </span>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      )}
    </div>
  );
}