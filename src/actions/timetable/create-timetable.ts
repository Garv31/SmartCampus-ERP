"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTimetable(formData: FormData) {
  await prisma.timetable.create({
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