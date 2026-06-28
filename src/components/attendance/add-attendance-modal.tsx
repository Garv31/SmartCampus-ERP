"use client";

import { useState } from "react";

export default function AddAttendanceModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
      >
        + Add Attendance
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Add Attendance
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-500">
              Form will be added in next step.
            </p>
          </div>
        </div>
      )}
    </>
  );
}