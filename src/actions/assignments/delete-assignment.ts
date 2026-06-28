"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteAssignment(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.assignment.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/assignments");
}