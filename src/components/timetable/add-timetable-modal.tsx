"use client";

import { useState } from "react";
import { createTimetable } from "@/actions/timetable/create-timetable";

export default function AddTimetableModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700"
      >
        + Add Class
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Add Timetable
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form action={createTimetable} className="space-y-4">
              <input
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border p-3"
              />

              <input
                name="room"
                placeholder="Room"
                required
                className="w-full rounded-xl border p-3"
              />

              <select
                name="day"
                required
                className="w-full rounded-xl border p-3"
              >
                <option value="">Select Day</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>

              <input
                type="time"
                name="startTime"
                required
                className="w-full rounded-xl border p-3"
              />

              <input
                type="time"
                name="endTime"
                required
                className="w-full rounded-xl border p-3"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 text-white"
              >
                Save Class
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}