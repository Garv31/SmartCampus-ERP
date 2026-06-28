import { prisma } from "@/lib/prisma";

export default async function StudentNotesPage() {
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Study Notes
        </h1>

        <p className="mt-2 text-slate-500">
          Access all study materials
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-3xl bg-white p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold">
              📘 {note.title}
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
              className="mt-6 inline-block rounded-xl bg-[#35639B] px-5 py-3 text-white hover:bg-[#2D5688]"
            >
              📄 Open Notes
            </a>
          </div>
        ))}

        {notes.length === 0 && (
          <div className="col-span-full rounded-3xl bg-white p-10 text-center shadow">
            <p className="text-lg text-slate-500">
              No notes available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}