"use client";

import { useState } from "react";
import { createStudent } from "@/actions/students/create-student";

export default function AddStudentModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="rounded-xl bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
            >
                + Add Student
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-xl">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-800">
                                Add Student
                            </h2>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-600 hover:bg-slate-200"
                            >
                                ✕
                            </button>
                        </div>

                        <form action={createStudent} className="space-y-4">
                            <input
                                name="name"
                                placeholder="Name"
                                required
                                className="w-full rounded-xl border p-3"
                            />

                            <input
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full rounded-xl border p-3"
                            />

                            <input
                                name="rollNumber"
                                placeholder="Roll Number"
                                required
                                className="w-full rounded-xl border p-3"
                            />

                            <input
                                name="course"
                                placeholder="Course"
                                required
                                className="w-full rounded-xl border p-3"
                            />

                            <input
                                name="semester"
                                type="number"
                                placeholder="Semester"
                                required
                                className="w-full rounded-xl border p-3"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-blue-600 py-3 text-white"
                            >
                                Save Student
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}