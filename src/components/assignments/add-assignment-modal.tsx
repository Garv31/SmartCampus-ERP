"use client";

import { useState } from "react";
import { createAssignment } from "@/actions/assignments/create-assignment";

export default function AddAssignmentModal() {
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-[#35639B] px-6 py-3 text-white transition hover:bg-[#2D5688]"
      >
        + Add Assignment
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Add Assignment
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form action={createAssignment} className="space-y-5">

              <input
                name="title"
                placeholder="Assignment Title"
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
                type="date"
                name="dueDate"
                required
                className="w-full rounded-xl border p-3"
              />

              <div className="space-y-3">

                <label className="font-medium">
                  Assignment File
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
                  <p className="text-sm text-slate-600">
                    📄 {fileName}
                  </p>
                )}

                <button
                  type="button"
                  disabled={!file || uploading}
                  onClick={async () => {
                    if (!file) return;

                    setUploading(true);

                    try {
                      const formData = new FormData();
                      formData.append("file", file);

                      const res = await fetch("/api/upload", {
                        method: "POST",
                        body: formData,
                      });

                      const json = await res.json();

                      console.log(json);

                      if (!res.ok) {
                        throw new Error(json.error);
                      }

                      setFileUrl(json.url);

                      alert("File Uploaded Successfully");
                    } catch (error) {
                      console.error(error);
                      alert("Upload Failed");
                    } finally {
                      setUploading(false);
                    }
                  }}
                  className="rounded-xl bg-[#35639B] px-4 py-2 text-white hover:bg-[#2D5688]"
                >
                  {uploading ? "Uploading..." : "Upload File"}
                </button>

                <input
                  type="hidden"
                  name="fileUrl"
                  value={fileUrl}
                />

                {fileUrl && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-4">

                    <div className="flex items-center gap-3">

                      <span className="text-2xl">
                        📄
                      </span>

                      <div>

                        <p className="font-semibold text-green-700">
                          {fileName}
                        </p>

                        <p className="text-sm text-slate-600">
                          Uploaded Successfully
                        </p>

                      </div>

                    </div>

                  </div>
                )}

              </div>

              <button
                type="submit"
                disabled={!fileUrl}
                className="w-full rounded-xl bg-[#35639B] py-3 text-white transition hover:bg-[#2D5688] disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                Save Assignment
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
}