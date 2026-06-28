import { prisma } from "@/lib/prisma";

export default async function StudentNoticesPage() {
  const notices = await prisma.notice.findMany({
    orderBy: [
      {
        pinned: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
  });

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Notices
        </h1>

        <p className="mt-2 text-slate-500">
          Latest announcements from your college
        </p>
      </div>

      <div className="grid gap-6">

        {notices.map((notice) => (
          <div
            key={notice.id}
            className="rounded-3xl bg-white p-6 shadow-md"
          >
            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {notice.title}
                </h2>

                <p className="mt-3 text-slate-600">
                  {notice.description}
                </p>

              </div>

              {notice.pinned && (
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                  📌 Pinned
                </span>
              )}

            </div>

            {notice.attachment && (
              <a
                href={notice.attachment}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-[#35639B] px-5 py-3 text-white hover:bg-[#2D5688]"
              >
                📎 View Attachment
              </a>
            )}

            <p className="mt-5 text-sm text-slate-500">
              {new Date(notice.createdAt).toLocaleDateString()}
            </p>

          </div>
        ))}

        {notices.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center shadow">
            <p className="text-lg text-slate-500">
              No notices available.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}