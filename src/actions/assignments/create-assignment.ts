"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export async function createAssignment(formData: FormData) {
  const session = await auth();

console.log("SESSION:", session);
console.log("USER ID:", session?.user?.id);

if (!session?.user?.id) {
  throw new Error("Unauthorized");
}

  await prisma.assignment.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      dueDate: new Date(formData.get("dueDate") as string),

      // UploadThing will update this later
      fileUrl: formData.get("fileUrl") as string,

      createdById: session.user.id,
    },
  });

  revalidatePath("/admin/assignments");
}