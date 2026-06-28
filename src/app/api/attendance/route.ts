import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { studentIds } = await req.json();

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  for (const studentId of studentIds) {
    await prisma.attendance.upsert({
      where: {
        studentId_date: {
          studentId,
          date: today,
        },
      },
      update: {
        present: true,
      },
      create: {
        studentId,
        date: today,
        present: true,
      },
    });
  }

  return NextResponse.json({
    success: true,
  });
}