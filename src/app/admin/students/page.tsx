import { prisma } from "@/lib/prisma";
import AddStudentModal from "@/components/students/add-student-modal";
import EditStudentModal from "@/components/students/edit-student-modal";
import StudentSearch from "@/components/students/student-search";
import { deleteStudent } from "@/actions/students/delete-student";
import { Trash2 } from "lucide-react";

export default async function StudentsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;
  const search = params.search || "";

  const students = await prisma.student.findMany({
    where: search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              rollNumber: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : {},
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
  <div>
    <h1 className="text-4xl font-bold text-slate-800">
      Students
    </h1>

    <p className="mt-1 text-slate-500">
      Add, edit and manage student records
    </p>
  </div>

  <div className="md:self-start">
  <AddStudentModal />
</div>
</div>
<div className="grid gap-5 md:grid-cols-3">
  <div className="rounded-3xl bg-white p-6 shadow-sm">
    <p className="text-slate-500">Total Students</p>
    <h2 className="mt-2 text-4xl font-bold text-blue-600">
      {students.length}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow-sm">
    <p className="text-slate-500">Courses</p>
    <h2 className="mt-2 text-4xl font-bold text-green-600">
      {[...new Set(students.map((s) => s.course))].length}
    </h2>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow-sm">
    <p className="text-slate-500"> Semester</p>
    <h2 className="mt-2 text-4xl font-bold text-purple-600">
      {students.length
        ? (
            students.reduce((a, b) => a + b.semester, 0) /
            students.length
          ).toFixed(1)
        : 0}
    </h2>
  </div>
</div>
      {/* Search */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-slate-800">
          Search Students
        </h2>

        <StudentSearch />
      </div>

      {/* Students Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {students.map((student) => (
          <div
            key={student.id}
            className="rounded-3xl bg-white p-6 shadow transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-semibold text-white">
  {student.name.charAt(0).toUpperCase()}
</div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  {student.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {student.email}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2">
            <div className="flex items-center gap-2">
  <span className="font-semibold">
    Roll:
  </span>

  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
    {student.rollNumber}
  </span>
</div>

              <div className="flex items-center gap-2">
  <span className="font-semibold">
    Course:
  </span>

  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
    {student.course}
  </span>
</div>

<div className="flex items-center gap-2">
  <span className="font-semibold">
    Semester:
  </span>

  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
    Sem {student.semester}
  </span>
</div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <EditStudentModal student={student} />

              <form
                action={async () => {
                  "use server";
                  await deleteStudent(student.id);
                }}
              >
                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-600 hover:shadow-md transition-all"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {students.length === 0 && (
        <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow">
          <div className="space-y-3">
    <h2 className="text-2xl font-semibold">
        No Students Found
    </h2>

    <p>
        Click "Add Student" to create the first student record.
    </p>
</div>
        </div>
      )}
    </div>
  );
}