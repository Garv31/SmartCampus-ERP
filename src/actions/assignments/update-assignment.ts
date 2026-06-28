"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateAssignment(formData: FormData) {
    console.log("UPDATE CALLED");
console.log(formData.get("title"));
console.log(formData.get("fileUrl"));
  const id = formData.get("id") as string;

  await prisma.assignment.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      dueDate: new Date(formData.get("dueDate") as string),
      fileUrl: formData.get("fileUrl") as string,
    },
  });

  revalidatePath("/admin/assignments");
}