import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize() {
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request }: any) {
      const loggedIn = !!auth?.user;

      const pathname = request.nextUrl.pathname;

      if (pathname.startsWith("/admin")) {
        return loggedIn;
      }

      if (pathname.startsWith("/student")) {
        return loggedIn;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;