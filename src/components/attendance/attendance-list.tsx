"use client";

import { useState } from "react";

type Student = {
  id: string;
  name: string;
  course: string;
  semester: number;
};

export default function AttendanceList({
  students,
}: {
  students: Student[];
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleStudent = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {students.map((student) => (
        <div
          key={student.id}
          className="flex items-center justify-between rounded-2xl border bg-white p-5"
        >
          <div>
            <h3 className="font-semibold text-lg">
              {student.name}
            </h3>

            <p className="text-slate-500">
              {student.course} • Sem {student.semester}
            </p>
          </div>

          <input
            type="checkbox"
            checked={selected.includes(student.id)}
            onChange={() => toggleStudent(student.id)}
            className="h-5 w-5"
          />
        </div>
      ))}

<button
  onClick={async () => {
    const res = await fetch("/api/attendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentIds: selected,
      }),
    });

    if (res.ok) {
      alert("Attendance Saved");
    }
  }}
  className="rounded-xl bg-blue-600 px-6 py-3 text-white"
>
  Save Attendance
</button>
    </div>
  );
}