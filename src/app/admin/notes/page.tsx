import { prisma } from "@/lib/prisma";
import AddNoteModal from "@/components/notes/add-note-modal";
import EditNoteModal from "@/components/notes/edit-note-modal";
import { deleteNote } from "@/actions/notes/delete-note";

export default async function NotesPage() {
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Notes
          </h1>

          <p className="mt-1 text-slate-500">
            Manage study notes
          </p>
        </div>

        <AddNoteModal />

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-3xl bg-white p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold">
               {note.title}
            </h2>

            <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {note.subject}
            </span>

            <p className="mt-4 text-slate-600">
              {note.description || "No description"}
            </p>

            <a
              href={note.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-xl bg-[#35639B] px-4 py-2 text-white hover:bg-[#2D5688]"
            >
              📄 Open Notes
            </a>

            <div className="mt-6 flex gap-3">

              <EditNoteModal note={note} />

              <form action={deleteNote}>
                <input
                  type="hidden"
                  name="id"
                  value={note.id}
                />

                <button
                  type="submit"
                  className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </form>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}