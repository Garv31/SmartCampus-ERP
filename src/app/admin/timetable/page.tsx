import { prisma } from "@/lib/prisma";
import AddTimetableModal from "@/components/timetable/add-timetable-modal";
import { deleteTimetable } from "@/actions/timetable/delete-timetable";
import { Trash2 } from "lucide-react";
import EditTimetableModal from "@/components/timetable/edit-timetable-modal";


export default async function TimetablePage() {
    const timetable = await prisma.timetable.findMany({
        orderBy: {
            day: "asc",
        },
    });
    const formatTime = (time: string) =>
        new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-800">
                        Timetable
                    </h1>

                    <p className="mt-1 text-slate-500">
                        Manage class schedule
                    </p>
                </div>

                <AddTimetableModal />
            </div>

            <div className="grid gap-4">
                {timetable.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-3xl bg-white p-5 shadow"
                    >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800">
                                    {item.subject}
                                </h2>

                                <p className="text-slate-500">
                                    {item.day}
                                </p>
                            </div>

                            <div className="text-sm text-slate-600">
                                Room: {item.room}
                            </div>
                        </div>

                        <div className="mt-4 rounded-xl bg-slate-100 px-4 py-3">
                            {formatTime(item.startTime)} - {formatTime(item.endTime)}
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
  <EditTimetableModal timetable={item} />

  <form
    action={async () => {
      "use server";
      await deleteTimetable(item.id);
    }}
  >
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                ))}

                {timetable.length === 0 && (
                    <div className="rounded-3xl bg-white p-10 text-center shadow">
                        <p className="text-slate-500">
                            No classes added yet
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}