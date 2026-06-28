"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteStudent(id: string) {
  await prisma.student.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/students");
}