import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@smartcampus.com",
    },
    update: {},
    create: {
      name: "Admin",
      email: "admin@smartcampus.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin created");
  console.log(admin.email);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });