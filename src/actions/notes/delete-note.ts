"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteNote(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.note.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/notes");
}