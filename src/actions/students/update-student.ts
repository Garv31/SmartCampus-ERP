"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateStudent(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.student.update({
    where: {
      id,
    },
    data: {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      rollNumber: formData.get("rollNumber") as string,
      course: formData.get("course") as string,
      semester: Number(formData.get("semester")),
    },
  });

  revalidatePath("/admin/students");
}