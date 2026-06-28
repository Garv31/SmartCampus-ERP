"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export async function createStudent(formData: FormData): Promise<void> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const rollNumber = formData.get("rollNumber") as string;
    const course = formData.get("course") as string;
    const semester = Number(formData.get("semester"));

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new Error("Email already exists.");
    }

    // Hash roll number (default password)
    const hashedPassword = await bcrypt.hash(rollNumber, 10);

    // Create login account
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "STUDENT",
        semester,
      },
    });

    // Create student record
    await prisma.student.create({
      data: {
        name,
        email,
        rollNumber,
        course,
        semester,
      },
    });

    revalidatePath("/admin/students");
  } catch (error) {
    console.error("Failed to create student:", error);
    throw error;
  }
}