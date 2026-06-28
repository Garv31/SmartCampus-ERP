import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const user = req.auth?.user;

  const pathname = req.nextUrl.pathname;

  // Not logged in
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Admin routes
  if (pathname.startsWith("/admin")) {
    if ((user as any).role !== "ADMIN") {
      return NextResponse.redirect(new URL("/student/dashboard", req.url));
    }
  }

  // Student routes
  if (pathname.startsWith("/student")) {
    if ((user as any).role !== "STUDENT") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/student/:path*"],
};
