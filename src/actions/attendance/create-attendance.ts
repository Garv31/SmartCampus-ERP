"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createAttendance(formData: FormData) {
  const studentId = formData.get("studentId") as string;

  await prisma.attendance.create({
    data: {
      studentId,
      date: new Date(),
      present: true,
    },
  });

  revalidatePath("/admin/attendance");
}