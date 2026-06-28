"use client";

import { useState } from "react";
import { updateStudent } from "@/actions/students/update-student";

type Student = {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
  course: string;
  semester: number;
};

export default function EditStudentModal({
  student,
}: {
  student: Student;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
<button
  onClick={() => setOpen(true)}
  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
>
  Edit
</button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Edit Student
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            <form action={updateStudent} className="space-y-4">
              <input
                type="hidden"
                name="id"
                defaultValue={student.id}
              />

              <input
                name="name"
                defaultValue={student.name}
                className="w-full rounded-xl border p-3"
              />

              <input
                name="email"
                defaultValue={student.email}
                className="w-full rounded-xl border p-3"
              />

              <input
                name="rollNumber"
                defaultValue={student.rollNumber}
                className="w-full rounded-xl border p-3"
              />

              <input
                name="course"
                defaultValue={student.course}
                className="w-full rounded-xl border p-3"
              />

              <input
                type="number"
                name="semester"
                defaultValue={student.semester}
                className="w-full rounded-xl border p-3"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 text-white"
              >
                Update Student
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}