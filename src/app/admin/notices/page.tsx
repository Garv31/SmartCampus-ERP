import { prisma } from "@/lib/prisma";
import AddNoticeModal from "@/components/notices/add-notice-modal";
import EditNoticeModal from "@/components/notices/edit-notice-modal";
import { deleteNotice } from "@/actions/notices/delete-notice";

export default async function NoticesPage() {
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
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Notices
          </h1>

          <p className="mt-1 text-slate-500">
            Manage campus notices and announcements
          </p>
        </div>

        <AddNoticeModal />
      </div>

      {/* Statistics */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-slate-500">
            Total Notices
          </p>

          <h2 className="mt-2 text-4xl font-bold text-blue-600">
            {notices.length}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-slate-500">
            Pinned Notices
          </p>

          <h2 className="mt-2 text-4xl font-bold text-red-500">
            {notices.filter((n) => n.pinned).length}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-slate-500">
            Latest Updates
          </p>

          <h2 className="mt-2 text-4xl font-bold text-green-600">
            Today
          </h2>
        </div>
      </div>

      {/* Notices */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            {/* Pinned Badge */}
            {notice.pinned && (
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                📌 Pinned
              </span>
            )}

            {/* Title */}
            <h2 className="mt-4 text-2xl font-bold text-slate-800">
              {notice.title}
            </h2>

            {/* Description */}
            <p className="mt-4 line-clamp-3 text-slate-600">
              {notice.description}
            </p>

            {/* Attachment */}
            {notice.attachment && (
              <a
                href={notice.attachment}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-xl bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200"
              >
                📎 View Attachment
              </a>
            )}

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between">
              <EditNoticeModal notice={notice} />

              <form action={deleteNotice}>
                <input
                  type="hidden"
                  name="id"
                  value={notice.id}
                />

                <button
                  type="submit"
                  className="rounded-xl bg-red-500 px-5 py-2.5 text-white transition hover:bg-red-600 hover:shadow-lg"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {notices.length === 0 && (
        <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
          <div className="text-6xl">
            📢
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            No Notices Yet
          </h2>

          <p className="mt-2 text-slate-500">
            Click "Add Notice" to publish your first announcement.
          </p>
        </div>
      )}
    </div>
  );
}