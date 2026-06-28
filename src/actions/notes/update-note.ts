"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateNote(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.note.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      subject: formData.get("subject") as string,
      description: formData.get("description") as string,
      fileUrl: formData.get("fileUrl") as string,
    },
  });

  revalidatePath("/admin/notes");
}