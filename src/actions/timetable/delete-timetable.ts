"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTimetable(id: string) {
  await prisma.timetable.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/timetable");
}