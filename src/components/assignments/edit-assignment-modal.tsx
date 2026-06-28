"use client";

import { useState } from "react";
import { updateAssignment } from "@/actions/assignments/update-assignment";

type Assignment = {
  id: string;
  title: string;
  description: string | null;
  dueDate: Date;
  fileUrl: string | null;
};

type Props = {
  assignment: Assignment;
};

export default function EditAssignmentModal({
  assignment,
}: Props) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState(
    assignment.fileUrl ?? ""
  );
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState(assignment.title);
  const [description, setDescription] = useState(
    assignment.description ?? ""
  );

  const [dueDate, setDueDate] = useState(
    new Date(assignment.dueDate)
      .toISOString()
      .split("T")[0]
  );

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
                Edit Assignment
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form action={updateAssignment} className="space-y-4">
              <input
                type="hidden"
                name="id"
                value={assignment.id}
                readOnly
              />

              <input
                type="hidden"
                name="fileUrl"
                value={fileUrl}
                readOnly
              />
              <input
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border p-3"
              />

              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                className="w-full rounded-xl border p-3"
              />

              <input
                type="date"
                name="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full rounded-xl border p-3"
              />
              {assignment.fileUrl && (
                <div className="rounded-xl border bg-slate-50 p-4">
                  <p className="mb-2 font-medium text-slate-700">
                    Current File
                  </p>

                  <a
                    href={assignment.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-[#35639B] px-4 py-2 text-white hover:bg-[#2D5688]"
                  >
                    📎 View Current File
                  </a>
                </div>
              )}
              <div className="space-y-3">
                <label className="font-medium">
                  Replace File (Optional)
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                  onChange={(e) => {
                    const selected = e.target.files?.[0];

                    if (!selected) return;

                    setFile(selected);
                    setFileName(selected.name);
                  }}
                />

                {fileName && (
                  <p className="text-green-600">
                    📄 {fileName}
                  </p>
                )}

                <button
                  type="button"
                  disabled={!file || uploading}
                  onClick={async () => {
                    if (!file) return;

                    setUploading(true);

                    const formData = new FormData();
                    formData.append("file", file);

                    const res = await fetch("/api/upload", {
                      method: "POST",
                      body: formData,
                    });

                    const json = await res.json();
                    console.log("New URL:", json.url);
                    setFileUrl(json.url);

                    setUploading(false);

                    alert("New file uploaded!");
                  }}
                  className="rounded-xl bg-[#35639B] px-4 py-2 text-white hover:bg-[#2D5688]"
                >
                  {uploading ? "Uploading..." : "Upload New File"}
                </button>
              </div>
              <div className="mt-6 flex justify-end gap-3">
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
                  Update Assignment
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
}