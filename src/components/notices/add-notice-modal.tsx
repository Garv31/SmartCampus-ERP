"use client";

import { useState } from "react";
import { createNotice } from "@/actions/notices/create-notice";

export default function AddNoticeModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-[#35639B] px-6 py-3 text-white hover:bg-[#2D5688]"
      >
        + Add Notice
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Add Notice
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form action={createNotice} className="space-y-4">

              <input
                name="title"
                placeholder="Notice Title"
                required
                className="w-full rounded-xl border p-3"
              />

              <textarea
                name="description"
                placeholder="Description"
                rows={5}
                required
                className="w-full rounded-xl border p-3"
              />

              <label className="block font-medium">
                Pin Notice
              </label>

              <input
                type="checkbox"
                name="pinned"
                className="h-5 w-5"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#35639B] py-3 text-white hover:bg-[#2D5688]"
              >
                Save Notice
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
}