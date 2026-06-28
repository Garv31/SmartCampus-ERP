"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateTimetable(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.timetable.update({
    where: {
      id,
    },
    data: {
      subject: formData.get("subject") as string,
      room: formData.get("room") as string,
      day: formData.get("day") as string,
      startTime: formData.get("startTime") as string,
      endTime: formData.get("endTime") as string,
    },
  });

  revalidatePath("/admin/timetable");
}