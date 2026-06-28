"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function login(formData: FormData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("=================================");
    console.log("LOGIN ATTEMPT");
    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);
    console.log("=================================");

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    
    const session = await auth();
    
    return {
      success: true,
      role: (session?.user as any)?.role,
    };
  } catch (error) {
    console.log("LOGIN FAILED");
    console.log(error);

    if (error instanceof AuthError) {
      return {
        error: "Invalid email or password",
      };
    }

    return {
      error: "Something went wrong",
    };
  }
}