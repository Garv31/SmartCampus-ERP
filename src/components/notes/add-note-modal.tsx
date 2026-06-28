"use client";

import { useState } from "react";
import { createNote } from "@/actions/notes/create-note";

export default function AddNoteModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-[#35639B] px-6 py-3 text-white hover:bg-[#2D5688]"
      >
        + Add Note
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Add Note
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form action={createNote} className="space-y-4">

              <input
                name="title"
                placeholder="Note Title"
                required
                className="w-full rounded-xl border p-3"
              />

              <input
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border p-3"
              />

              <textarea
                name="description"
                placeholder="Description"
                rows={5}
                className="w-full rounded-xl border p-3"
              />

              <input
                type="url"
                name="fileUrl"
                placeholder="https://drive.google.com/..."
                required
                className="w-full rounded-xl border p-3"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#35639B] py-3 text-white hover:bg-[#2D5688]"
              >
                Save Note
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
}