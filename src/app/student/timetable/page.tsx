import { prisma } from "@/lib/prisma";

export default async function StudentTimetablePage() {
  const timetable = await prisma.timetable.findMany({
    orderBy: [
      {
        day: "asc",
      },
      {
        startTime: "asc",
      },
    ],
  });

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Timetable
        </h1>

        <p className="mt-2 text-slate-500">
          Your weekly class schedule
        </p>
      </div>

      {timetable.length === 0 ? (
        <div className="rounded-3xl bg-white p-10 text-center shadow">
          <p className="text-lg text-slate-500">
            No timetable available.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-3xl bg-white shadow">

          <table className="min-w-full">

            <thead className="bg-[#35639B] text-white">

              <tr>
                <th className="px-6 py-4 text-left">Day</th>
                <th className="px-6 py-4 text-left">Subject</th>
                <th className="px-6 py-4 text-left">Faculty</th>
                <th className="px-6 py-4 text-left">Room</th>
                <th className="px-6 py-4 text-left">Time</th>
              </tr>

            </thead>

            <tbody>

              {timetable.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="px-6 py-4">{item.day}</td>
                  <td className="px-6 py-4 font-semibold">
                    {item.subject}
                  </td>
                  <td className="px-6 py-4">
  -
</td>
                  <td className="px-6 py-4">
                    {item.room}
                  </td>
                  <td className="px-6 py-4">
                    {item.startTime} - {item.endTime}
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