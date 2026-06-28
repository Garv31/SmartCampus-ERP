"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createNote(formData: FormData) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  await prisma.note.create({
    data: {
      title: formData.get("title") as string,
      subject: formData.get("subject") as string,
      description: formData.get("description") as string,
      fileUrl: formData.get("fileUrl") as string,

      createdBy: {
        connect: {
          id: session.user.id,
        },
      },
    },
  });

  revalidatePath("/admin/notes");
}