"use client";

import { useState } from "react";
import { updateNotice } from "@/actions/notices/update-notice";

type Notice = {
  id: string;
  title: string;
  description: string;
  pinned: boolean;
};

type Props = {
  notice: Notice;
};

export default function EditNoticeModal({ notice }: Props) {
  const [open, setOpen] = useState(false);

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
                Edit Notice
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form action={updateNotice} className="space-y-4">

              <input
                type="hidden"
                name="id"
                value={notice.id}
              />

              <input
                type="text"
                name="title"
                defaultValue={notice.title}
                required
                className="w-full rounded-xl border p-3"
              />

              <textarea
                name="description"
                defaultValue={notice.description}
                rows={5}
                required
                className="w-full rounded-xl border p-3"
              />

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="pinned"
                  defaultChecked={notice.pinned}
                />

                <span>Pin Notice</span>
              </label>

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
                  Update Notice
                </button>

              </div>

            </form>

          </div>
        </div>
      )}
    </>
  );
}