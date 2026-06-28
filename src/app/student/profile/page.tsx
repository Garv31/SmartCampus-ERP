import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function StudentProfilePage() {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>Unauthorized</div>;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Your personal information
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow">

        <div className="mb-8 flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#35639B] text-4xl font-bold text-white">
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              {user.name}
            </h2>

            <p className="text-slate-500">
              {user.email}
            </p>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Branch
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {user.branch || "Not Added"}
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Semester
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {user.semester ?? "Not Added"}
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Phone
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {user.phone || "Not Added"}
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Role
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {user.role}
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}