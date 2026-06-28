import { prisma } from "@/lib/prisma";
import AttendanceList from "@/components/attendance/attendance-list";


export default async function AttendancePage() {
  const students = await prisma.student.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const todayAttendance = await prisma.attendance.findMany({
    where: {
      date: today,
    },
  });
  
  const totalStudents = students.length;
  
  const presentToday = todayAttendance.length;
  
  const absentToday = totalStudents - presentToday;
  
  const attendancePercentage =
    totalStudents > 0
      ? Math.round((presentToday / totalStudents) * 100)
      : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Attendance
        </h1>

        <p className="mt-1 text-slate-500">
          Mark today's attendance
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
  <div className="rounded-3xl bg-white p-5 shadow">
    <p className="text-slate-500 text-sm">
      Total Students
    </p>

    <h2 className="mt-2 text-3xl font-bold text-blue-600">
      {totalStudents}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-5 shadow">
    <p className="text-slate-500 text-sm">
      Present Today
    </p>

    <h2 className="mt-2 text-3xl font-bold text-green-600">
      {presentToday}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-5 shadow">
    <p className="text-slate-500 text-sm">
      Absent Today
    </p>

    <h2 className="mt-2 text-3xl font-bold text-red-500">
      {absentToday}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-5 shadow">
    <p className="text-slate-500 text-sm">
      Attendance %
    </p>

    <h2 className="mt-2 text-3xl font-bold text-purple-600">
      {attendancePercentage}%
    </h2>
  </div>
</div>
      <div className="rounded-3xl bg-white p-6 shadow">
      <div className="mb-4">
  <h2 className="text-xl font-semibold">
    {new Date().toLocaleDateString()}
  </h2>
</div>

        <AttendanceList students={students} />
      </div>
    </div>
  );
}