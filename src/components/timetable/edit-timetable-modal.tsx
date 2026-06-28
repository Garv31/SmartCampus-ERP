"use client";

import { useState } from "react";
import { updateTimetable } from "@/actions/timetable/update-timetable";

type Timetable = {
  id: string;
  subject: string;
  room: string;
  day: string;
  startTime: string;
  endTime: string;
};

export default function EditTimetableModal({
  timetable,
}: {
  timetable: Timetable;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
       className="rounded-full bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Edit Class
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form action={updateTimetable} className="space-y-4">
              <input
                type="hidden"
                name="id"
                defaultValue={timetable.id}
              />

              <input
                name="subject"
                defaultValue={timetable.subject}
                className="w-full rounded-xl border p-3"
              />

              <input
                name="room"
                defaultValue={timetable.room}
                className="w-full rounded-xl border p-3"
              />

              <select
                name="day"
                defaultValue={timetable.day}
                className="w-full rounded-xl border p-3"
              >
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
                defaultValue={timetable.startTime}
                className="w-full rounded-xl border p-3"
              />

              <input
                type="time"
                name="endTime"
                defaultValue={timetable.endTime}
                className="w-full rounded-xl border p-3"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 text-white"
              >
                Update Class
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}