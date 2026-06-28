"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteNotice(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.notice.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/notices");
}