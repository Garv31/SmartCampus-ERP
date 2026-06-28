"use client";

import { useState } from "react";
import { updateNote } from "@/actions/notes/update-note";

type Note = {
  id: string;
  title: string;
  subject: string;
  description: string | null;
  fileUrl: string;
};

type Props = {
  note: Note;
};

export default function EditNoteModal({ note }: Props) {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(note.title);
  const [subject, setSubject] = useState(note.subject);
  const [description, setDescription] = useState(
    note.description ?? ""
  );
  const [fileUrl, setFileUrl] = useState(note.fileUrl);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-[#35639B] px-4 py-2 text-white hover:bg-[#2D5688]"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Edit Note
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form action={updateNote} className="space-y-4">

              <input
                type="hidden"
                name="id"
                value={note.id}
                readOnly
              />

              <input
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border p-3"
              />

              <input
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border p-3"
              />

              <textarea
                name="description"
                rows={5}
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

              <input
                type="url"
                name="fileUrl"
                value={fileUrl}
                onChange={(e) =>
                  setFileUrl(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border px-5 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-[#35639B] px-5 py-2 text-white hover:bg-[#2D5688]"
                >
                  Update Note
                </button>

              </div>

            </form>

          </div>
        </div>
      )}
    </>
  );
}