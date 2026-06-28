"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateNotice(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.notice.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      pinned: formData.get("pinned") === "on",
    },
  });

  revalidatePath("/admin/notices");
}