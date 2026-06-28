"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import EditNoticeModal from "@/components/notices/edit-notice-modal";
import { deleteNotice } from "@/actions/notices/delete-notice";
export async function createNotice(formData: FormData) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  await prisma.notice.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      pinned: formData.get("pinned") === "on",
      createdById: session.user.id,
    },
  });

  revalidatePath("/admin/notices");
}